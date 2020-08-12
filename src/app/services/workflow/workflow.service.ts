import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject ,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  private msg = new Subject<any>();

  constructor() { }

  //发送消息
  sendMessage(message: string) {
    this.msg.next(message);
  }

  //获取消息
  getMessage(): Observable<any> {
    return this.msg.asObservable();
  }
}
