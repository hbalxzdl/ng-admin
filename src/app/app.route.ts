import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { TableComponent } from './pages/table/table.component';
import {IndexComponent} from './pages/index/index.component'
import { RouteguardService } from './services/router/router.service';



export const AppRoutes: Routes =[
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [RouteguardService]
  },

  {  path: '', redirectTo: 'pages',pathMatch: 'full'},
  {  path: '**',  redirectTo: 'pages', },

]
