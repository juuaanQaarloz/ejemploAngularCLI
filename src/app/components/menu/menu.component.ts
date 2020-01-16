import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  metrolename:string;
  metuid:string;

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe( params => {
      this.metrolename = params['metrolename'];
      this.metuid = params['metuid'];

      localStorage.setItem("metrolename", this.metrolename);
      localStorage.setItem("metuid", this.metuid);
      
      //console.log("metrolename: "+this.metrolename);
      //console.log("metuid: "+this.metuid);
      });
  }

  navigateTo(path) {
    this.router.navigate([path]);
  }

}
