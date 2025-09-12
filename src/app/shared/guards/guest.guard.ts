import { computed, Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { ClerkService } from '@jsrob/ngx-clerk';

@Injectable({ providedIn: 'root' })
export class GuestGuard implements CanActivate {
  constructor(private clerk: ClerkService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    const isGuest = computed(() => !this.clerk.user());
    console.log(this.clerk.user());
    if (!isGuest()) {
      return this.router.parseUrl('/');
    }

    return true;
  }
}
