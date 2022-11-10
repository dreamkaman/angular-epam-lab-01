import { Component, OnInit, Input, Output, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, fromEvent, throttle, throttleTime, debounceTime, distinctUntilChanged, last, first } from 'rxjs';
import { DetailsItem } from 'src/app/features/details/details.reducer';
import { GlobalState } from 'src/store/models/login.model';
import { ModalWindowService } from '../modal-window/modal-window.service';
import { Status, TasksListService } from './tasks-list.service';
import * as detailsActions from '../../features/details/details.actions';
import { DetailsService } from 'src/app/features/details/details.service';
import * as dashboardSelectors from '../../features/dashboard/dashboard.selectors';
import { Router } from '@angular/router';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  @Input() blockTitle: string = '';
  @Input() details!: Observable<DetailsItem[]>;

  status!: Status;

  blockTitle$!: Observable<Event>;

  BASE_URL = 'http://localhost:4000/api';

  constructor(
    private modalWindowService: ModalWindowService,
    private tasksListService: TasksListService,
    private taskService: TaskService,
    private detailsService: DetailsService,
    private store: Store<GlobalState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    // document.addEventListener('dragover', () => { return this.blockTitle });

    this.blockTitle$ = fromEvent(document, 'dragenter');

  }


  onAddDetailClick(blockTitle: string) {
    console.log("Click on plus button!");

    switch (blockTitle) {
      case 'Todo': this.status = 'todo'; break;
      case 'In progress': this.status = 'in progress'; break;
      case 'Done': this.status = 'done'; break;
      default: console.log('Bad parameter');
    }

    this.tasksListService.setStatus(this.status);

    this.modalWindowService.openAddDetail();
  }

  onDragStartHandle(event: DragEvent, detail: DetailsItem) {
    console.log('onDragStartHandle - ', detail);
    this.tasksListService.setDraggingDetail(detail);
  }

  onDragOverHandle(event: DragEvent) {
    // console.log('onDragOverHandle - ', event);
    // const auth_token = dashboardSelectors.getToken(this.store.select(dashboardSelectors.selectToken));
    // const patchURL = this.BASE_URL + this.router.url + '/' + this.draggingDetail?._id;
    // this.blockTitle$
    //   .pipe(
    //     throttleTime(1000),
    //     last()
    //   )
    //   .subscribe((value) => {
    //     console.log(value);
    //   }
    //   );

    // let newStatus: Status = 'todo';
    // switch (this.blockTitle) {
    //   case 'Todo': newStatus = 'todo'; break;
    //   case 'In progress': newStatus = 'in progress'; break;
    //   case 'Done': newStatus = 'done'; break;
    //   default: console.log('Bad parameter');
    // }

    // setTimeout(() => {
    //   this.detailListService.patchDetailStatus(auth_token, patchURL, newStatus).subscribe({
    //     next: detail => {
    //       console.log(detail);
    //       // this.store.dispatch(detailsActions.getDetails({ detailsAll }));

    //       // this.todoList = this.store.select(detailsSelector.selectDetailsTodo);
    //       // this.inProgressList = this.store.select(detailsSelector.selectDetailsInProgress);
    //       // this.doneList = this.store.select(detailsSelector.selectDetailsDone);
    //     },
    //     error: err => console.log(err)
    //   });
    // }, 2000);

    // this.store.dispatch(detailsActions.changeStatus({ detail: this.currentTask, newStatus }))

  }

  onDragEnter(event: DragEvent, blockTitle: string) {
    console.log('onDragEnter works! - ', blockTitle);
    this.taskService.setDestination(blockTitle);//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  }

  // onDragEnd(event: DragEvent) {
  //   const auth_token = dashboardSelectors.getToken(this.store.select(dashboardSelectors.selectToken));
  //   const patchURL = this.BASE_URL + this.router.url + '/' + this.tasksListService.getDraggingDetail()._id;

  //   let newStatus: Status = 'todo';
  //   switch (this.taskService.getDestination()) {
  //     case 'Todo': newStatus = 'todo'; break;
  //     case 'In progress': newStatus = 'in progress'; break;
  //     case 'Done': newStatus = 'done'; break;
  //     default: console.log('Bad parameter');
  //   }

  //   this.detailsService.patchDetailStatus(auth_token, patchURL, newStatus).subscribe({
  //     next: responseData => {
  //       console.log('Http response - ', responseData);
  //       // this.store.dispatch(detailsActions.getDetails({ detailsAll }));

  //       // this.todoList = this.store.select(detailsSelector.selectDetailsTodo);
  //       // this.inProgressList = this.store.select(detailsSelector.selectDetailsInProgress);
  //       // this.doneList = this.store.select(detailsSelector.selectDetailsDone);
  //     },
  //     error: err => console.log(err)
  //   });
  // }



}

