import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfModModule } from './pdf-mod/pdf-mod.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

ServeStaticModule
@Module({
  imports: [ ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'), // Path to your assets directory
  }),PdfModModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
