import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimFormComponent } from './claim-form/claim-form.component';
import { ApprovalComponent } from './approval/approval.component';
import { FinanceComponent } from './finance/finance.component';
import { ReceiptUploadComponent } from './receipt-upload/receipt-upload.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  { path: '', redirectTo: 'claim-form', pathMatch: 'full' }, // Default route
  { path: 'claim-form', component: ClaimFormComponent },
  {path: 'approval', component: ApprovalComponent},
  { path: 'finance', component: FinanceComponent },
  {path:'receipt', component:ReceiptUploadComponent},
  {path:'notification', component:NotificationComponent}
  // Add more routes here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
