import { Injectable } from '@angular/core';
// import { }
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  boardName: string = '';

  constructor() { }

  getBoardName() {
    return this.boardName;
  }

  setBoardName(newBoardName: string) {
    this.boardName = newBoardName;
  }
}
