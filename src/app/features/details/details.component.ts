import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/internal/Subscription';

import { DetailsItem } from './details.reducer';
import * as detailsActions from './details.actions';
import * as detailsSelector from './details.selectors';
import { getToken, selectToken } from '../dashboard/dashboard.selectors';
import { GlobalState } from 'src/store/models/login.model';
import { DashboardService } from '../dashboard/dashboard.service';
import { DetailsService } from './details.service';
import * as dashboardSelectors from '../dashboard/dashboard.selectors';
import { Status, TasksListService } from 'src/app/shared/tasks-list/tasks-list.service';
import { TaskService } from 'src/app/shared/task/task.service';


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

  // routeSub: Subscription = new Subscription;

  BASE_URL = 'http://localhost:4000/api';

  boardId: string = '';

  auth_token = getToken(this.store.select(selectToken));

  constructor(
    private route: ActivatedRoute,
    private store: Store<GlobalState>,
    private http: HttpClient,
    private router: Router,
    private dashBoardService: DashboardService,
    private detailsService: DetailsService,
    private taskService: TaskService,
    private taskListService: TasksListService) { }

  // getBoardId() {
  //   this.routeSub = this.route.params.subscribe(params => {
  //     this.boardId = params['boardId'];
  //   });
  // }

  ngOnInit(): void {
    this.boardName = this.dashBoardService.getBoardName();

    const auth_token: string | null = getToken(this.store.select(selectToken));

    let detailsAll: DetailsItem[] = [];

    this.detailsService.getAllDetails(auth_token, this.BASE_URL + this.router.url)
      .subscribe({
        next: details => {
          detailsAll = details;
          this.store.dispatch(detailsActions.getDetails({ detailsAll }));

          this.todoList = this.store.select(detailsSelector.selectDetailsTodo);
          this.inProgressList = this.store.select(detailsSelector.selectDetailsInProgress);
          this.doneList = this.store.select(detailsSelector.selectDetailsDone);
        },
        error: err => console.log(err)
      });
  }

  onFilterBtnClick() {
    console.log("Hello1 in details!");
  }

  onSortBtnClick() {
    console.log("Hello2 in details!");
  }

  onAscBtnClick() {
    console.log("Hello3 in details!");
  }

  onDscBtnClick() {
    console.log("Hello4 in details!");
  }

  onDragEnd() {
    console.log('I am working!!!!')

    const auth_token = dashboardSelectors.getToken(this.store.select(dashboardSelectors.selectToken));
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
        this.store.dispatch(detailsActions.changeStatus({ detail, newStatus }))

        this.todoList = this.store.select(detailsSelector.selectDetailsTodo);
        this.inProgressList = this.store.select(detailsSelector.selectDetailsInProgress);
        this.doneList = this.store.select(detailsSelector.selectDetailsDone);
      },
      error: err => console.log(err)
    });
  }

}
