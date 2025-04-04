import { Component, Input } from '@angular/core';
import { AzureBlobStorageService } from '../azure-blob-storage.service';
@Component({
  selector: 'app-receipt-upload',
  templateUrl: './receipt-upload.component.html',
  styleUrls: ['./receipt-upload.component.scss']
})
export class ReceiptUploadComponent {
  @Input() claimId!: number;

  selectedFiles: File[] = [];
  uploadProgress: number = 0;
  isUploading = false;

  constructor(private blobService: AzureBlobStorageService) {}

  onFileSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
  }

  uploadFiles() {
    if (this.selectedFiles.length === 0) return;

    this.isUploading = true;
    this.uploadProgress = 0;

    const uploadPromises = this.selectedFiles.map(file => {
      return this.blobService.uploadFile(
        `claims/${this.claimId}/${file.name}`,
        file,
        progress => {
          this.uploadProgress = progress;
        }
      );
    });

    Promise.all(uploadPromises)
      .then(() => {
        this.isUploading = false;
        this.selectedFiles = [];
        this.uploadProgress = 100;
      })
      .catch(() => {
        this.isUploading = false;
        this.uploadProgress = 0;
      });
  }
}
