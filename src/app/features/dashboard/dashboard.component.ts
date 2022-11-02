import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GlobalState } from 'src/store/models/login.model';

import * as boardActions from './dashboard.actions';
import { BoardItem, BoardState } from './dashboard.reducer';
import { selectToken } from './dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})



export class DashboardComponent implements OnInit {
  // @Input() boards: BoardItem[] = [];
  @Input() boards!: Observable<BoardItem[]>;
  // @Input() boards!: Observable<Object>;

  URL = 'http://localhost:4000/api/boards';

  // auth_token = "";


  constructor(private store: Store<GlobalState>, private http: HttpClient) { }

  getToken(observable: Observable<string | null>) {
    let value: string | null = null;
    observable.subscribe(data => value = data);
    return value
  }

  getAllBoards() {
    // let boards: BoardItem[] = [];
    const auth_token = this.getToken(this.store.select(selectToken));

    return this.http.get(this.URL, {
      headers: {
        "Authorization": `Bearer ${auth_token}`
      }
    }) as Observable<BoardItem[]>

    // console.log(auth_token);//sync method
    // this.http.get(this.URL, {
    //   headers: {
    //     "Authorization": `Bearer ${auth_token}`
    //   }
    // }).subscribe(
    //   {
    //     next: responseData => {
    //       console.log(responseData);

    //       boards = responseData as BoardItem[];
    //     }
    //   });
    // return boards;
  }



  ngOnInit(): void {
    this.boards = this.getAllBoards()
  }

  clickHandler1() {
    console.log("Hello1!");
  }

  clickHandler2() {
    console.log("Hello2!");
  }

  clickHandler3() {
    console.log("Hello3!");
  }

  clickHandler4() {
    console.log("Hello4!");
  }

}
