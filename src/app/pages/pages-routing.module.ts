import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';
import {IndexComponent} from './index/index.component'
import {TableComponent} from  './table/table.component'


const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children:[
    {
      path: 'dashboard',
      component: IndexComponent,
    },

    {
      path: 'table',
      component: TableComponent,
    },

    {  path: '', redirectTo: 'dashboard', pathMatch: 'full',},

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
