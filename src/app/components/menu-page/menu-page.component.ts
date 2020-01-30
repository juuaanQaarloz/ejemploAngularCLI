import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ApplicationService} from '../../core/services';
import {timer, Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {WINDOW} from '../../core/providers/windowProviders';

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
    private appService: ApplicationService,
    @Inject(WINDOW) private window: Window
  ) {
  }

  ngOnInit() {

    this.setUrlServices();
    // call the getdptoken every 30 min while the app is running (30 * 60) * 1000)
    this.subscription = timer(0, ((30 * 60) * 1000)).pipe(
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
        let metrolnamePrev = params['metrolename'];

        if (metrolnamePrev.includes('^')) {
          console.log('if gorro: ');
          // filtrar user metrolname
          const resultSlipt = metrolnamePrev.split('^');
          console.log('resultSplit: ', resultSlipt);
          this.metrolename = resultSlipt[1];

        } else {
          this.metrolename = params['metrolename'];
        }

        localStorage.setItem('metrolename', this.metrolename);
        localStorage.setItem('metroluid', params['metroluid']);

      } else {

        this.appService.getUserData().subscribe((data: any) => {
          console.log('entra al servicio getUserData: ', data);
          // let metrolnamePrev = 'GNA^DES_Admin';
          let metrolnamePrev = data.data.metrolename;

          if (metrolnamePrev.includes('^')) {
            console.log('if gorro: ');
            // filtrar user metrolname
            const resultSlipt = metrolnamePrev.split('^');
            console.log('resultSplit: ', resultSlipt);
            this.metrolename = resultSlipt[1];

          } else {
            this.metrolename = data.data.metrolename;
          }

          console.log('resp: ', data.data);
          localStorage.setItem('metrolename', this.metrolename);
          localStorage.setItem('metroluid', data.data.metUserId);
        }, error => {
          console.log('on Error from getUserData: ', error);
        });
      }

      console.log('metrolename: ' + localStorage.getItem('metrolename'));
      console.log('metroluid: ' + localStorage.getItem('metroluid'));

      const URL_AGENT_USER = '../assets/catalogs/agent-user.json';

      this.httpClient.get(URL_AGENT_USER).subscribe((resp: any) => {
        console.log('AGENT_USER');
        console.log(resp);

        if (resp !== null) {
          resp.agentUser.forEach(array => {
            array.forEach((item) => {
              if (item.metroluid === localStorage.getItem('metroluid')) {
                localStorage.setItem('userId', item.agentId);
                localStorage.setItem('promotoryId', item.promotoryId);
              }
            });
          });
        }
        console.log('userId: ' + localStorage.getItem('userId'));
        console.log('promotoryId: ' + localStorage.getItem('promotoryId'));
      });
    });
  }

  getHostname(): string {
    return this.window.location.hostname;
  }

  setUrlServices() {
    const hostName = this.getHostname();

    console.log('hostName: ', hostName);

    if (hostName.includes('dev') || hostName === 'localhost') {
      this.appService.setUrlServices('https://dev.des.metlife.com/despriv');
    } else if (hostName.includes('qa')) {
      this.appService.setUrlServices('https://qa.des.metlife.com/despriv');
    } else if (hostName.includes('int'))  {
      this.appService.setUrlServices('https://int.des.metlife.com/despriv');
    }

    console.log('url_services: ', this.appService.getUrlServices());
  }

  /*ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }*/
}
