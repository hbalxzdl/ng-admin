import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RouteguardService } from './services/router/router.service';
export const AppRoutes: Routes =[
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: LayoutComponent,
    canActivate: [RouteguardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [RouteguardService]
  },
  {
    path: '**',   // 错误路由重定向[写在最后一个]
    redirectTo: 'index',
    pathMatch: 'full'  // 必须要设置
  },
]
