import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  idTask: string = '';
  constructor() { }

  getIdTask() {
    return this.idTask;
  }

  setIdTask(newIdTask: string) {
    this.idTask = newIdTask;
  }
}
