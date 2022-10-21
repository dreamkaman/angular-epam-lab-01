import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler1() {
    console.log("Hello1 in details!");
  }

  clickHandler2() {
    console.log("Hello2 in details!");
  }

  clickHandler3() {
    console.log("Hello3 in details!");
  }

  clickHandler4() {
    console.log("Hello4 in details!");
  }

}
