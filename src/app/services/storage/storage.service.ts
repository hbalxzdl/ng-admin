import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  //设置数据
  set(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }

  // 获取数据
  get(key: string) {
    return JSON.parse(window.sessionStorage.getItem(key));
  }

  // 删除数据
  remove(key: string) {
    window.sessionStorage.removeItem(key);
  }

}
