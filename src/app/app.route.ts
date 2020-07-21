import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { TableComponent } from './components/table/table.component';
import {IndexComponent} from './pages/index/index.component'
import { RouteguardService } from './services/router/router.service';
export const AppRoutes: Routes =[
  {
    path: '',
    redirectTo: 'pages/dashboard',
    pathMatch: 'full'
  },

  {
    path: 'pages',
    component: LayoutComponent,
    canActivate: [RouteguardService],
    children:[
      {
        path: 'dashboard',
        component: IndexComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      }
    ]
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
