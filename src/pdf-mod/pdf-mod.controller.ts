import { Controller, Get,Post,Res,Body, HttpStatus } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { Response } from 'express';
import { PdfModService } from './pdf-mod.service';
import { UploadPdfDto } from './upload.dto';

@Controller('pdf')
export class PdfModController {
    constructor(private readonly pdfModService: PdfModService) {}
    @Get()
    getHello(): any {
        return {
            message: 'Hello World!',
            data: {
                name: 'John Doe',
            },
        };
    }

    @Get('load')
    async loadPdf(@Query('path') path: string, @Res() res: Response) {
        try {
            const pdfData = await this.pdfModService.loadFile('./example.pdf');
            res.setHeader('Content-Type', 'application/pdf');
            res.send(pdfData);
        } catch (error) {
            res.status(500).send('Failed to load PDF file');
        }
    }

   
}
