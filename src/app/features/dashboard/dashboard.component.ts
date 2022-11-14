import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModalWindowService } from 'src/app/shared/modal-window/modal-window.service';

import { BoardItem } from './dashboard.reducer';
import { getValue, selectToken, selectBoards } from './dashboard.selectors';

import { DashboardService } from './dashboard.service';
import { GlobalState } from 'src/store/models/store.model';
import * as dashboardActions from '../dashboard/dashboard.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements
  OnInit {
  // @Input() boards: Observable<BoardItem[]> = this.store.select(selectBoards);
  boards: Observable<BoardItem[]> = this.store.select(selectBoards);

  auth_token = getValue(this.store.select(selectToken));

  sortType: string = 'Sort by name';
  // sortState: boolean = true;

  constructor(private store: Store<GlobalState>,
    private dashBoardService: DashboardService,
    private modalWindowService: ModalWindowService) { }


  ngOnInit(): void {

    this.getAllBoards();
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

  onSetSortType() {
    if (this.sortType === 'Sort by name') {
      this.sortType = 'Sort by date'
      return
    }

    this.sortType = 'Sort by name';
  }

  onFilterClick(filterText: string) {
    this.store.dispatch(dashboardActions.filterBoardName({ filterText }));
  }

  onFilterDrop() {
    this.getAllBoards();
  }

  onAscSortingByName() {
    this.store.dispatch(dashboardActions.ascSortingByBoardName());
  }

  onDescSortingByName() {
    this.store.dispatch(dashboardActions.dscSortingByBoardName());
  }

  onAscSortingByDate() {
    this.store.dispatch(dashboardActions.ascSortingByBoardDate());
  }

  onDescSortingByDate() {
    this.store.dispatch(dashboardActions.dscSortingByBoardDate());
  }

  onAscSorting() {
    switch (this.sortType) {
      case 'Sort by name': this.onAscSortingByName(); break;
      case 'Sort by date': this.onAscSortingByDate(); break;
      default: console.log('Something went wrong!');
    }
  }

  onDescSorting() {
    switch (this.sortType) {
      case 'Sort by name': this.onDescSortingByName(); break;
      case 'Sort by date': this.onDescSortingByDate(); break;
      default: console.log('Something went wrong!');
    }
  }

  getAllBoards() {
    this.dashBoardService.getAllBoards(this.auth_token)
      .subscribe({
        next: responseData => {
          const boards = responseData;
          this.store.dispatch(dashboardActions.getAllBoards({ boards }));
        },
        error: err => console.log(err)
      });
  }
}
