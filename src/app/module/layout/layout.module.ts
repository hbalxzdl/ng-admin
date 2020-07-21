import { NgModule } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import {NzAvatarModule, NzDividerModule, NzDropDownModule, NzIconModule, NzLayoutModule, NzMenuModule, } from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from '../../components/layout/navbar/navbar.component'

import {IndexComponent} from '../../pages/index/index.component'
import {ContainerModule} from '../container/container.module'
import {TableModule} from '../../components/table/table.module'

import {CommonModule} from '@angular/common';

@NgModule({
  entryComponents: [

  ],
  imports: [
    NzMenuModule,
    NzLayoutModule,
    RouterModule,
    NzIconModule,
    NzAvatarModule,
    NzDropDownModule,
    ContainerModule,
    NzDividerModule,
    CommonModule,
    TableModule,

  ],
  declarations: [
    LayoutComponent,
    NavbarComponent,
    IndexComponent
  ],
  exports:[

  ],
  providers: []
})
export class LayoutModule { }
