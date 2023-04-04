import { Controller, Post, Body } from '@nestjs/common';
import { GmailService } from './gmail.service';

@Controller('yishay')
export class GmailController {
  constructor(private readonly gmailService: GmailService) {}

  @Post('send')
  async sendEmail(@Body('email') email: string, @Body('name') name: string) {
    return await this.gmailService.sendMail(email, name);
  }
}
