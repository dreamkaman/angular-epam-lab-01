import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormEditBoardService {
  boardId: string = '';

  constructor() { }

  getBoardId() {
    return this.boardId;
  }

  setBoardId(newBoardId: string) {
    this.boardId = newBoardId;

  }
}
