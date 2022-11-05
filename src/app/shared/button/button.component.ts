import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'Button text';
  @Input() btnType: string = 'button';

  @Output() clickEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }


}
