import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ApplicationService} from '../../core/services';
import {timer, Observable, Subject, of, from, Subscription} from 'rxjs';
import {switchMap, takeUntil, catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  metrolename: string;
  metroluid: string;

  subscription: Subscription;


  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private appService: ApplicationService
  ) {
  }

  ngOnInit() {

    // call the getdptoken every 30 min while the app is running (30 * 60) * 1000)
    this.subscription = timer(0,  ((30 * 60) * 1000)).pipe(
      switchMap(() => this.appService.getDPToken())
    ).subscribe(result => {
      console.log('entra al servicio getdptoken');
      console.log('result: ', result);
    }, error => {
      console.log('on Error getDPToken: ', error);
    });

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

        this.setGlobalHeaders();
      } else {

        this.appService.getUserData().subscribe((data: any) => {
          console.log('entra al servicio getUserData: ', data);
          let metrolnamePrev = data.data.metrolename;

          if (metrolnamePrev.includes('^')) {
            // filtrar user metrolname
            const resultSlipt = metrolnamePrev.split('^');
            this.metrolename = resultSlipt[1];

          } else  {
            this.metrolename = data.data.metrolename;
          }

          console.log('resp: ', data.data);
          localStorage.setItem('metrolename', data.data.metrolename ? data.data.metrolename : 'DES_Admin');
          localStorage.setItem('metroluid', data.data.metUserId ? data.data.metUserId : 'N3333876');
        }, error => {
          console.log('on Error from getUserData: ', error);
        });
      }

      console.log('metrolename: ' + localStorage.getItem('metrolename'));
      console.log('metroluid: ' + localStorage.getItem('metroluid'));

      const URL_AGENT_USER = '../assets/catalogs/agent-user.json';

      this.httpClient.get(URL_AGENT_USER).subscribe((resp: any) => {
        console.log('AGENT_USER');
        console.log('resp: ', resp);

        if (resp !== null) {
          const metroluid = localStorage.getItem('metroluid');
          resp.agentUser.forEach(item => {
            console.log('agentInfo: ', item);
            if (item.metroluid === metroluid) {
              console.log('inside if');
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
      'metuserid': localStorage.getItem('metroluid')
    };

    console.log('headers: ', headers);

    this.appService.setGlobalHeader(headers);
  }

  /*ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }*/
}
