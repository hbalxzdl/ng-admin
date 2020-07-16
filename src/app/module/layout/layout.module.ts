import { NgModule } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import {NzAvatarModule, NzDropDownModule, NzIconModule, NzLayoutModule, NzMenuModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from '../../components/layout/navbar/navbar.component'
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

  ],
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  exports:[
    // LayoutComponent,
  ],
  providers: []
})
export class LayoutModule { }
