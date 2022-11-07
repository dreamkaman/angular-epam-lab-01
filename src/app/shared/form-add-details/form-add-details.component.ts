import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { getToken, selectToken } from 'src/app/features/dashboard/dashboard.selectors';
import { DashboardService } from 'src/app/features/dashboard/dashboard.service';
import { DetailsService } from 'src/app/features/details/details.service';
import { GlobalState } from 'src/store/models/login.model';
import { ModalWindowService } from '../modal-window/modal-window.service';
import { Status, TasksListService } from '../tasks-list/tasks-list.service';
import * as detailsActions from '../../features/details/details.actions';
import * as detailsSelector from '../../features/details/details.selectors';

@Component({
  selector: 'app-form-add-details',
  templateUrl: './form-add-details.component.html',
  styleUrls: ['./form-add-details.component.scss']
})
export class FormAddDetailsComponent implements OnInit {
  @ViewChild('f') addDetailForm!: NgForm;
  // http://localhost:4000/api/boards/6366d506caa70d9d2d0ef6b0/details

  URL = 'http://localhost:4000/api' + this.router.url;

  auth_token: string | null = null;

  status!: Status

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalWindowService: ModalWindowService,
    private dashBoardService: DashboardService,
    private store: Store<GlobalState>,
    private detailsService: DetailsService,
    private tasksListService: TasksListService
  ) { }

  ngOnInit(): void {
    this.auth_token = getToken(this.store.select(selectToken));

    this.status = this.tasksListService.getStatus();

    console.log(this.status);

    console.log(this.URL);
  }

  onOkSubmit() {
    const data = this.addDetailForm.value;
    data.status = this.status;

    console.log(data);

    this.detailsService.addNewDetail(this.auth_token, this.URL, data)
      .subscribe({
        next: detail => {
          console.log(detail);

          this.store.dispatch(detailsActions.addDetail({ detail }));

          // this.todoList = this.store.select(detailsSelector.selectDetailsTodo);
          // this.inProgressList = this.store.select(detailsSelector.selectDetailsInProgress);
          // this.doneList = this.store.select(detailsSelector.selectDetailsDone);
        },
        error: err => console.log(err)
      });

    // this.store.dispatch()

    this.modalWindowService.closeAddDetail();
  }

  onCloseBtnClick() {
    this.modalWindowService.closeAddDetail();
  }
}


