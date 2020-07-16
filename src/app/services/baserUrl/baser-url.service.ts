import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaserUrlService {

  constructor() { }

  public SERVICE_URL = "http://cs.weldjoin.com/";//域名

}
