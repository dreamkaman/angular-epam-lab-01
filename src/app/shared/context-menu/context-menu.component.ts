import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { DetailsService } from 'src/app/features/details/details.service';
import { TaskService } from '../task/task.service';
import * as dashboardSelectors from '../../features/dashboard/dashboard.selectors';
import { GlobalState } from 'src/store/models/store.model';
import * as detailsAction from '../../features/details/details.actions';
import { ModalWindowService } from '../modal-window/modal-window.service';
import { ContextMenuService } from './context-menu.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {
  @Output() clickEmitter = new EventEmitter();
  @Input() isVisible: boolean = false;

  idTask: string = '';
  BASE_URL: string = 'http://localhost:4000/api';

  constructor(
    private taskService: TaskService,
    private detailsService: DetailsService,
    private modalWindowService: ModalWindowService,
    private store: Store<GlobalState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idTask = this.taskService.getIdTask()
  }

  onEdit() {
    this.taskService.setIdTask(this.idTask);
    this.isVisible = false;
    this.modalWindowService.openEditDetail();
  }

  onDelete() {
    const auth_token = dashboardSelectors.getValue(this.store.select(dashboardSelectors.selectToken));
    const delURL = this.BASE_URL + this.router.url + '/' + this.idTask;

    this.detailsService.deleteDetail(auth_token, delURL)
      .subscribe({
        next: detail => {
          this.store.dispatch(detailsAction.deleteDetail({ detail }));
        },
        error: err => console.log(err)
      });

  }

}
