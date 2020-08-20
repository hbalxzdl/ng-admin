import {Component, OnInit} from '@angular/core';
import {PageService} from '../../../services/page/page.service';
import {Router} from '@angular/router';
import { NzTabsCanDeactivateFn } from 'ng-zorro-antd/tabs';
import {SimpleReuseStrategyService} from '../../../services/router/simpleReuseStrategy/simple-reuse-strategy.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  providers: [SimpleReuseStrategyService]
})
export class TabComponent implements OnInit {
  public tabMenus: Array<{ title: string, module: string, power: string, isSelect: boolean,componentName:string }> = [];

  public selectedIndex: number = 0;

  constructor(
    public pageService: PageService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.pageService.menuList.subscribe((menu) => {
      this.tabMenus.forEach(p => p.isSelect = false);
      let exitMenu = this.tabMenus.find(info => info.title == menu['title']);
      //如果存在不添加，当前表示选中
      exitMenu ? this.tabMenus.forEach(p => p.isSelect = p.title == menu['title']) : this.tabMenus.push(menu);
      this.selectedIndex = this.tabMenus.findIndex(res => res.title == menu['title']);
      this.selectedIndex = this.tabMenus.findIndex(res => res.isSelect == true);
    });
  }


  closeTab(tab, index) {
    //如果只有一个不可以关闭
    if (this.tabMenus.length == 1) {
      return;
    }
    //如果关闭的不是当前路由
    if(this.selectedIndex!=index){
      //删除复用
      SimpleReuseStrategyService.deleteRouteSnapshot[tab.componentName];
      this.tabMenus = this.tabMenus.filter(p => p.module != tab.module);
      return;
    }

    //显示上一个选中
    let menu = this.tabMenus[index - 1];
    //如果上一个没有下一个选中
    if (!menu) menu = this.tabMenus[index + 1];

    //显示当前路由信息
    this.router.navigate([menu.module]).then(promise => {
      if (promise) {
        this.tabMenus = this.tabMenus.filter(p => p.module != tab.module);
        SimpleReuseStrategyService.deleteRouteSnapshot[tab.componentName];
        this.tabMenus.forEach(p => p.isSelect=false);
        this.tabMenus.forEach(p => p.isSelect = p.module == menu.module);
      }
    });
  }

  //决定一个 tab 是否可以被切换
  canDeactivate: NzTabsCanDeactivateFn = async (fromIndex: number, toIndex: number) =>{
    console.log(this.tabMenus[toIndex])
    let flg=await this.router.navigate([this.tabMenus[toIndex].module])
    if (flg){
      this.selectedIndex = toIndex;
    }
    return flg

  }

}
