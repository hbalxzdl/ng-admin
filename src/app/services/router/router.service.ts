import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {StorageService} from '../storage/storage.service'

@Injectable({
  providedIn: 'root'
})
export class RouteguardService {

  constructor(
    private router: Router,
    public storageService:StorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    // 返回值 true: 跳转到当前路由 false: 不跳转到当前路由
    // 当前路由名称
    var path = route.routeConfig.path;
    // nextRoute: 设置需要路由守卫的路由集合
    const nextRoute = ['index'];
    const hasToken = this.storageService.get('token')

    // 当前路由是nextRoute指定页时
    if (nextRoute.indexOf(path) >= 0){
      if (!hasToken) {
        // 未登录，跳转到login
        this.router.navigate(['login']);
        return false;
      }else{
        // 已登录，跳转到当前路由
        return true;
      }

    }


    // 当前路由是login时
    if (path === 'login') {
      if (!hasToken) {
        // 未登录，跳转到当前路由
        return true;
      }else{
        // 已登录，跳转到home
        this.router.navigate(['index']);
        return false;
      }
    }


  }
}
