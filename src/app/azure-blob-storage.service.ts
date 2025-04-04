import { Injectable } from '@angular/core';
import { BlobServiceClient, BlockBlobClient } from '@azure/storage-blob';

@Injectable({ providedIn: 'root' })
export class AzureBlobStorageService {
  private accountName = 'yourstorageaccount'; // Replace with your storage account
  private containerName = 'receipts';
  private sasToken = 'your-sas-token'; // Replace with your SAS token

  private getBlobClient(filename: string): BlockBlobClient {
    const blobServiceClient = new BlobServiceClient(
      `https://${this.accountName}.blob.core.windows.net?${this.sasToken}`
    );
    const containerClient = blobServiceClient.getContainerClient(this.containerName);
    return containerClient.getBlockBlobClient(filename);
  }

  uploadFile(filename: string, file: File, progressCallback: (progress: number) => void): Promise<void> {
    const blockBlobClient = this.getBlobClient(filename);

    return new Promise((resolve, reject) => {
      blockBlobClient.uploadBrowserData(file, {
        onProgress: (ev) => {
          progressCallback((ev.loadedBytes / file.size) * 100);
        },
        blobHTTPHeaders: { blobContentType: file.type }
      }).then(() => resolve()).catch(err => reject(err));
    });
  }
}
