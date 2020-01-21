import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  metrolename:string;
  metroluid:string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('Entro a la aplicación menuPage');
    const sessionUser = {
      userName: 'N3333876',
      userType: 'New'
    };
    localStorage.setItem( 'sessionUser', JSON.stringify(sessionUser));

    this.activatedRoute.queryParams.subscribe( params => {
      this.metrolename = params['metrolename'];
      this.metroluid = params['metroluid'];

      localStorage.setItem("metrolename", this.metrolename);
      localStorage.setItem("metroluid", this.metroluid);
      
      //console.log("metrolename: "+this.metrolename);
      //console.log("metroluid: "+this.metroluid);
    });

  }

}
