import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from '../../components/layout/layout.component';
import {EchartsComponent} from './echarts/echarts.component';


const routes: Routes = [
  {
    path: 'echarts',
    component: EchartsComponent,
    data: { title: '图表' },
    // canActivate: [RouteguardService],
  },


  {path: '', redirectTo: 'echarts', pathMatch: 'full',},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule {
}
