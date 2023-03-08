import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruebaGoogleController } from './prueba-google/prueba-google.controller';
import { PruebaGoogleService } from './prueba-google/prueba-google.service';
import { YishayController } from './yishay/yishay.controller';
import { YishayService } from './yishay/yishay.service';

@Module({
  imports: [],
  controllers: [AppController, PruebaGoogleController, YishayController],
  providers: [AppService, PruebaGoogleService, YishayService],
})
export class AppModule {}
