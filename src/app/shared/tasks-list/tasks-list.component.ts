import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsItem } from 'src/app/features/details/details.reducer';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  @Input() blockTitle: string = '';
  @Input() details!: Observable<DetailsItem[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
