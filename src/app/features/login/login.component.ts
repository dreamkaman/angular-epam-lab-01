import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(event: Event) {
  //   event.preventDefault();

  //   console.log('Submit works!');

  // }

  onSubmit2() {
    console.log("Submit");
  }
}
