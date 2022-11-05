import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {
  private displayAddBoard: BehaviorSubject<boolean> =
    new BehaviorSubject(false);

  watch(): Observable<boolean> {
    return this.displayAddBoard.asObservable();
  }

  open() {
    this.displayAddBoard.next(true);
  }

  close() {
    this.displayAddBoard.next(false);
  }
}