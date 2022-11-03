import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GlobalState } from 'src/store/models/login.model';


import { BoardItem } from './dashboard.reducer';
import { selectToken } from './dashboard.selectors';
import { getToken } from './dashboard.selectors';
import { DashboardService } from './dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  @Input() boards!: Observable<BoardItem[]>;

  URL = 'http://localhost:4000/api/boards';

  auth_token = getToken(this.store.select(selectToken));

  constructor(private store: Store<GlobalState>, private http: HttpClient, private dashBoardService: DashboardService) { }

  getAllBoards() {


    return this.http.get(this.URL, {
      headers: {
        "Authorization": `Bearer ${this.auth_token}`
      }
    }) as Observable<BoardItem[]>
  }



  ngOnInit(): void {
    this.boards = this.getAllBoards()
  }

  onRouterLinkClick(newName: string) {
    this.dashBoardService.setBoardName(newName);
  }


  onAddNewBoardClick() {
    console.log("Add new board btn click!");
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
