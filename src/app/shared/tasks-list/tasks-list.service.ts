import { Injectable } from '@angular/core';
import { DetailsItem } from 'src/app/features/details/details.reducer';

export type Status = 'todo' | 'in progress' | 'done';

@Injectable({
  providedIn: 'root'
})
export class TasksListService {
  status!: Status;
  draggingDetail!: DetailsItem;

  constructor() { }

  getStatus() {
    return this.status;
  }

  setStatus(newStatus: Status) {
    this.status = newStatus;
  }

  getDraggingDetail() {
    return this.draggingDetail;
  }

  setDraggingDetail(newDetail: DetailsItem) {
    this.draggingDetail = newDetail;
  }

}
