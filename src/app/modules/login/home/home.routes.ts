import { Routes } from '@angular/router';
import { AuthGuard } from '../../../shared/guards/auth.guard';
import { HomePage } from './pages/home-page/home-page';

export const HOME_ROUTES: Routes = [{ path: '', component: HomePage, canActivate: [AuthGuard] }];
