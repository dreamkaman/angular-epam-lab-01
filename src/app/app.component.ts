import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-HW';

  btnFilter = 'Filter';
  btnSortByDropdown = 'Sort By Dropdown';
  btnASC = 'ASC';
  btnDESC = 'DESC';

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
