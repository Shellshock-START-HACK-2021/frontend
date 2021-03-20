import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;
  private authStatusListener = new Subject<boolean>();
  constructor() {}

  setIsAuthenticated(): void {
    this.isAuthenticated = true;
    this.authStatusListener.next(true);
  }
  getStatus(): boolean {
    return this.isAuthenticated;
  }
}
