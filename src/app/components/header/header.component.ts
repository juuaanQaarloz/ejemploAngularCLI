import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services';
import { Router } from '@angular/router';

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
    private router: Router
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

  logout(){
    // console.log('logout');
    this.authService.logout().subscribe(
      response => {
        // console.log(response);
        this.home();
      }
    );
  }

  home(){
    // console.log("redirect to home");
    this.router.navigate(['https://dev.des.metlife.com/des/#/']);
  }
}
