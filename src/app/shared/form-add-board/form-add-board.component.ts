import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getToken, selectToken } from 'src/app/features/dashboard/dashboard.selectors';
import { DashboardService } from 'src/app/features/dashboard/dashboard.service';
import { GlobalState } from 'src/store/models/login.model';

import { ModalWindowService } from '../modal-window/modal-window.service';
import * as dashboardActions from '../../features/dashboard/dashboard.actions';
import { BoardItem } from 'src/app/features/dashboard/dashboard.reducer';

@Component({
  selector: 'app-form-add-board',
  templateUrl: './form-add-board.component.html',
  styleUrls: ['./form-add-board.component.scss']
})

export class FormAddBoardComponent implements OnInit {
  @ViewChild('f') loginForm!: NgForm;

  auth_token = getToken(this.store.select(selectToken));

  constructor(
    private modalWindowService: ModalWindowService,
    private dashBoardService: DashboardService,
    private store: Store<GlobalState>) { }

  ngOnInit(): void {
  }

  onOkSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Click on Submit!');
      console.log(this.auth_token);

      this.dashBoardService.addBoard().subscribe({
        next: responseData => {
          console.log(responseData);
          const board: BoardItem = responseData as BoardItem;
          this.store.dispatch(dashboardActions.addBoard({ board }));
        },
        error: err => console.log(err)
      });

      this.modalWindowService.close();

      return
    }

    alert('Please, input required values before submit!');
  }


  onBackdropClick(event: MouseEvent): void {

    if (event.target == event.currentTarget) {

      this.modalWindowService.close();
    }

  }

  onCloseBtnClick() {

    this.modalWindowService.close();
  }


}
