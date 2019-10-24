import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        public dialog: MatDialog
    ) {}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true;
    }
}
