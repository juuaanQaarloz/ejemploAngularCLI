import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Entro a la aplicación menuPage');
    const sessionUser = {
      userName: 'N3333876',
      userType: 'New'
    };
    localStorage.setItem( 'sessionUser', JSON.stringify(sessionUser));
  }

}
