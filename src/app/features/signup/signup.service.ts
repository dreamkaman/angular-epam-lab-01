import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  URL: string = 'http://localhost:4000/api/auth/signup';

  constructor(
    private http: HttpClient
  ) { }

  signupUser(email: string, password: string) {
    return this.http.post(this.URL, { email, password });
  }

}
