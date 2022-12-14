import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router'

import { addUser } from './login.actions';
import { LoginService } from './login.service';
import { GlobalState } from 'src/store/models/store.model';
import { selectToken } from '../dashboard/dashboard.selectors';

export interface Response {
  token: string,
  email: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm!: NgForm;
  @Output() isLogined: boolean = false;

  isVisible: boolean = true;

  URL: string = 'http://localhost:4000/api/auth/login';

  constructor(
    private loginService: LoginService,
    private store: Store<GlobalState>,
    private router: Router) { }

  ngOnInit(): void {
    this.store.select(selectToken).subscribe(isVisible => this.isVisible = !isVisible);
  }


  onLogin() {

    if (this.loginForm.valid) {

      const { email, password } = this.loginForm.value;

      this.loginService.loginUser(email, password).subscribe(
        {
          next: (responseData) => {

            this.loginForm.reset();

            const { token, email } = responseData as Response;

            this.store.dispatch(addUser({ token, email }));

            this.router.navigateByUrl('/boards');

          },
          error: (err) => console.log(err.error.message)
        }
      );

      return
    }

    alert('Please, input required values before submit!');

  }

}
