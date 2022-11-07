import { Injectable } from '@angular/core';

export type Status = 'todo' | 'in progress' | 'done';

@Injectable({
  providedIn: 'root'
})
export class TasksListService {
  status!: Status;

  constructor() { }

  getStatus() {
    return this.status;
  }

  setStatus(newStatus: Status) {
    this.status = newStatus;
  }


}
