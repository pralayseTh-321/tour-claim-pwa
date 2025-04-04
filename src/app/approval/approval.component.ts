import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../claim.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit{
  pendingApprovals: any[] = [];
  isLoading = true;

  constructor(
    private claimService: ClaimService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadPendingApprovals();
  }

  loadPendingApprovals() {
    this.isLoading = true;
    this.claimService.getPendingApprovals().subscribe({
      next: (approvals) => {
        this.pendingApprovals = approvals;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Failed to load approvals', err);
      }
    });
  }

  approveClaim(claimId: number) {
    console.log('Approved claim:', claimId);
    // TODO: Call service to approve and refresh list
  }

  rejectClaim(claimId: number) {
    console.log('Rejected claim:', claimId);
    // TODO: Call service to reject and refresh list
  }
}
