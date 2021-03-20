import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;
  private name;
  private authStatusListener = new Subject<boolean>();
  constructor() {}

  setIsAuthenticated(value:   boolean): void {
    this.isAuthenticated = value;
    this.authStatusListener.next(value);
  }
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

  getStatus(): boolean {
    return this.isAuthenticated;
  }
}
