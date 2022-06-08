import {Injectable, Input, OnInit} from '@angular/core';
import {Observable, pipe, throwError} from "rxjs";
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {catchError, map} from "rxjs/operators";

@Injectable()
export class apiService {


  constructor(private httpclient: HttpClient) {
  }

  handleError<T> (operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {

      const userMessage = error.error; // should give error body

      return throwError(userMessage);
    };
  }

  getcomments(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('mayank:cr@zym@rvel')
      })
    };
    return this.httpclient.get("http://localhost:8101/driverComments", httpOptions)
      .pipe(map((m: any) => m), catchError(this.handleError('err')));
  }

  fetch(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('mayank:cr@zym@rvel')
      })
    };
    return this.httpclient.get("http://localhost:8101/driverComments/listDetails?driverId=" + Object.values(data), httpOptions)
      .pipe(map((m: any) => m), catchError(this.handleError('err')));
  }

  createComment(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('mayank:cr@zym@rvel')
      })
    };
    return this.httpclient.post("http://localhost:8101/driverComments/createComment", data, httpOptions)
      .pipe(map((m: any) => m), catchError(this.handleError('err')));
  }

  updateComments(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('mayank:cr@zym@rvel')
      })
    };
    return this.httpclient.put("http://localhost:8101/driverComments/updateComment", data, httpOptions)
      .pipe(map((m: any) => m), catchError(this.handleError('err')));
  }

  deleteComments(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('mayank:cr@zym@rvel')
      })
    };
    return this.httpclient.delete("http://localhost:8101/driverComments/deleteComments?id=" + Object.values(id), httpOptions)
      .pipe(map((m: any) => m), catchError(this.handleError('err')));
  }

}
