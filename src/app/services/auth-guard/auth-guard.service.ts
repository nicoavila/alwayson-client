import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GlobalStatusService } from '../global-status/global-status.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    public globalStatus: GlobalStatusService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.globalStatus.isLoggedIn) {
      return true;
    }
    this.router.navigateByUrl('/ingresar');
    return false;
  }
}
