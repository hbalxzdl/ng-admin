import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../components/container/container.component';



// @ts-ignore
@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContainerComponent
  ],
  providers:[

  ]

})
export class ContainerModule { }
