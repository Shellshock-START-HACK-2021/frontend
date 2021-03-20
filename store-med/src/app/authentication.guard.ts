import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication-service.service';
/*  */
@Injectable({
  providedIn: 'root',
})
export class GeneralAuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean> | Promise<boolean> {
    const isAuth = this.authService.getStatus();
    if (isAuth) {
      return true;
    } else {
      this.router.navigate(['/', 'login']);
      return false;
    }
  }
}
