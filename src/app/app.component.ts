import {Component, OnInit} from '@angular/core';
import { apiService } from './services/api.service';
import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'driver-comments-web';

  lstcomments: Comments[];

  constructor(private _apiService: apiService) {
  }

    onfetchData()
    {
      this._apiService.getcomments()
        .subscribe
        (
          data => {
            this.lstcomments = data;
          }
        );
    }

    onfetch(data)
    {
      this._apiService.fetch(data)
        .subscribe
        (
          data => {
            this.lstcomments = data;
          }
        );
    }

    onCreate(data)
    {
      this._apiService.createComment(data)
        .subscribe((result) => {
          console.warn("result", result)
        })
      console.warn(data);
    }

    onDelete(id)
    {
      this._apiService.deleteComments(id)
        .subscribe((result) => {
          console.warn("result", result)
        })
      console.warn(id);
    }

    onUpdate(data)
    {
      this._apiService.updateComments(data)
        .subscribe((result) => {
          console.warn("result", result)
        })
      console.warn(data);
    }
}

