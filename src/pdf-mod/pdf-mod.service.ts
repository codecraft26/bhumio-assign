import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { promises as fs } from 'fs';
import { Express } from 'express';
import { join } from 'path';

@Injectable()
export class PdfService {
    private readonly baseDir = join(__dirname, '..'); // Adjust the base directory as needed

    async fetchPdf(fileName: string): Promise<Buffer> {
        // Path to the assets directory
        const assetsPath = join(__dirname, '..', 'assets');

        try {
            const fullFilePath =  join(this.baseDir, 'assets', fileName);
            await fs.access(fullFilePath); // Ensure the file exists
            return fs.readFile(fullFilePath); // Read and return the file's content
        } catch (error) {
            throw new HttpException('PDF not found.', HttpStatus.NOT_FOUND);
        }
    }

    async savePdf(file: Express.Multer.File): Promise<void> {
        if (!file) {
            throw new HttpException('No PDF file uploaded.', HttpStatus.BAD_REQUEST);
        }

        const fullFilePath = join(this.baseDir, 'example.pdf'); // Change 'example.pdf' to your desired path/filename

        try {
            await fs.writeFile(fullFilePath, file.buffer); // Save the PDF file
        } catch (error) {
            throw new HttpException('Error saving PDF.', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
