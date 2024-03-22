import { Controller, Post, Body, Res, HttpStatus,Injectable } from '@nestjs/common';
import { Response } from 'express';
import { UploadPdfDto } from './upload.dto';

const fs = require('fs');

@Injectable()
export class PdfModService {


    async loadFile(filePath: string): Promise<Buffer> {
        try {
            const pdfData = await fs.promises.readFile();
            return pdfData;
        } catch (error) {
            throw new Error('Failed to load PDF file');
        }
    }
   
}
