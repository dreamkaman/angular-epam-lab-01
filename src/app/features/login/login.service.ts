import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  loginUser(email: string, password: string) {
    return this.http.post('http://localhost:4000/api/auth/login', { email, password });
  }
}
