import { Module } from '@nestjs/common';
import { PdfModController } from './pdf-mod.controller';
import { PdfModService } from './pdf-mod.service';

@Module({
  controllers: [PdfModController],
  providers: [PdfModService]
})
export class PdfModModule {}
