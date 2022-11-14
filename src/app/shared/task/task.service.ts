import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { GlobalState } from 'src/store/models/store.model';
import { getValue, selectToken } from '../../features/dashboard/dashboard.selectors';
import { CommentItem } from './task.reducer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  idTask: string = '';

  destination: string = '';

  BASE_URL = 'http://localhost:4000/api';

  constructor(
    private http: HttpClient,
    private store: Store<GlobalState>,
    private router: Router) { }

  getIdTask() {
    return this.idTask;
  }

  setIdTask(newIdTask: string) {
    this.idTask = newIdTask;
  }

  getDestination() {
    return this.destination;
  }

  setDestination(newDestination: string) {
    this.destination = newDestination;
  }

  getDetailComments() {
    const getURL = this.BASE_URL + this.router.url + '/' + this.idTask + '/comments';
    const auth_token = getValue(this.store.select(selectToken));

    return this.http.get(
      getURL,
      {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      }
    ) as Observable<CommentItem[]>;
  }

  postComment(text: string, idTask: string) {
    const postURL = this.BASE_URL + this.router.url + '/' + idTask + '/comments';
    const auth_token = getValue(this.store.select(selectToken));
    return this.http.post(
      postURL,
      { text },
      {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      }
    ) as Observable<CommentItem>;
  }

  deleteComment(idTask: string, commentId: string) {
    const delURL = this.BASE_URL + this.router.url + '/' + idTask + '/comments/' + commentId;
    const auth_token = getValue(this.store.select(selectToken));
    return this.http.delete(
      delURL,
      {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      }
    ) as Observable<CommentItem>;
  }
}
