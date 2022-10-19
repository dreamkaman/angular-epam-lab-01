import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  paramName = 'email';

  inputValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: Event) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

}
