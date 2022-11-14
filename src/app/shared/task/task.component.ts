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
import { CommentState } from './task.reducer';

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
  // comments: Observable<Comment[]> = this.store.select(selectComments);
  comments: Observable<CommentState> = this.store.select(selectComments);


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
  }


}
