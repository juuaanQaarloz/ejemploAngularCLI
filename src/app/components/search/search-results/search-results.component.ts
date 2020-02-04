import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ApplicationService} from '../../../core/services';
import {JsonApplicationService} from '../../../core/services/json-application.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  metrolename: string;
  metroluid: string;
  columns: any;
  records: any = [];
  p: any;
  numItems: number = 10;
  url_services;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private appService: ApplicationService,
    private jsonAppService: JsonApplicationService
  ) {
  }

  ngOnInit() {
    //// console.log("localStorage");
    //// console.log(localStorage.getItem("metrolename"));
    this.url_services = this.appService.getUrlServices();
    this.metrolename = localStorage.getItem('metrolename');
    this.metroluid = localStorage.getItem('metroluid');

    this.columns = [
      {field: 'appDcnNum', label: 'FUC', align: 'text-center', type: 'string'},
      {field: 'appId', label: 'Folio DES', align: 'text-left', type: 'id'},
      {field: 'agntPmtrCd', label: 'Promotoria', align: 'text-left', type: 'string'},
      {field: 'appPolNum', label: 'Núm Póliza', align: 'text-left', type: 'string'},
      {field: 'partyNatlId', label: 'RFC', align: 'text-left', type: 'string'},
      {field: 'docStts', label: 'Status', align: 'text-left', type: 'string'},
      {field: 'recCrtTs', label: 'Fecha de solicitud', align: 'text-center', type: 'date'},
      {field: 'recUpdtTs', label: 'Fecha de modificación', align: 'text-center', type: 'date'}
    ];

    if (JSON.parse(localStorage.getItem('search')) !== null) {
      this.records = JSON.parse(localStorage.getItem('search'));
      // console.log("records");
      // console.log(this.records);
    } else {
      this.records = [];
    }
  }

  detail(app_id: any) {
    let metrolname = localStorage.getItem('metrolename');
    let metuserid = localStorage.getItem('metroluid');

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'metrolename': metrolname,
      'metuserid': metuserid
    };

    let params = new HttpParams();
    params = params.append('app_id', app_id);
    const DUMMY_SEARCH_JSON = '../assets/dummies/dummy-search-result.json';

    this.httpClient.get(this.url_services + '/getApp', {headers, params}).subscribe((response: any) => {
    // this.httpClient.get(DUMMY_SEARCH_JSON).subscribe((response: any) => {
      // console.log('detalle: ', response.data);

      // set the result json if the search globally
      this.jsonAppService.setAppJson(response.data);

      // console.log('detail in json service: ', this.jsonAppService.getAppJson());
      // localStorage.setItem('detail', JSON.stringify(response.data));
      this.router.navigate(['search', 'detail', app_id]);
    });
  }
}
