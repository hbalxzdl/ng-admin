import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';
import {IndexComponent} from './index/index.component'
import {TableComponent} from  './table/table.component'
import {AuthService} from '../services/router/auth/auth.service'
import{CanDeactivatService} from '../services/router/can-deactivat/can-deactivat.service'
import {ProjectModule} from './project/project.module'

const routes: Routes = [{
  path: '',
  component: LayoutComponent,

  children:[
    {
      path: 'dashboard',
      component: IndexComponent,
      data: { title: '首页' ,keepAlive: true,power:'SHOW'},
      // canActivate: [RouteguardService],
    },
    {
      path: 'table',
      component: TableComponent,
      data: { title: '表格' ,keepAlive: true,power:'SHOW'},
      canDeactivate: [CanDeactivatService],
    },

    {
      path: 'project',
      loadChildren: () => import('./project/project.module')
        .then(m => m.ProjectModule),
    },

    {  path: '', redirectTo: 'dashboard', pathMatch: 'full',},

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
