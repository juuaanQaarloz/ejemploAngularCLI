import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Session} from '../../models/session.interface';
import {LoginObject} from '../../models/login-object.model';
import {AuthService, StorageService} from '../../core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'user1';
  password = 'password1';

  submitted = false;
  error: { code: number, message: string } = null;

  constructor(private authService: AuthService,
              private storageService: StorageService,
              private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.error = null;
    this.authService.login(new LoginObject({username: this.username, password: this.password})).subscribe(
      data => this.correctLogin(data),
      error => {
        this.error = error;
        console.log('error: ', error);
      });
  }

  private correctLogin(data: Session) {
    this.storageService.setCurrentSession(data);
    this.router.navigate(['/application']);
  }

}
