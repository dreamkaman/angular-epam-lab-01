import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearBoards } from 'src/app/features/dashboard/dashboard.actions';
import { selectToken } from 'src/app/features/dashboard/dashboard.selectors';
import { clearToken } from 'src/app/features/login/login.actions';
import { GlobalState } from 'src/store/models/login.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isLogined!: Observable<string | null>;

  btnLogout: string = 'Log out';

  constructor(private store: Store<GlobalState>, private router: Router) { }

  ngOnInit(): void {

    this.isLogined = this.store.select(selectToken);

  }

  onLogOut() {
    console.log('Log out!');

    this.store.dispatch(clearToken());
    this.store.dispatch(clearBoards());

    this.router.navigateByUrl('/login');
  }

}
