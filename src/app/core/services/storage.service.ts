import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user.interface';
import {Session} from '../../models/session.interface';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../../app.constants';
import {ApplicationService} from './application.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageService;
  private currentSession: Session = null;

  constructor(private router: Router,
              private appService: ApplicationService
              ) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentSession(session: Session): void {
    this.currentSession = session;
    // console.log('session: ', session);
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
  }

  loadSessionData(): Session {
    const sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <Session> JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
  }

  getCurrentUser(): User {
    const session: Session = this.getCurrentSession();
    return (session && session.user) ? session.user : null;
  }

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  }

  getCurrentToken(): string {
    const session = this.getCurrentSession();
    return (session && session.token) ? session.token : null;
  }

  logout(): void {
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }

  getSessionUser(): any {
    const stores = window.localStorage;
    return JSON.parse(stores.getItem('sessionUser'));
  }
}
