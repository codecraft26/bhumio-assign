import { Module } from '@nestjs/common';
import { PdfController } from './pdf-mod.controller';
import { PdfService } from './pdf-mod.service';

@Module({
  controllers: [PdfController],
  providers: [PdfService]
})
export class PdfModModule {}
