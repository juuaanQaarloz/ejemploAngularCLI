import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Session} from '../models/session.interface';
import {LoginObject} from '../models/login-object.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  private basePath = '/api/authenticate/';

  login(loginObj: LoginObject): Observable<Session> {
    return this.http.post<Session>(this.basePath + 'login', loginObj);
  }

  logout(): Observable<boolean> {
    return this.http.post<boolean>(this.basePath + 'logout', {});
  }}
