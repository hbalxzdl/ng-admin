import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from './table.component'
import {NzDividerModule, NzFormModule, NzGridModule, NzTableModule} from 'ng-zorro-antd';
import {ContainerModule} from '../../module/container/container.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    ContainerModule,
    NzGridModule,
    ReactiveFormsModule,
    NzFormModule
  ]
})
export class TableModule { }
