import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {
  @Input() isVisible: boolean = false;

  constructor() { }

  onEdit = (event: Event) => {
    this.isVisible = false;

    console.log('Edit button was pushed!');
    console.log(event);
  }

  ngOnInit(): void {
  }

  onDelete = (event: Event) => {
    this.isVisible = false;

    console.log('Delete button was pushed!');
    console.log(event);
  }

}
