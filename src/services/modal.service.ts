import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalBlockedSubject = new BehaviorSubject<boolean>(false);

  modalBlocked$ = this.modalBlockedSubject.asObservable();
  constructor() { }

  blockModal(){
    this.modalBlockedSubject.next(true);
  }

  unBlockModal(){
    this.modalBlockedSubject.next(false);
  }
}
