import { Test, TestingModule } from '@nestjs/testing';
import { PruebaGoogleService } from './prueba-google.service';

describe('PruebaGoogleService', () => {
  let service: PruebaGoogleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PruebaGoogleService],
    }).compile();

    service = module.get<PruebaGoogleService>(PruebaGoogleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
