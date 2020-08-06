import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from "ng-zorro-antd"

import { PagesRoutingModule } from './pages-routing.module';

import{ContainerComponent} from '../components/container/container.component'
import {SidebarComponent} from '../components/sidebar/sidebar.component'

import {IndexComponent} from '../pages/index/index.component'
import {TableComponent} from '../pages/table/table.component'
// import {TamModule} from 'angular-splitter/lib/tam.module';





@NgModule({
  declarations: [
    IndexComponent,
    TableComponent,
    ContainerComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgZorroAntdModule,
    // TamModule
  ]
})
export class PagesModule { }
