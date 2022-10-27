import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm!: NgForm;
  @Output() isLogined: boolean = false;

  URL: string = 'http://localhost:4000/api/auth/login';

  constructor(private http: HttpClient) { }

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
      // console.log(this.loginForm.value);
      const { email, password } = this.loginForm.value;

      console.log('isLogined before - ', this.isLogined);

      // this.http.post(this.URL, { email, password }).subscribe(responseData => {
      //   if (!!responseData) {
      //     console.log(responseData);

      //     this.isLogined = true;

      //     this.loginForm.reset();

      //   }
      // })

      this.http.post(this.URL, { email, password }).subscribe(
        {
          next: (responseData) => {
            console.log(responseData);

            this.isLogined = true;

            this.loginForm.reset();
          },
          error: (err) => console.log(err.error.message),
          complete: () => console.log('Finite la comedy!')
        }
        // responseData => {
        // if (!!responseData) {
        //   console.log(responseData);

        //   this.isLogined = true;

        //   this.loginForm.reset();

        // }
        // }
      );


      console.log('isLogined after - ', this.isLogined);

      return
    }

    alert('Please, input required values!');

  }

}
