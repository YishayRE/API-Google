import { Test, TestingModule } from '@nestjs/testing';
import { YishayController } from './yishay.controller';

describe('YishayController', () => {
  let controller: YishayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YishayController],
    }).compile();

    controller = module.get<YishayController>(YishayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
