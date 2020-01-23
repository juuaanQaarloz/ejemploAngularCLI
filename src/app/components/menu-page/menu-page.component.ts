import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from 'src/app/app.constants';
import {TOKEN_CHANNEL, X_IBM_CLIENT_ID_CHANNEL} from '../../core/mock/mock_token';
import {ApplicationService} from '../../core/services';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  metrolename: string;
  metroluid: string;
  token: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private appService: ApplicationService
  ) {
  }

  ngOnInit() {
    console.log('Entro a la aplicación menuPage');
    const sessionUser = {
      userName: 'N3333876',
      userType: 'New'
    };
    localStorage.setItem('sessionUser', JSON.stringify(sessionUser));

    this.activatedRoute.queryParams.subscribe(params => {
      if (params['metrolename'] !== undefined && params['metroluid'] !== undefined) {
        localStorage.setItem('metrolename', params['metrolename']);
        localStorage.setItem('metroluid', params['metroluid']);
        localStorage.setItem('token', TOKEN_CHANNEL);

        this.setGlobalHeaders();
      } else {

        this.httpClient.get(AppConstants.URL_SERVICE_DEV + '/getdptoken').subscribe((resp: any) => {
          console.log('entra al servicio getDpToken');
          console.log(resp);
        });

        this.httpClient.get(AppConstants.URL_SERVICE_DEV + '/getUserData').subscribe((resp: any) => {
          console.log('entra al servicio getUserData');
          console.log('resp: ', resp);
          this.metrolename = resp.data.metrolename;
          this.metroluid = resp.data.metUserId;
          this.token = resp.data.temporalToken;
          console.log('resp: ', resp.data);
          localStorage.setItem('metrolename', resp.data.metrolename);
          localStorage.setItem('metroluid', resp.data.metUserId);
          localStorage.setItem('token', resp.data.temporalToken);

          this.setGlobalHeaders();
        }, error => {
          console.log('on Error getUserData: ', error);
        });
      }

      console.log('metrolename: ' + localStorage.getItem('metrolename'));
      console.log('metroluid: ' + localStorage.getItem('metroluid'));
      console.log('token: ' + localStorage.getItem('token'));

      const URL_AGENT_USER = '../assets/catalogs/agent-user.json';

      this.httpClient.get(URL_AGENT_USER).subscribe((resp: any) => {
        console.log('AGENT_USER');
        console.log(resp);

        if (resp !== null) {
          resp.agentUser.forEach(item => {
            if (item.metroluid === localStorage.getItem('metroluid')) {
              localStorage.setItem('userId', item.agentId);
            }
          });
        }
        console.log('userId: ' + localStorage.getItem('userId'));
      });
    });
  }

  setGlobalHeaders() {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'metrolename': localStorage.getItem('metrolename'),
      'metuserid': localStorage.getItem('metroluid'),
      'x-ibm-client-id': X_IBM_CLIENT_ID_CHANNEL,
      'authorization': 'Bearer ' + localStorage.getItem('token'),
    };

    console.log('headers: ', headers);

    this.appService.setGlobalHeader(headers);
  }
}
