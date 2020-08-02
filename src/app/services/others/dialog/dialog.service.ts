import { Injectable ,Component} from '@angular/core';
import {Observable, of} from 'rxjs';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private modal: NzModalService
  ) { }

  confirm(message?: string): Observable<boolean>{
    let status:boolean=false
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete these items?</i>',
      nzContent: '<b>Some descriptions</b>',
      nzOnOk: () => {
        status=true
        of(true)
      },
      nzOnCancel: () => {
        status=false
        of(false)
      }

    })

    return of(status)

  }


  leaveConfirm(isCanleave:boolean){
    return Observable.create((observer) =>{
      if(isCanleave){
        this.modal.confirm({
          nzTitle: '页面离开提示',
          nzContent: '数据尚未保存，是否离开该页面？',
          nzOnOk: async () => {
            observer.next(true);
          },
          nzOnCancel: () => {
            observer.next(false);
          }
        });
      }else {
        observer.next(false);
      }

    })
  }






}
