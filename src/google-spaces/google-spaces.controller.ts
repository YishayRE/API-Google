import { Body, Controller, Post } from '@nestjs/common';
import { GoogleSpacesService } from './google-spaces.service';

@Controller('google-spaces')
export class GoogleSpacesController {
  constructor(private readonly googleSpacesService: GoogleSpacesService) {}

  @Post()
  postMensajeSpace(@Body('msg') msg: string): any {
    try {
        return this.googleSpacesService.webhook(msg);
    } catch (error) {
        console.error(error);

        return error;
    }
  }
}
