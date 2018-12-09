import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Observable, Subject, pipe } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';


@Injectable()
export class NoAuthguardGuard implements CanActivate {
  constructor(public userServer: UsersService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('user') === null) {
      return true;
    } else {
      this.router.navigate(['/admin-dashboard'])
      return false;
    }
  }
}
