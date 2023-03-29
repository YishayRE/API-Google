import { Test, TestingModule } from '@nestjs/testing';
import { GoogleSpacesService } from './google-spaces.service';

describe('GoogleSpacesService', () => {
  let service: GoogleSpacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleSpacesService],
    }).compile();

    service = module.get<GoogleSpacesService>(GoogleSpacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
