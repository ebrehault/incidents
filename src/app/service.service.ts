import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ServiceService {

  constructor(public http: HttpClient) { }

  save(data: any): Observable<any> {
    if (data.date) {
      data.date = data.date.toISOString().slice(0, 10);
    }
    Object.keys(data).forEach(k => {
      data[k] = data[k] || '';
    });
    const path = 'https://cloud.brehault.net/myapp/';
    return this.http.post(path, data);
  }
}
