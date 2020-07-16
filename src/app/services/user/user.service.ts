import { Injectable } from '@angular/core';
import {RequestService} from '../request/request.service'
import {StorageService} from '../storage/storage.service'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userData = [];
  private loginUrl = 'login';

  constructor(
    public http:RequestService,
    public storageService:StorageService
  ) { }

  login(userInfo:any){
    const { username, password } = userInfo
    return new Promise(((resolve, reject) => {
      this.http.post(this.loginUrl,{username,password},).then(response=>{
        const data = response['data']
        this.storageService.set('token','token')
        resolve()
      }).catch(error=>{
        reject(error)
      })
    }))
  }
}
