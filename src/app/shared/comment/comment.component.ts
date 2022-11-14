import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() commentText: string = 'This is a default text of the comment component! This is a default text of the comment component! This is a default text of the comment component!';

  constructor() { }

  ngOnInit(): void {
  }

}
