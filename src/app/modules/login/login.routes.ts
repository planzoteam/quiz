import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { GuestGuard } from '../../shared/guards/guest.guard';

export const LOGIN_ROUTES: Routes = [
  { path: 'login', component: LoginPage, canActivate: [GuestGuard] },
];
