import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() boardName: string = 'Board name';
  @Input() creationDate: string = 'Creation date';
  @Input() description: string = 'Description';

  constructor() { }

  ngOnInit(): void {
  }


}
