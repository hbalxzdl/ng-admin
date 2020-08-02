import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';
import {IndexComponent} from './index/index.component'
import {TableComponent} from  './table/table.component'
import {AuthService} from '../services/router/auth/auth.service'
import{CanDeactivatService} from '../services/router/can-deactivat/can-deactivat.service'

const routes: Routes = [{
  path: '',
  component: LayoutComponent,

  children:[
    {
      path: 'dashboard',
      component: IndexComponent,
      // canActivate: [RouteguardService],
    },
    {
      path: 'table',
      component: TableComponent,
      data: { breadcrumb: '表格' },
      canDeactivate: [CanDeactivatService],
    },

    {  path: '', redirectTo: 'dashboard', pathMatch: 'full',},

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
