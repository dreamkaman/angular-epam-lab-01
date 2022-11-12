import { Component, OnInit, Input, Output, ViewChildren, QueryList, ElementRef, EventEmitter } from '@angular/core';
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

  @Output() taskListEmitter = new EventEmitter();

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


    switch (blockTitle) {
      case 'Todo': this.status = 'todo'; break;
      case 'In progress': this.status = 'in progress'; break;
      case 'Done': this.status = 'done'; break;
      default: console.log('Bad parameter');
    }

    this.tasksListService.setStatus(this.status);

    this.modalWindowService.openAddDetail();
  }

  onDragStartHandle(detail: DetailsItem) {
    this.tasksListService.setDraggingDetail(detail);
  }

  onDragOverHandle() {
    // console.log('onDragOverHandle works!!!')
  }

  onDragLeave() {
    // console.log('onDragLeave works!');
  }

  onDragEnter(blockTitle: string) {
    this.taskService.setDestination(blockTitle);
  }

}

