import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideDrawerStateService {

  constructor() { }

  //isSlideDrawerOpen---------------------------
  private isSlideDrawerOpenSubject = new BehaviorSubject<boolean>(false);
  isSlideDrawerOpen$ = this.isSlideDrawerOpenSubject.asObservable();

  toggleSlideDrawer(shouldOpen: boolean) {
    this.isSlideDrawerOpenSubject.next(shouldOpen);
  }
}
