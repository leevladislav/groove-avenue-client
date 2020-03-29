import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AppGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        // if (this.authService.isAuthenticated()) {
        //   return true;
        // }
        //
        // this.router.navigate(['/auth/login']);
        // return false;
        // TODO: when user is auth
        return true;
    }
}
