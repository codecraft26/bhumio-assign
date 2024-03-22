import { Test, TestingModule } from '@nestjs/testing';
import { PdfModService } from './pdf-mod.service';

describe('PdfModService', () => {
  let service: PdfModService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdfModService],
    }).compile();

    service = module.get<PdfModService>(PdfModService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
