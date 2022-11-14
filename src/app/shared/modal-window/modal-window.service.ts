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

  private displayAddDetail: BehaviorSubject<boolean> =
    new BehaviorSubject(false);

  private displayEditDetail: BehaviorSubject<boolean> =
    new BehaviorSubject(false);

  private displayAddComment: BehaviorSubject<boolean> =
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

  watchAddDetail(): Observable<boolean> {
    return this.displayAddDetail.asObservable();
  }

  openAddDetail() {
    this.displayAddDetail.next(true);
  }

  closeAddDetail() {
    this.displayAddDetail.next(false);
  }

  watchEditDetail(): Observable<boolean> {
    return this.displayEditDetail.asObservable();
  }

  openEditDetail() {
    this.displayEditDetail.next(true);
  }

  closeEditDetail() {
    this.displayEditDetail.next(false);
  }

  watchAddComment(): Observable<boolean> {
    return this.displayAddComment.asObservable();
  }

  openAddComment() {
    this.displayAddComment.next(true);
  }

  closeAddComment() {
    this.displayAddComment.next(false);
  }
}