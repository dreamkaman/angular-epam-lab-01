import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetailsService } from 'src/app/features/details/details.service';
import { ContextMenuService } from '../context-menu/context-menu.service';
import { TaskService } from './task.service';
import * as dashboardSelectors from '../../features/dashboard/dashboard.selectors';
import { GlobalState } from 'src/store/models/store.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Status } from '../tasks-list/tasks-list.service';
import * as detailsActions from '../../features/details/details.actions';
import { Observable } from 'rxjs';
import { selectComments } from './task.selectors';
import { CommentsState } from './task.reducer';
import * as taskActions from './task.actions';

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

  comments: Observable<CommentsState> = this.store.select(selectComments);

  detailComments!: CommentsState;



  BASE_URL: string = 'http://localhost:4000/api';
  destination: string = '';

  constructor(
    private taskService: TaskService,
    private contextMenuService: ContextMenuService,
    private detailsService: DetailsService,
    private store: Store<GlobalState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.taskService.setIdTask(this.idTask);
    this.contextMenuService.setTaskName(this.taskName);

    this.taskService.getAllComments()
      .subscribe({
        next: comments => {

          this.store.dispatch(taskActions.addAllComments({ comments }))
        }
      })

    this.comments.subscribe({
      next: comments => {
        console.log(comments);

        // this.detailComments = comments.filter(item => item.detailId === this.idTask);
        // console.log(this.detailComments);
      },
      error: err => console.log(err)
    });
  }


}
