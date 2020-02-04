import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {StorageService} from '../services/storage.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private storageService: StorageService) {
  }

  canActivate() {

    // // // console.log(this.storageService.isAuthenticated());
    if (this.storageService.isAuthenticated()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
