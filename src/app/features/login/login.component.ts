import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm!: NgForm;
  @Output() isLogined: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  // onLogin(form: NgForm) {
  //   console.log(form);

  //   if (form.valid) {
  //     console.log(form.value);
  //     form.reset();
  //     return
  //   }

  //   alert('Please, input required values!');

  // }

  onLogin() {

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.isLogined = true;
      this.loginForm.reset();
      return
    }

    alert('Please, input required values!');

  }

}
