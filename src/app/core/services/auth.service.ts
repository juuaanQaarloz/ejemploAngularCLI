import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Session} from '../../models/session.interface';
import {LoginObject} from '../../models/login-object.model';
import { ApplicationService } from './application.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url_services;

  constructor(
    private http: HttpClient,
    private appService: ApplicationService) {}

  private basePath = '/api/authenticate/';

  login(loginObj: LoginObject): Observable<Session> {
    return this.http.post<Session>(this.basePath + 'login', loginObj);
  }

  /*logout(): Observable<boolean> {
    return this.http.post<boolean>(this.basePath + 'logout', {});
  }*/

  logout(): any {
    this.url_services = this.appService.getUrlServices();
    return this.http.post("/closeSession", {});
  }
}
