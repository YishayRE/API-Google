import { Test, TestingModule } from '@nestjs/testing';
import { YishayService } from './yishay.service';

describe('YishayService', () => {
  let service: YishayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YishayService],
    }).compile();

    service = module.get<YishayService>(YishayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
