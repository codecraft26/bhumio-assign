import { Test, TestingModule } from '@nestjs/testing';
import { PdfModController } from './pdf-mod.controller';

describe('PdfModController', () => {
  let controller: PdfModController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdfModController],
    }).compile();

    controller = module.get<PdfModController>(PdfModController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
