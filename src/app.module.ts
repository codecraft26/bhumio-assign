import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfModModule } from './pdf-mod/pdf-mod.module';

@Module({
  imports: [PdfModModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
