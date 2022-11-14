import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { DetailsItem } from 'src/app/features/details/details.reducer';
import { ModalWindowService } from '../modal-window/modal-window.service';
import { Status, TasksListService } from './tasks-list.service';

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

  ) { }

  ngOnInit(): void {


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

  }

  onDragLeave() {

  }

  onDragEnter(blockTitle: string) {
    this.taskService.setDestination(blockTitle);
  }

}

