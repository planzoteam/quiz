import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideClerk } from '@jsrob/ngx-clerk';

const clerkConfig = {
  publishableKey: 'pk_test_ZGVlcC1tYXN0b2Rvbi00NC5jbGVyay5hY2NvdW50cy5kZXYk',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClerk(clerkConfig),
    provideHttpClient(),
  ],
};
