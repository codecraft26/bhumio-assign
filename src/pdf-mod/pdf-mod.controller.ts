import { Controller, Get, Post, UploadedFile, UseInterceptors, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PdfService } from './pdf-mod.service';
import { Response } from 'express';

@Controller('/pdf')
export class PdfController {
    constructor(private readonly pdfService: PdfService) {}

    @Get('/fetch')
    async fetchPdf(@Res() res: Response) {
        // Use the actual file name here, e.g., 'example.pdf'
        const pdfBuffer = await this.pdfService.fetchPdf('example.pdf');
        res.setHeader('Content-Type', 'application/pdf');
        res.send(pdfBuffer);
    }


    @Post('/save')
    @UseInterceptors(FileInterceptor('pdfBuffer'))
    async savePdf(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
        await this.pdfService.savePdf(file);
        res.send('PDF saved successfully.');
    }
}
