import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})


export class InputComponent implements OnInit {
  @Input() inputName = '';
  @Input() inputType = '';
  @Input() inputTitle = '';




  inputValue = '';

  constructor() {

  }


  ngOnInit(): void {

  }

  onInput(event: Event) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }



}
