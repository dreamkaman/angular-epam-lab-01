import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { DetailsService } from 'src/app/features/details/details.service';
import { ContextMenuService } from '../context-menu/context-menu.service';
import { TaskService } from './task.service';

import { GlobalState } from 'src/store/models/store.model';
import { selectComments } from './task.selectors';
import { CommentItem } from './task.reducer';
import * as taskActions from './task.actions';
import { ModalWindowService } from '../modal-window/modal-window.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() taskName: string = '';
  @Input() idTask: string = '';

  @Output() taskEmitter = new EventEmitter<string>;
  @Output() addCommentEmitter = new EventEmitter;

  comments: Observable<CommentItem[]> = this.store.select(selectComments);

  BASE_URL: string = 'http://localhost:4000/api';
  destination: string = '';

  constructor(
    private taskService: TaskService,
    private contextMenuService: ContextMenuService,
    private store: Store<GlobalState>,
    private modalWindowService: ModalWindowService
  ) { }

  ngOnInit(): void {
    this.taskService.setIdTask(this.idTask);
    this.contextMenuService.setTaskName(this.taskName);

    this.getComments();
  }

  onAddComment(idTask: string) {
    this.taskService.setIdTask(idTask);

    this.modalWindowService.openAddComment();
  }

  getComments() {
    this.taskService.getDetailComments()
      .subscribe({
        next: comments => {
          this.store.dispatch(taskActions.addComments({ comments }))
        }
      })
  }
}
