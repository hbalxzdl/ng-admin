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
  public tabMenus: Array<{ title: string, module: string, power: string, isSelect: boolean }> = [];

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

    //显示上一个选中
    let menu = this.tabMenus[index - 1];

    if (!menu) {//如果上一个没有下一个选中
      menu = this.tabMenus[index + 1];
    }
    //显示当前路由信息
    this.router.navigate([menu.module]).then(promise => {
      if (promise) {
        this.tabMenus = this.tabMenus.filter(p => p.module != tab.module);
        //删除复用
        delete SimpleReuseStrategyService.handlers[tab.module];

        this.tabMenus.forEach(p => p.isSelect=false);
        this.tabMenus.forEach(p => p.isSelect = p.module == menu.module);
      }
    });
  }

  //决定一个 tab 是否可以被切换
  canDeactivate: NzTabsCanDeactivateFn = (fromIndex: number, toIndex: number) =>{
    let flg=true;

    this.router.navigate([this.tabMenus[toIndex].module]).then(promise=>{
      flg=promise
      if (promise){
        this.selectedIndex = toIndex;
      }
    });
    return false
  }

}