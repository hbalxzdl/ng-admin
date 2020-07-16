import { Injectable } from '@angular/core';
import {HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  public baserUrl:string='http://731cs.com:7300/mock/5e157d50f7cdf5166085d67d/example/'

  constructor(
    private http: HttpClient,
  ) {

  }

  public get(url, params?: Object, callback?: Function){
    let httpParams = new HttpParams();
    if (params){
      for (const key in params) {
        if (params[key] === false || params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }


    this.http.get(this.baserUrl + url, { params: httpParams })
      .subscribe(data => {
        console.log('get请求结束', data);
        callback(data);
      });
  }

  public  post(url, data?: Object, options?: Object) {
    console.log('post开始请求');
    return new Promise((resolve, reject) => {
      this.http.post(this.baserUrl + url, data, options)
        .subscribe(res => {
          console.log('post请求结束', res);
          resolve(res);
        })
    })

  }



}
