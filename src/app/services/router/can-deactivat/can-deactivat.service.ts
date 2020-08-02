import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  isEdit: () => boolean;
}


@Injectable({
  providedIn: 'root'
})
export class CanDeactivatService implements CanDeactivate<CanComponentDeactivate> {

  constructor() { }

  canDeactivate(component: CanComponentDeactivate){
    // 这里的component就是需要做守卫的组件 组件里面需要有一个方法来判断当前用户是否可以离开 我们这里叫canDeactivate()
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
