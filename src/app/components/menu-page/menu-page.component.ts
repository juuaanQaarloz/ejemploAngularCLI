import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  metrolename:string;
  metroluid:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    console.log('Entro a la aplicación menuPage');
    const sessionUser = {
      userName: 'N3333876',
      userType: 'New'
    };
    localStorage.setItem( 'sessionUser', JSON.stringify(sessionUser));

    this.httpClient.get( AppConstants.URL_SERVICE_DEV  + '/getUserData').subscribe((resp:any) => {
      localStorage.setItem("metrolename", resp.data.metrolename);
      localStorage.setItem("metroluid", resp.data.metUserId);
      localStorage.setItem("token", resp.data.temporalToken);
      localStorage.setItem("userId", '1120');

      console.log("metrolename: "+ localStorage.getItem("metrolename") );
      console.log("metroluid: "+ localStorage.getItem("metroluid") );
      console.log("token: "+ localStorage.getItem("token") );
      console.log("userId: "+ localStorage.getItem("userId") );
    });
/*
    this.activatedRoute.queryParams.subscribe( params => {
      this.metrolename = params['metrolename'];
      this.metroluid = params['metroluid'];

      localStorage.setItem("metrolename", this.metrolename);
      localStorage.setItem("metroluid", this.metroluid);
      localStorage.setItem("userId", '1120');
      //console.log("metrolename: "+this.metrolename);
      //console.log("metroluid: "+this.metroluid);
    });
*/
  }

}
