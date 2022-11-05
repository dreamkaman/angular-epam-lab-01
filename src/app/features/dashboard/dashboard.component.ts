import { Component, Input, Output, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModalWindowService } from 'src/app/shared/modal-window/modal-window.service';

import { BoardItem } from './dashboard.reducer';
import { getToken, selectToken, selectBoards } from './dashboard.selectors';

import { DashboardService } from './dashboard.service';
import { GlobalState } from 'src/store/models/login.model';
import * as dashboardActions from '../dashboard/dashboard.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  @Input() boards: Observable<BoardItem[]> = this.store.select(selectBoards);

  auth_token = getToken(this.store.select(selectToken));


  constructor(private store: Store<GlobalState>,
    private dashBoardService: DashboardService,
    private modalWindowService: ModalWindowService) { }


  ngOnInit(): void {

    this.dashBoardService.getAllBoards(this.auth_token)
      .subscribe({
        next: responseData => {
          const boards = responseData;
          this.store.dispatch(dashboardActions.getAllBoards({ boards }));
        },
        error: err => console.log(err)
      });
  }

  onRouterLinkClick(event: Event, newName: string) {

    this.dashBoardService.setBoardName(newName);

  }

  onAddNewBoardClick(event: Event) {

    this.modalWindowService.openAddBoard();
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
