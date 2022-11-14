import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { DashboardService, IFormData } from 'src/app/features/dashboard/dashboard.service';
import { GlobalState } from 'src/store/models/store.model';
import { ModalWindowService } from '../modal-window/modal-window.service';
import * as dashboardActions from '../../features/dashboard/dashboard.actions';
import { FormEditBoardService } from './form-edit-board.service';
import { BoardItem } from 'src/app/features/dashboard/dashboard.reducer';

@Component({
  selector: 'app-form-edit-board',
  templateUrl: './form-edit-board.component.html',
  styleUrls: ['./form-edit-board.component.scss']
})
export class FormEditBoardComponent implements OnInit {
  @ViewChild('f') editBoardForm!: NgForm;

  constructor(
    private modalWindowService: ModalWindowService,
    private dashBoardService: DashboardService,
    private store: Store<GlobalState>,
    private formEditBoardService: FormEditBoardService
  ) { }

  ngOnInit(): void {
  }

  onOkSubmit() {
    if (this.editBoardForm.valid) {

      const formData: IFormData = this.editBoardForm.value;
      const boardId = this.formEditBoardService.getBoardId();


      this.dashBoardService.patchBoard(boardId, formData).subscribe({
        next: responseData => {
          const board: BoardItem = responseData;
          this.store.dispatch(dashboardActions.patchBoard({ board }));
        },
        error: err => console.log(err)
      });

      this.modalWindowService.closeEditBoard();

      return
    }

    alert('Please, input required values before submit!');
  }

  onCloseBtnClick() {

    this.modalWindowService.closeEditBoard();
  }

}
