import { Test, TestingModule } from '@nestjs/testing';
import { GoogleSpacesController } from './google-spaces.controller';

describe('GoogleSpacesController', () => {
  let controller: GoogleSpacesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoogleSpacesController],
    }).compile();

    controller = module.get<GoogleSpacesController>(GoogleSpacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
