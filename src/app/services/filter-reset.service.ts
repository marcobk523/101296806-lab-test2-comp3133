import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterResetService {
  private resetSource = new Subject<void>();
  resetCalled$ = this.resetSource.asObservable();

  callReset() {
    this.resetSource.next();
  }
}