import { Module } from '@nestjs/common';
import { YishayService } from './yishay.service';
import { YishayController } from './yishay.controller';

@Module({
  controllers: [YishayController],
  providers: [YishayService]
})
export class YishayModule {}
