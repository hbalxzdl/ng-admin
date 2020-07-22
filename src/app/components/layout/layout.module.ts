import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import {NzAvatarModule, NzDividerModule, NzDropDownModule, NzIconModule, NzLayoutModule, NzMenuModule, } from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component'

import {IndexComponent} from '../../pages/index/index.component'
// import {ContainerModule} from '../container/container.module'
import {ContainerComponent} from '../container/container.component'
import {TableModule} from '../../pages/table/table.module'

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

    NzDividerModule,
    CommonModule,


  ],
  declarations: [
    LayoutComponent,
    NavbarComponent,
    IndexComponent,
    ContainerComponent
  ],
  exports:[

  ],
  providers: []
})
export class LayoutModule { }
