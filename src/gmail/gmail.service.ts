import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GmailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(email: string, name: string) {
    try {
      await this.mailerService.sendMail({
        to: email,
        subject: 'Greeting from NestJS NodeMailer',
        template: './email',
        context: {
            name: name
        }
      });

      return `Correo enviado a ${email}`;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
}
