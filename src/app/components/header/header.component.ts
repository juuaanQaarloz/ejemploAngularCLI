import {Component, Inject, OnInit} from '@angular/core';
import {ApplicationService, AuthService} from 'src/app/core/services';
import { Router } from '@angular/router';
import {WINDOW} from '../../core/providers/windowProviders';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  resizeHeaderHeight = false;
  iconHome = 'home-icon';
  iconSecurity = 'security-icon';

  constructor(
    private authService: AuthService,
    private appService: ApplicationService,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
  }

  onScroll(scrollOffset) {
    if (scrollOffset > 0) {
      this.resizeHeaderHeight = true;
    } else {
      this.resizeHeaderHeight = false;
    }
  }

  onMouseMove(event) {
    if (event.type === 'mouseover') {
      if (event.target.id === 'labelHome' || event.target.id === 'iconHome') {
        this.iconHome = 'home-icon-hover';
      } else if (event.target.id === 'labelSecurity' || event.target.id === 'iconSecurity') {
        this.iconSecurity = 'security-icon-hover';
      }
    } else if (event.type === 'mouseout') {
      if (event.target.id === 'labelHome' || event.target.id === 'iconHome') {
        this.iconHome = 'home-icon';
      } else if (event.target.id === 'labelSecurity' || event.target.id === 'iconSecurity') {
        this.iconSecurity = 'security-icon';
      }
    }
    // // // console.log('event: ', event.target.id);
  }

  logout() {
    // console.log('logout');
    this.authService.logout().subscribe(
      response => {
        console.log(response);
        this.home();
      }
    );
  }

  home() {
    const hostName = this.getHostname();
    let url;

    console.log('hostName: ', hostName);
    if (hostName.includes('dev')) {
      url = 'https://dev.des.metlife.com/des/#';
    } else if (hostName.includes('qa')) {
      url = 'https://qa.des.metlife.com/des/#';
    } else if (hostName.includes('int'))  {
      url = 'https://int.des.metlife.com/des/#';
    } else if (hostName.includes('localhost') ) {
      url = 'http://localhost:4200//des/#';
    }

    console.log('url: ', url);
    window.location.href = url;
  }

  getHostname(): string {
    return this.window.location.hostname;
  }
}
