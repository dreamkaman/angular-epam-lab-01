import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { DetailsService } from 'src/app/features/details/details.service';
import { TaskService } from '../task/task.service';
import * as dashboardSelectors from '../../features/dashboard/dashboard.selectors';
import { GlobalState } from 'src/store/models/login.model';
import * as detailsAction from '../../features/details/details.actions';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() clickEmitter = new EventEmitter();
  idTask: string = '';

  constructor(
    private taskService: TaskService,
    private detailsService: DetailsService,
    private store: Store<GlobalState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idTask = this.taskService.getIdTask()
  }

  onEdit = (event: Event) => {
    this.isVisible = false;

    console.log('Edit button was pushed!');
    console.log(this.idTask);
  }

  onDelete = (event: Event) => {
    const auth_token = dashboardSelectors.getToken(this.store.select(dashboardSelectors.selectToken));
    const delURL = 'http://localhost:4000/api' + this.router.url + '/' + this.idTask;
    console.log(delURL);

    this.isVisible = false;
    this.detailsService.deleteDetail(auth_token, delURL)
      .subscribe({
        next: detail => {
          console.log(detail);

          this.store.dispatch(detailsAction.deleteDetail({ detail }));

        },
        error: err => console.log(err)
      });

    console.log('Delete button was pushed!');
    console.log(this.idTask);
  }

}
