import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';
import { google } from 'googleapis';
import {authenticate} from '@google-cloud/local-auth';
import { join } from 'path';

@Injectable()
export class CalendarService {
  private scopes: string[];
  private token_path: string;
  private credentials_path: string;
  private async loadSavedCredentialsIfExist() {
    try {
      const content = readFileSync(this.token_path, {encoding: 'utf-8'});
      const credentials = JSON.parse(content);
      return google.auth.fromJSON(credentials);
    } catch (err) {
      return null;
    }
  }
  private async saveCredentials(client: any) {
    const content = readFileSync(this.credentials_path, {encoding: 'utf-8'});
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
      type: 'authorized_user',
      client_id: key.client_id,
      client_secret: key.client_secret,
      refresh_token: client.credentials.refresh_token,
    });
    writeFileSync(this.token_path, payload);
  }
  private async authorize() {
    try {
      const client = await this.loadSavedCredentialsIfExist();

      if (client)
        return client;

      const newClient = await authenticate({
        scopes: this.scopes,
        keyfilePath: this.credentials_path,
      });

      if (newClient.credentials)
        await this.saveCredentials(newClient);
      
      return newClient;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
  private async listEvents(auth: any) {
    const calendar = google.calendar({version: 'v3', auth});
    const res = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = res.data.items;
    if (!events || events.length === 0) {
      console.log('No upcoming events found.');
      return;
    }
    
    console.log('Upcoming 10 events:');
    events.map(event => {
      const start = event.start.dateTime || event.start.date;
      console.log(`${start} - ${event.summary}`);
    });
  }

  constructor() {
    this.scopes = [
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events'
    ];
    this.token_path = join(__dirname, '../assets', './token.json');
    this.credentials_path = join(__dirname, '../assets', './credentials.json');
  }

  getCalendar() {
    try {
      this.authorize().then(this.listEvents).catch(console.error)

      return 'getCalendar';
    } catch (error) {
      console.error(error);

      return error;
    }
  }
}