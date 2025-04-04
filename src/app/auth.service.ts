import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private msal: MsalService) {}

  login() {
    this.msal.loginRedirect();
  }

  logout() {
    this.msal.logout();
  }

  getCurrentUser() {
    return this.msal.instance.getActiveAccount();
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }
  hasRole(role: string): boolean {
    const account = this.getCurrentUser();
    const roles: string[] = account?.idTokenClaims?.roles || [];
    return roles.includes(role);
  }
}
