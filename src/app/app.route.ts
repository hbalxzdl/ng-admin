import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { TableComponent } from './pages/table/table.component';
import {IndexComponent} from './pages/index/index.component'
import { AuthService } from './services/router/auth/auth.service';



export const AppRoutes: Routes =[

  {
    path: 'pages',
    canActivate: [AuthService],  //进入认证
    data: { title: '首页'},
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },



  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthService]  //进入认证
  },

  {  path: '', redirectTo: 'pages',pathMatch: 'full'},
  {  path: '**',  redirectTo: 'pages', },

]
