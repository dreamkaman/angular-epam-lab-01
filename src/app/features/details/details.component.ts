import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DetailsItem } from './details.reducer';
import * as detailsActions from './details.actions';
import * as detailsSelector from './details.selectors';
import { getValue, selectToken } from '../dashboard/dashboard.selectors';
import { GlobalState } from 'src/store/models/store.model';
import { DashboardService } from '../dashboard/dashboard.service';
import { DetailsService } from './details.service';
import * as dashboardSelectors from '../dashboard/dashboard.selectors';
import { Status, TasksListService } from 'src/app/shared/tasks-list/tasks-list.service';
import { TaskService } from 'src/app/shared/task/task.service';
import { Router } from '@angular/router';
import * as taskActions from '../../shared/task/task.actions';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  @Output() todoList!: Observable<DetailsItem[]>;
  @Output() inProgressList!: Observable<DetailsItem[]>;
  @Output() doneList!: Observable<DetailsItem[]>;

  boardName: string = '';

  BASE_URL = 'http://localhost:4000/api';

  boardId: string = '';

  auth_token = getValue(this.store.select(selectToken));

  sortType: string = 'Sort by name';

  constructor(
    private store: Store<GlobalState>,
    private router: Router,
    private dashBoardService: DashboardService,
    private detailsService: DetailsService,
    private taskService: TaskService,
    private taskListService: TasksListService) { }


  ngOnInit(): void {
    this.boardName = this.dashBoardService.getBoardName();

    this.getAllDetails();

  }

  ngOnDestroy() {
    this.store.dispatch(taskActions.clearComments());
  }

  onFilterNameBtnClick(filterText: string) {
    this.store.dispatch(detailsActions.filterByDetailName({ filterText }))
  }

  onDropFilterClick() {
    this.getAllDetails();
  }

  onSortBtnClick() {
    if (this.sortType === 'Sort by name') {
      this.sortType = 'Sort by date';
      return
    }
    this.sortType = 'Sort by name';
  }

  onAscSortByDetailName() {
    this.store.dispatch(detailsActions.ascSortByDetailName());
  }

  onDescSortByDetailName() {
    this.store.dispatch(detailsActions.descSortByDetailName());
  }

  onAscSortByDate() {
    this.store.dispatch(detailsActions.ascSortByDetailDate());
  }

  onDescSortByDetailDate() {
    this.store.dispatch(detailsActions.descSortByDetailDate());
  }

  onAscSort() {
    switch (this.sortType) {
      case 'Sort by name': this.onAscSortByDetailName(); break;
      case 'Sort by date': this.onAscSortByDetailName(); break;
    }
  }

  onDescSort() {
    switch (this.sortType) {
      case 'Sort by name': this.onDescSortByDetailName(); break;
      case 'Sort by date': this.onDescSortByDetailName(); break;
    }
  }

  onDragEnd() {

    const auth_token = dashboardSelectors.getValue(this.store.select(dashboardSelectors.selectToken));
    const patchURL = this.BASE_URL + this.router.url + '/' + this.taskListService.getDraggingDetail()._id;

    let newStatus: Status = 'todo';
    switch (this.taskService.getDestination()) {
      case 'Todo': newStatus = 'todo'; break;
      case 'In progress': newStatus = 'in progress'; break;
      case 'Done': newStatus = 'done'; break;
      default: console.log('Bad parameter');
    }

    this.detailsService.patchDetailStatus(auth_token, patchURL, newStatus).subscribe({
      next: detail => {
        this.store.dispatch(detailsActions.changeDetailStatus({ detail, newStatus }));

        this.todoList = this.store.select(detailsSelector.selectDetailsTodo);
        this.inProgressList = this.store.select(detailsSelector.selectDetailsInProgress);
        this.doneList = this.store.select(detailsSelector.selectDetailsDone);
      },
      error: err => console.log(err)
    });
  }

  archivingTask(idTask: string) {
    console.log('Click archivingTask!');
    const auth_token = dashboardSelectors.getValue(this.store.select(dashboardSelectors.selectToken));
    console.log(auth_token);
    const patchURL = this.BASE_URL + this.router.url + '/' + idTask;
    const newStatus: Status = 'archived';

    this.detailsService.patchDetailStatus(auth_token, patchURL, newStatus).subscribe({
      next: detail => {
        this.store.dispatch(detailsActions.changeDetailStatus({ detail, newStatus }));

        this.todoList = this.store.select(detailsSelector.selectDetailsTodo);
        this.inProgressList = this.store.select(detailsSelector.selectDetailsInProgress);
        this.doneList = this.store.select(detailsSelector.selectDetailsDone);
        alert('Task was archived successfully!');
      },
      error: err => console.log(err)
    });

  }

  getAllDetails() {
    const auth_token: string | null = getValue(this.store.select(selectToken));

    this.detailsService.getAllDetails(auth_token, this.BASE_URL + this.router.url)
      .subscribe({
        next: detailsAll => {
          this.store.dispatch(detailsActions.getDetails({ detailsAll }));

          this.todoList = this.store.select(detailsSelector.selectDetailsTodo);
          this.inProgressList = this.store.select(detailsSelector.selectDetailsInProgress);
          this.doneList = this.store.select(detailsSelector.selectDetailsDone);
        },
        error: err => console.log(err)
      });
  }

}
