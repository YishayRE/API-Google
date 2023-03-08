import { Test, TestingModule } from '@nestjs/testing';
import { PruebaGoogleController } from './prueba-google.controller';

describe('PruebaGoogleController', () => {
  let controller: PruebaGoogleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PruebaGoogleController],
    }).compile();

    controller = module.get<PruebaGoogleController>(PruebaGoogleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
