import { Component, OnInit, ViewChild } from '@angular/core';
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


  onLogin(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      form.reset();
      return
    }

    alert('Please, input required values!');

  }
}
