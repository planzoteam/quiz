import { Injectable, computed } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ClerkService } from '@jsrob/ngx-clerk';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private clerk: ClerkService, private router: Router) {}

  canActivate(): boolean {
    const userSignal = this.clerk.user;
    const isLoggedIn = computed(() => !!userSignal());

    if (!isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
