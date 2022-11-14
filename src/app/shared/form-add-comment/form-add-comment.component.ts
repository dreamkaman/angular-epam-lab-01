import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/store/models/store.model';
import { ModalWindowService } from '../modal-window/modal-window.service';
import { TaskService } from '../task/task.service';
import * as taskActions from '../task/task.actions';

@Component({
  selector: 'app-form-add-comment',
  templateUrl: './form-add-comment.component.html',
  styleUrls: ['./form-add-comment.component.scss']
})
export class FormAddCommentComponent implements OnInit {
  @ViewChild('f') addCommentForm!: NgForm;

  constructor(
    private modalWindowService: ModalWindowService,
    private taskService: TaskService,
    private store: Store<GlobalState>
  ) { }

  ngOnInit(): void {
  }

  onOkSubmit() {
    console.log(this.addCommentForm.value);

    const idTask: string = this.taskService.getIdTask();

    const { text } = this.addCommentForm.value;

    this.taskService.postComment(text, idTask)
      .subscribe({
        next: comment => {
          this.store.dispatch(taskActions.addComment({ comment }));
        },
        error: err => console.log(err)
      });

    this.modalWindowService.closeAddComment();
  }

  onCloseBtnClick() {
    this.modalWindowService.closeAddComment();
  }
}
