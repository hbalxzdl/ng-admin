import {Injectable} from '@angular/core';
import {ActivatedRoute, Params, PRIMARY_OUTLET} from '@angular/router';
import {BehaviorSubject, Subject} from 'rxjs';

interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}


@Injectable({
  providedIn: 'root'
})


export class PageService {
  //路由列表
  // menuList: Array<{ title: string, module: string, power: string,isSelect:boolean }>=[];
  //
  // 当前页面
  current: '';


  public breadcrumbs = new BehaviorSubject<Array<any>>([]); //面包屑
  public title = new BehaviorSubject<string>('');

  public menuList = new BehaviorSubject<any>({});



  constructor() {
  }

  /**
   * @class opened
   * @description 新增一个 tag (打开一个页面)
   * @param {Object} context
   * @param {Object} payload new tag info
   */
  add(data) {

  }

  setMenuList(menuData){
    this.menuList.next(menuData);
  }


  public setBreadcrumbs(message) {
    this.breadcrumbs.next(message);
  }


  /**
   * 返回表示面包屑的IBreadcrumb对象的数组
   */

  public getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB = 'title';

    // 得到子路由
    const children: ActivatedRoute[] = route.children;

    // 如果没有子路由返回
    if (children.length === 0) {
      return breadcrumbs;
    }

    // 遍历每个子元素
    for (const child of children) {
      // 验证主路由
      if (child.outlet !== PRIMARY_OUTLET) {

        continue;
      }

      // 验证路由上指定的自定义数据属性'breadcrumb'
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      // 获取路由的URL进行分割
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      // append route URL to URL 追加路由的url到url
      if (routeURL) {
        url += `/${routeURL}`;
      }

      // 添加面包屑
      const breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url
      };

      // 此处的 component 如果为 undefined，可能是因为懒加载，在查找时，没有找到 component 的值，
      // 所以当 component 为 undefined 的时候，就会又往数组里再追加一次，会重复
      if (child.component) {
        breadcrumbs.push(breadcrumb);
      }

      // 递归
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }

  public setTitle(state, root) {
    // 更改页面title
    const titles = this.getTitle(state, root);
    const title = titles[titles.length - 1];
    if (title) {
      this.title.next(title);
    }
  }


  /**
   * 返回title对象的数组
   */
  public getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(...this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }


}
