import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ClaimService {
  private apiUrl = 'https://your-api.azurewebsites.net/api';

  constructor(private http: HttpClient) {}

  submitClaim(data: any) {
    return this.http.post(`${this.apiUrl}/CreateTourClaim`, data);
  }

  getPendingApprovals() {
    return this.http.get<any[]>(`${this.apiUrl}/GetPendingApprovals`);
  }
  
}
