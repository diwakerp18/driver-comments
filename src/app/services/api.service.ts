import {Injectable, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class apiService {

  constructor(private httpclient: HttpClient) {
  }

  getcomments(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('mayank:cr@zym@rvel')
      })
    };
    return this.httpclient.get("http://localhost:8101/driverComments", httpOptions);
  }

  fetch(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('mayank:cr@zym@rvel')
      })
    };
    return this.httpclient.get("http://localhost:8101/driverComments/listDetails?driverId=" + Object.values(data), httpOptions);
  }

  createComment(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('mayank:cr@zym@rvel')
      })
    };
    return this.httpclient.post("http://localhost:8101/driverComments/createComment", data, httpOptions);
  }

  updateComments(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('mayank:cr@zym@rvel')
      })
    };
    return this.httpclient.put("http://localhost:8101/driverComments/updateComment", data, httpOptions);
  }

  deleteComments(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('mayank:cr@zym@rvel')
      })
    };
    return this.httpclient.delete("http://localhost:8101/driverComments/deleteComments?id=" + Object.values(id), httpOptions);
  }
}
