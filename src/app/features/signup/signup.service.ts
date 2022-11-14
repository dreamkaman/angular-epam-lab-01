import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/store/models/store.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  URL: string = 'http://localhost:4000/api/auth/signup';

  constructor(
    private http: HttpClient,
    private store: Store<GlobalState>,
    private router: Router
  ) { }

  signupUser(email: string, password: string) {
    return this.http.post(this.URL, { email, password });
  }

}
