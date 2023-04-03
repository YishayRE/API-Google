import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { join } from 'path';

import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GmailController } from './gmail/gmail.controller';
import { GmailService } from './gmail/gmail.service';
import { GoogleSpacesController } from './google-spaces/google-spaces.controller';
import { GoogleSpacesService } from './google-spaces/google-spaces.service';
import { CalendarController } from './calendar/calendar.controller';
import { CalendarService } from './calendar/calendar.service';

console.log(join(__dirname, './templates'));

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('EMAIL_HOST'),
          secure: false,
          auth: {
            user: config.get('EMAIL_USER'),
            pass: config.get('EMAIL_PASSWORD'),
          },
        },
        defaults: {
          from: config.get('EMAIL_USER')
        },
        template: {
          dir: join(__dirname, './templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true
          }
        }
      }),
      inject: [ConfigService]
    }), 
    ConfigModule.forRoot(),
    HttpModule
  ],
  controllers: [AppController, GmailController, GoogleSpacesController, CalendarController],
  providers: [AppService, GmailService, GoogleSpacesService, CalendarService],
})
export class AppModule {}
