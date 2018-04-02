import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ServiceService {

  constructor(public http: HttpClient) { }

  save(data: any): Observable<any> {
    const path = 'https://cloud.brehault.net/myapp/';
    return this.http.post(path, data);
  }
}
