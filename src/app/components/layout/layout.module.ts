import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { NgZorroAntdModule } from "ng-zorro-antd"

import { LayoutComponent } from './layout.component';
import {NavbarComponent} from './navbar/navbar.component'


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

  ],
  exports:[

  ],
  providers: []
})
export class LayoutModule { }
