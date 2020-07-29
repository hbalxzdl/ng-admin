import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from './table.component'
import {ContainerComponent} from './../../components/container/container.component'
import { NgZorroAntdModule } from "ng-zorro-antd"
import {ReactiveFormsModule} from '@angular/forms';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    TableComponent,
    ContainerComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  providers:[
    // ContainerComponent
  ]
})
export class TableModule { }
