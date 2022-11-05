import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalState } from 'src/store/models/login.model';
import { BoardItem } from './dashboard.reducer';
import { getToken, selectToken } from './dashboard.selectors';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  boardName: string = '';

  URL = 'http://localhost:4000/api/boards';

  auth_token = getToken(this.store.select(selectToken));

  constructor(private http: HttpClient, private store: Store<GlobalState>) { }

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

  addBoard() {
    const auth_token = getToken(this.store.select(selectToken));

    return this.http.post(
      this.URL,
      {
        name: "Hello post request",
        description: "First test post request via service"
      },
      {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      }
    );

  }

}
