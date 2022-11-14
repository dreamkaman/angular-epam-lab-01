import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-add-comment',
  templateUrl: './form-add-comment.component.html',
  styleUrls: ['./form-add-comment.component.scss']
})
export class FormAddCommentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onOkSubmit() {
    console.log('onOkSubmit clicked!');
  }

  onCloseBtnClick() {
    console.log('onCloseBtnClick clicked!');
  }
}
