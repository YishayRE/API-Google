import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateYishayDto } from './dto/create-yishay.dto';
import { UpdateYishayDto } from './dto/update-yishay.dto';

@Injectable()
export class YishayService {
  constructor(private mailerService: MailerService) {}

  create(createYishayDto: CreateYishayDto) {
    return 'This action adds a new yishay';
  }

  findAll() {
    return `This action returns all yishay`;
  }

  findOne(id: number) {
    return `This action returns a #${id} yishay`;
  }

  update(id: number, updateYishayDto: UpdateYishayDto) {
    return `This action updates a #${id} yishay`;
  }

  remove(id: number) {
    return `This action removes a #${id} yishay`;
  }

  async sendMail(email: string, name: string) {
    console.log(email)
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
