import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {
  taskName: string = '';

  constructor() { }

  getTaskName() {
    return this.taskName;
  }

  setTaskName(newTaskName: string) {
    this.taskName = newTaskName;
  }
}
