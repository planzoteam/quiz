import { Routes } from '@angular/router';
import { LOGIN_ROUTES } from './modules/login/login.routes';
import { BaseLayoutPage } from './modules/login/base-layout/pages/base-layout-page/base-layout-page';
import { HOME_ROUTES } from './modules/login/home/home.routes';

export const routes: Routes = [
  ...LOGIN_ROUTES,
  {
    path: '',
    component: BaseLayoutPage,
    children: [...HOME_ROUTES],
  },
  { path: '**', redirectTo: '' },
];
