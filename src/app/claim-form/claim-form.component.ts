import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.component.html',
  styleUrls: ['./claim-form.component.scss']
})
export class ClaimFormComponent {
  claimForm = this.fb.group({
    fromDate: ['', Validators.required],
    toDate: ['', Validators.required],
    fromDestination: ['', Validators.required],
    toDestination: ['', Validators.required],
    purpose: ['', Validators.required],
    modeOfTravel: ['', Validators.required],
    travelAmount: [0, [Validators.required, Validators.min(0)]],
    lodgingAmount: [0, [Validators.required, Validators.min(0)]],
    mealAmount: [0, [Validators.required, Validators.min(0)]],
    intracityTravelAmount: [0, [Validators.required, Validators.min(0)]],
    otherExpenses: [0, [Validators.required, Validators.min(0)]]
  });

  constructor(
    private fb: FormBuilder,
    private claimService: ClaimService,
    private snackBar: MatSnackBar
  ) {}

  onSubmit() {
    if (this.claimForm.valid) {
      this.claimService.submitClaim(this.claimForm.value).subscribe({
        next: () => this.snackBar.open('Claim submitted successfully!', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success']
        }),
        error: () => this.snackBar.open('Failed to submit claim', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error']
        })
      });
    } else {
      this.snackBar.open('Please fill all required fields.', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-warning']
      });
    }
  }
}
