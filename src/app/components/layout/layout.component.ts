import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed:boolean=true
  curIndex:number=1;
  tabMenus=[]
  constructor(private route: ActivatedRoute) { }

  menus =[
    {
      title: '图表',
      path:'/pages/project/echarts',
      icon: 'area-chart',
    },

    {
      title: '递归路由',
      path:'',
      children:[
        {
          title: '菜单1',
        },
        {
          title: '菜单2',
        }
      ]
    },

  ]
    ngOnInit(): void {
    this.route.url.subscribe(url => {
      console.log(url)
    });
  }

  toggle(event):void{
    this.curIndex=Number(event.target.dataset.index)
  }

  saveselected(menu){
   let flag= this.tabMenus.some(res=>res.path==menu.path)
   if(!flag){
     this.tabMenus.push(menu)
   }
  }

  closeTab(tab){

  }

}
