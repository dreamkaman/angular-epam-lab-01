import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/internal/Subscription';

import { DetailsItem } from './details.reducer';
import * as detailsActions from './details.actions';
import * as detailsSelector from './details.selectors';
import { getToken, selectToken } from '../dashboard/dashboard.selectors';
import { GlobalState } from 'src/store/models/login.model';
import { DashboardService } from '../dashboard/dashboard.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  @Output() todoList!: Observable<DetailsItem[]>;
  @Output() inProgressList!: Observable<DetailsItem[]>;
  @Output() doneList!: Observable<DetailsItem[]>;

  boardName: string = '';

  routeSub: Subscription = new Subscription;

  URL = 'http://localhost:4000/api' + this.router.url;

  boardId: string = '';

  constructor(private route: ActivatedRoute, private store: Store<GlobalState>, private http: HttpClient, private router: Router, private dashBoardService: DashboardService) { }

  getBoardId() {
    this.routeSub = this.route.params.subscribe(params => {
      this.boardId = params['boardId'];
    });
  }

  ngOnInit(): void {
    this.boardName = this.dashBoardService.getBoardName();

    const auth_token: string | null = getToken(this.store.select(selectToken));

    let detailsAll: DetailsItem[] = [];

    this.http.get(this.URL, {
      headers: {
        "Authorization": `Bearer ${auth_token}`
      }
    }).subscribe({
      next: details => {
        detailsAll = details as DetailsItem[];

        this.store.dispatch(detailsActions.getDetails({ detailsAll }));

        this.todoList = this.store.select(detailsSelector.selectDetailsTodo);
        this.inProgressList = this.store.select(detailsSelector.selectDetailsInProgress);
        this.doneList = this.store.select(detailsSelector.selectDetailsDone);

      },
      error: err => console.log(err)
    });




  }

  clickHandler1() {
    console.log("Hello1 in details!");
  }

  clickHandler2() {
    console.log("Hello2 in details!");
  }

  clickHandler3() {
    console.log("Hello3 in details!");
  }

  clickHandler4() {
    console.log("Hello4 in details!");
  }

}
