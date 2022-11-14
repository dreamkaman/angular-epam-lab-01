import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/store/models/store.model';

import { ModalWindowService } from '../modal-window/modal-window.service';
import { TaskService } from '../task/task.service';

import { DetailsService } from 'src/app/features/details/details.service';
import { NgForm } from '@angular/forms';

import * as dashboardSelectors from '../../features/dashboard/dashboard.selectors';
import { Router } from '@angular/router';
import * as detailsActions from '../../features/details/details.actions';

@Component({
  selector: 'app-form-edit-detail',
  templateUrl: './form-edit-detail.component.html',
  styleUrls: ['./form-edit-detail.component.scss']
})
export class FormEditDetailComponent implements OnInit {
  @ViewChild('f') editDetailForm!: NgForm;

  taskName: string = '';
  taskId: string = '';

  BASE_URL: string = 'http://localhost:4000/api';

  constructor(
    private modalWindowService: ModalWindowService,
    private detailsService: DetailsService,
    private taskService: TaskService,
    private store: Store<GlobalState>,
    private router: Router) { }

  ngOnInit(): void {
  }

  onOkSubmit() {
    const auth_token = dashboardSelectors.getValue(this.store.select(dashboardSelectors.selectToken));
    const patchURL = this.BASE_URL + this.router.url + '/' + this.taskService.getIdTask();
    const { name: newName } = this.editDetailForm.value;

    this.detailsService.patchDetailName(auth_token, patchURL, newName).subscribe({
      next: detail => {

        this.store.dispatch(detailsActions.patchDetailName({ detail, newName }));
      },
      error: err => console.log(err)
    });
    this.modalWindowService.closeEditDetail();
  }

  onCloseBtnClick() {
    this.modalWindowService.closeEditDetail();
  }

}
