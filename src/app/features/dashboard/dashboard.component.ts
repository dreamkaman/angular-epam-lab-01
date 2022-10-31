import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

export interface DashbordState {

}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor(private store: Store) { }

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
