import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruebaGoogleController } from './prueba-google/prueba-google.controller';
import { PruebaGoogleService } from './prueba-google/prueba-google.service';
import { YishayController } from './yishay/yishay.controller';
import { YishayService } from './yishay/yishay.service';
import { YishayModule } from './yishay/yishay.module';

console.log(join(__dirname, './templates'));

@Module({
  imports: [
    YishayModule,
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
    }), ConfigModule.forRoot()
  ],
  controllers: [AppController, PruebaGoogleController, YishayController],
  providers: [AppService, PruebaGoogleService, YishayService],
})
export class AppModule {}
