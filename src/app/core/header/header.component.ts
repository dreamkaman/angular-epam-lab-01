import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { clearToken } from 'src/app/features/login/login.actions';
import { GlobalState } from 'src/store/models/login.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isLogined: boolean = false;

  btnLogout: string = 'Log out';

  constructor(private store: Store<GlobalState>, private router: Router) { }

  ngOnInit(): void {

    console.log(this.store.subscribe({
      next: (data) => {
        const { login: { token } } = data;

        if (token) { this.isLogined = true }
        else { this.isLogined = false }
      },
      error: () => console.log('Error'),

      complete: () => console.log('Finite!')
    }));
  }

  onLogOut() {
    console.log('Log out!');

    this.store.dispatch(clearToken());

    this.router.navigateByUrl('/login');
  }

}
