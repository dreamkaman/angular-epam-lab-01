import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {
  private displayAddBoard: BehaviorSubject<boolean> =
    new BehaviorSubject(false);

  private displayEditBoard: BehaviorSubject<boolean> =
    new BehaviorSubject(false);

  watchAddBoard(): Observable<boolean> {
    return this.displayAddBoard.asObservable();
  }

  openAddBoard() {
    this.displayAddBoard.next(true);
  }

  closeAddBoard() {
    this.displayAddBoard.next(false);
  }

  watchEditBoard(): Observable<boolean> {
    return this.displayEditBoard.asObservable();
  }

  openEditBoard() {
    this.displayEditBoard.next(true);
  }

  closeEditBoard() {
    this.displayEditBoard.next(false);
  }
}