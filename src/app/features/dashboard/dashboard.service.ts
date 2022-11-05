import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalState } from 'src/store/models/login.model';
import { deleteBoard } from './dashboard.actions';
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
  // boardId: string = '';

  boardName: string = '';

  URL = 'http://localhost:4000/api/boards';

  // auth_token = getToken(this.store.select(selectToken));

  constructor(private http: HttpClient, private store: Store<GlobalState>) { }
  getBoardId() { }

  getBoardName() {
    return this.boardName;
  }

  setBoardName(newBoardName: string) {
    this.boardName = newBoardName;
  }

  getAllBoards(auth_token: string | null) {

    return this.http.get(this.URL, {
      headers: {
        "Authorization": `Bearer ${auth_token}`
      }
    }) as Observable<BoardItem[]>
  }

  addBoard(data: IFormData) {
    const auth_token = getToken(this.store.select(selectToken));

    return this.http.post(
      this.URL,
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

    const delURL = this.URL + '/' + boardId;

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

    const editURL = this.URL + '/' + boardId;


    return this.http.patch(
      editURL,
      // { name, description },
      formData,
      {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      },
    ) as Observable<BoardItem>
  }

}
