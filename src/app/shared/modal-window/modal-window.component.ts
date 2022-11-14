import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ModalWindowService } from './modal-window.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  @ViewChild('f') loginForm!: NgForm;

  isAddBoardModalVisible$: Observable<boolean> = new Observable<false>;
  isEditBoardModalVisible$: Observable<boolean> = new Observable<false>;
  isAddDetailModalVisible$: Observable<boolean> = new Observable<false>;
  isEditDetailModalVisible$: Observable<boolean> = new Observable<false>;
  isAddCommentModalVisible$: Observable<boolean> = new Observable<false>;


  constructor(
    private modalWindowService: ModalWindowService
  ) { }

  ngOnInit() {

    this.isAddBoardModalVisible$ = this.modalWindowService.watchAddBoard();

    this.isEditBoardModalVisible$ = this.modalWindowService.watchEditBoard();

    this.isAddDetailModalVisible$ = this.modalWindowService.watchAddDetail();

    this.isEditDetailModalVisible$ = this.modalWindowService.watchEditDetail();

    this.isAddCommentModalVisible$ = this.modalWindowService.watchAddComment();
  }


  onAddBoardBackdropClick(event: MouseEvent) {

    if (event.target == event.currentTarget) {

      this.modalWindowService.closeAddBoard();
    }

  }

  onEditBoardBackdropClick(event: MouseEvent) {
    if (event.target == event.currentTarget) {

      this.modalWindowService.closeEditBoard();
    }
  }

  onAddDetailBackdropClick(event: MouseEvent) {
    if (event.target == event.currentTarget) {

      this.modalWindowService.closeAddDetail();
    }
  }

  onEditDetailBackdropClick(event: MouseEvent) {
    if (event.target == event.currentTarget) {

      this.modalWindowService.closeEditDetail();
    }
  }

  onAddCommentBackdropClick(event: MouseEvent) {
    if (event.target == event.currentTarget) {

      this.modalWindowService.closeAddComment();
    }
  }

}
