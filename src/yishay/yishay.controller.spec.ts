import { Test, TestingModule } from '@nestjs/testing';
import { YishayController } from './yishay.controller';
import { YishayService } from './yishay.service';

describe('YishayController', () => {
  let controller: YishayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YishayController],
      providers: [YishayService],
    }).compile();

    controller = module.get<YishayController>(YishayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
