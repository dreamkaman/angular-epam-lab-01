import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-buttons-list',
  templateUrl: './buttons-list.component.html',
  styleUrls: ['./buttons-list.component.scss']
})
export class ButtonsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler1() {
    console.log("Hello1!");
  }

  clickHandler2() {
    console.log("Hello2!");
  }

  clickHandler3() {
    console.log("Hello3!");
  }

  clickHandler4() {
    console.log("Hello4!");
  }

}
