// upload-pdf.dto.ts
import { IsNotEmpty } from 'class-validator';

export class UploadPdfDto {
  @IsNotEmpty()
  pdfData: Buffer; // Assuming you're uploading a Buffer representing the PDF file
}