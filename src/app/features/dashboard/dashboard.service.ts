import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GlobalState } from 'src/store/models/login.model';
import { BoardItem } from './dashboard.reducer';
import { getToken, selectToken } from './dashboard.selectors';

export interface IFormData {
  name: string,
  description: string
};

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  boardName: string = '';

  BASE_URL = 'http://localhost:4000/api/boards';


  constructor(private http: HttpClient, private store: Store<GlobalState>) { }
  getBoardId() { }

  getBoardName() {
    return this.boardName;
  }

  setBoardName(newBoardName: string) {
    this.boardName = newBoardName;
  }

  getAllBoards(auth_token: string | null) {

    return this.http.get(this.BASE_URL, {
      headers: {
        "Authorization": `Bearer ${auth_token}`
      }
    }) as Observable<BoardItem[]>
  }

  addBoard(data: IFormData) {
    const auth_token = getToken(this.store.select(selectToken));

    return this.http.post(
      this.BASE_URL,
      data,
      {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      }
    );

  }

  deleteBoard(boardId: string) {
    const auth_token = getToken(this.store.select(selectToken));

    const delURL = this.BASE_URL + '/' + boardId;

    return this.http.delete(
      delURL,
      {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      },
    );
  }

  patchBoard(boardId: string, formData: IFormData): Observable<BoardItem> {
    const auth_token = getToken(this.store.select(selectToken));

    const editURL = this.BASE_URL + '/' + boardId;


    return this.http.patch(
      editURL,
      formData,
      {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      },
    ) as Observable<BoardItem>
  }

}
