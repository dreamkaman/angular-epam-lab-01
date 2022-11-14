import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { getValue, selectToken } from 'src/app/features/dashboard/dashboard.selectors';

import { DetailsService } from 'src/app/features/details/details.service';
import { GlobalState } from 'src/store/models/store.model';
import { ModalWindowService } from '../modal-window/modal-window.service';
import { Status, TasksListService } from '../tasks-list/tasks-list.service';
import * as detailsActions from '../../features/details/details.actions';



@Component({
  selector: 'app-form-add-details',
  templateUrl: './form-add-details.component.html',
  styleUrls: ['./form-add-details.component.scss']
})
export class FormAddDetailsComponent implements OnInit {
  @ViewChild('f') addDetailForm!: NgForm;

  URL = 'http://localhost:4000/api' + this.router.url;

  auth_token: string | null = null;

  status!: Status

  constructor(
    private router: Router,
    private modalWindowService: ModalWindowService,
    private store: Store<GlobalState>,
    private detailsService: DetailsService,
    private tasksListService: TasksListService
  ) { }

  ngOnInit(): void {
    this.auth_token = getValue(this.store.select(selectToken));

    this.status = this.tasksListService.getStatus();

  }

  onOkSubmit() {
    const data = this.addDetailForm.value;
    data.status = this.status;

    this.detailsService.addNewDetail(this.auth_token, this.URL, data)
      .subscribe({
        next: detail => {

          this.store.dispatch(detailsActions.addDetail({ detail }));

        },
        error: err => console.log(err)
      });

    this.modalWindowService.closeAddDetail();
  }

  onCloseBtnClick() {
    this.modalWindowService.closeAddDetail();
  }
}


