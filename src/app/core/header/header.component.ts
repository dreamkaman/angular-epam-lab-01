import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearBoards } from 'src/app/features/dashboard/dashboard.actions';
import { selectToken } from 'src/app/features/dashboard/dashboard.selectors';
import { clearToken } from 'src/app/features/login/login.actions';
import { GlobalState } from 'src/store/models/login.model';
import { getToken } from 'src/app/features/dashboard/dashboard.selectors';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isLogined!: Observable<string | null>;


  URL = 'http://localhost:4000/api/users/logout';

  constructor(private store: Store<GlobalState>, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.isLogined = this.store.select(selectToken);

  }

  onLogOut() {
    const auth_token = getToken(this.store.select(selectToken));

    // console.log(auth_token);

    this.http.get(this.URL, {
      headers: {
        "Authorization": `Bearer ${auth_token}`
      }
    }).subscribe({
      next: () => {
        this.store.dispatch(clearToken());
        this.store.dispatch(clearBoards());

        this.router.navigateByUrl('/login');

      },
      error: (err) => console.log(err)
    })


  }

}
