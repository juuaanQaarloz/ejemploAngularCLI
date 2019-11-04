import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuOptions = [
    {
      menuLabel: 'NUEVOS NEGOCIOS',
      redirectTo: '/application2'
    },
    {
      menuLabel: 'MESA DE CONTROL',
      redirectTo: ''
    },
    {
      menuLabel: 'BÚSQUEDA',
      redirectTo: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
