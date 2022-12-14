import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ContextMenuService } from '../context-menu/context-menu.service';
import { TaskService } from './task.service';

import { GlobalState } from 'src/store/models/store.model';
import { selectComments } from './task.selectors';
import { CommentItem } from './task.reducer';
import * as taskActions from './task.actions';
import { ModalWindowService } from '../modal-window/modal-window.service';
import { getCommentsArray } from '../../features/dashboard/dashboard.selectors';

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

    if (!getCommentsArray(this.store.select(selectComments)).length) {
      this.getComments();
    }

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

  onDelComment(commentId: string, idTask: string) {

    this.taskService.deleteComment(idTask, commentId)
      .subscribe({
        next: comment => {
          this.store.dispatch(taskActions.deleteComment({ comment }));
        },
        error: err => console.log(err)
      });
  }
}
