import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/store/models/store.model';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') signupForm!: NgForm;
  @Output() isLogined: boolean = false;

  isVisible: boolean = true;

  URL: string = 'http://localhost:4000/api/auth/signup';


  constructor(
    private signupService: SignupService
  ) { }

  ngOnInit(): void {

  }


  onSignup() {

    if (this.signupForm.valid) {
      console.log(this.signupForm.value);

      const { email, password, repassword } = this.signupForm.value;

      if (password !== repassword) {
        alert("The passwords don't match! Please, try again.");
        return
      }

      this.signupService.signupUser(email, password).subscribe({
        next: _res => {
          alert('The user sign up successfully! Please, login.');
        },
        error: err => {
          console.log(err);
          alert(`Error occurred! ${err.error.message}`);
          return
        }
      }
      );

      return
    }

    alert('Please, input required values before submit!');

  }

}
