import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuOptions = [
    {
      menuLabel: 'NUEVOS NEGOCIOS',
      redirectTo: 'application2'
    },
    // {
    //   menuLabel: 'MESA DE CONTROL',
    //   redirectTo: ''
    // },
    {
      menuLabel: 'BÚSQUEDA',
      redirectTo: ''
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(path) {
    this.router.navigate([path]);
  }

}
