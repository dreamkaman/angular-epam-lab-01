import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearBoards } from 'src/app/features/dashboard/dashboard.actions';
import { selectToken } from 'src/app/features/dashboard/dashboard.selectors';
import { clearToken } from 'src/app/features/login/login.actions';
import { GlobalState } from 'src/store/models/store.model';
import { getValue } from 'src/app/features/dashboard/dashboard.selectors';
import { clearDetails } from 'src/app/features/details/details.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isLogined!: Observable<string | null>;


  URL = 'http://localhost:4000/api/users/logout';

  userName: string = '';

  constructor(private store: Store<GlobalState>, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.isLogined = this.store.select(selectToken);

  }

  onLogOut() {
    const auth_token = getValue(this.isLogined);

    this.http.get(this.URL, {
      headers: {
        "Authorization": `Bearer ${auth_token}`
      }
    }).subscribe({
      next: () => {
        this.store.dispatch(clearToken());
        this.store.dispatch(clearBoards());
        this.store.dispatch(clearDetails());
        this.router.navigateByUrl('/login');

      },
      error: (err) => console.log(err)
    })


  }

}
