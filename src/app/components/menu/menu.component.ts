import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

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
      redirectTo: 'search'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    /*
    this.activatedRoute.queryParams.subscribe( params => {
      this.metrolename = params['metrolename'];
      this.metroluid = params['metroluid'];

      localStorage.setItem("metrolename", this.metrolename);
      localStorage.setItem("metroluid", this.metroluid);

      // console.log("metrolename: "+this.metrolename);
      // console.log("metroluid: "+this.metroluid);
    });*/
  }

  navigateTo(path) {
    this.router.navigate([path]);
  }

}
