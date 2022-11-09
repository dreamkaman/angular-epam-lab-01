import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  idTask: string = '';

  destination: string = '';

  constructor() { }

  getIdTask() {
    return this.idTask;
  }

  setIdTask(newIdTask: string) {
    this.idTask = newIdTask;
  }

  getDestination() {
    return this.destination;
  }

  setDestination(newDestination: string) {
    this.destination = newDestination;
  }
}
