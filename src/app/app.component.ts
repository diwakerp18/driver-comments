import {Component, OnInit} from '@angular/core';
import { apiService } from './services/api.service';
import { Comments } from './classes/comments';
import {error} from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'driver-comments-web';

  lstcomments: Comments[];

  public doneCreateMsg : any;
  public onCreateError: any;
  public doneUpdateMsg : any;
  public onUpdateError : any;
  public doneDeleteMsg: any;
  public onDeleteError : any;
  public onFetchError : any;
  public onAllFetchError : any;
  
  constructor(private _apiService: apiService) {
  }

  onfetchData()
  {
    this._apiService.getcomments()
      .subscribe
      (
        data => {
          this.lstcomments = data;
        },
        error => (alert(error.message))
      );
  }

  onfetch(data)
  {
    this._apiService.fetch(data)
      .subscribe
      (
        data => {
          this.lstcomments = data;
        },
        error => (alert(error.message))
      );
  }

  onCreate(data)
  {
    this._apiService.createComment(data)
      .subscribe((result) => {
        alert(result?.message);
      },
        error => (alert(error.message))
      );
  }

  onDelete(id)
  {
    this._apiService.deleteComments(id)
      .subscribe
      (
        data => {
          alert(data?.message);
        },
        error => (alert(error.message))
      );
  }

  onUpdate(data)
  {
    this._apiService.updateComments(data)
      .subscribe(
        (result) => {
        alert(result?.message);
      },
        error => (alert(error.message))
      );
  }
}

