import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  @Output() isVisible: boolean = false;

  constructor() { }

  onClickHandler() {
    this.isVisible = !this.isVisible;
  }
  ngOnInit(): void {
  }

}
