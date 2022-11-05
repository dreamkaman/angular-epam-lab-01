import { Component, Input, OnInit, ViewChild } from '@angular/core';
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

  isModalVisible$: Observable<boolean> = new Observable<false>;

  constructor(
    private modalWindowService: ModalWindowService
  ) { }

  ngOnInit() {

    this.isModalVisible$ = this.modalWindowService.watch();
  }


  onOkSubmit() {
    if (this.loginForm.valid) {
      console.log('Click on Submit!');

      this.modalWindowService.close();
    }

    alert('Please, input required values before submit!');
  }


  onBackdropClick(event: MouseEvent) {

    if (event.target == event.currentTarget) {

      this.modalWindowService.close();
    }

  }

  onCloseBtnClick() {

    this.modalWindowService.close();
  }

}
