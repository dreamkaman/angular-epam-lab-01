import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsItem } from 'src/app/features/details/details.reducer';
import { ModalWindowService } from '../modal-window/modal-window.service';
import { Status, TasksListService } from './tasks-list.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  @Input() blockTitle: string = '';
  @Input() details!: Observable<DetailsItem[]>;

  status!: Status;

  constructor(
    private modalWindowService: ModalWindowService,
    private tasksListService: TasksListService
  ) { }

  ngOnInit(): void {
  }

  onAddDetailClick(blockTitle: string) {
    console.log("Click on plus button!");

    switch (blockTitle) {
      case 'Todo': this.status = 'todo'; break;
      case 'In progress': this.status = 'in progress'; break;
      case 'Done': this.status = 'done'; break;
      default: console.log('Bad parameter');
    }

    this.tasksListService.setStatus(this.status);

    this.modalWindowService.openAddDetail();
  }
}
