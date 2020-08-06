import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EchartsComponent} from './echarts/echarts.component';
import {ProjectRoutingModule} from './project-routing.module';
import { NgZorroAntdModule } from "ng-zorro-antd"

@NgModule({
  declarations: [EchartsComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NgZorroAntdModule
  ]
})

export class ProjectModule {
}
