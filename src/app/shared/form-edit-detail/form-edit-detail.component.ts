import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/store/models/store.model';
import { ContextMenuService } from '../context-menu/context-menu.service';
import { ModalWindowService } from '../modal-window/modal-window.service';
import { TaskService } from '../task/task.service';
import * as detailsSelectors from '../../features/details/details.selectors';
import { DetailsService } from 'src/app/features/details/details.service';
import { NgForm } from '@angular/forms';
import { DashboardService } from 'src/app/features/dashboard/dashboard.service';
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
    //Add 'props' taskName

    // this.store.select(detailsSelectors.selectDetails).subscribe({
    //   next: details => {
    //     console.log(details);
    //     const taskId = this.taskService.getIdTask();
    //     console.log('TaskId - ', taskId);
    //     const { todo, inProgress, done } = details;
    //     let arr = [...todo];
    //     arr = arr.concat(inProgress, done);

    //     const foundTask = arr.find(item => item._id === taskId);

    //     if (foundTask?.name) {
    //       this.taskName = foundTask.name;
    //     };
    //     console.log(foundTask);
    //   },
    //   error: err => console.log(err)
    // });
  }

  onOkSubmit() {
    console.log('onOkSubmit click!');
    console.log(this.editDetailForm.value);
    // this.taskId = this.taskService.getIdTask();
    const auth_token = dashboardSelectors.getValue(this.store.select(dashboardSelectors.selectToken));
    const patchURL = this.BASE_URL + this.router.url + '/' + this.taskService.getIdTask();
    const { name: newName } = this.editDetailForm.value;

    console.log('name-', newName);

    console.log(patchURL);
    console.log(this.taskService.getIdTask());


    this.detailsService.patchDetailName(auth_token, patchURL, newName).subscribe({
      next: detail => {
        console.log(detail)

        this.store.dispatch(detailsActions.patchDetailName({ detail, newName }));
      },
      error: err => console.log(err)
    });
    this.modalWindowService.closeEditDetail();
  }

  onCloseBtnClick() {
    console.log('onCloseBtnClick click!');
    this.modalWindowService.closeEditDetail();
  }

}
