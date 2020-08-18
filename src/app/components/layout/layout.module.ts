import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule,ActivatedRoute} from '@angular/router';

import { NgZorroAntdModule } from "ng-zorro-antd"

import { LayoutComponent } from './layout.component';
import {NavbarComponent} from './navbar/navbar.component'
import{BreadcrumbComponent} from '../../components/breadcrumb/breadcrumb.component';
import { TabComponent } from './tab/tab.component'

@NgModule({
  entryComponents: [

  ],
  imports: [
    RouterModule,
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent,
    BreadcrumbComponent,
    TabComponent
  ],
  exports:[

  ],
  providers: []
})
export class LayoutModule { }
