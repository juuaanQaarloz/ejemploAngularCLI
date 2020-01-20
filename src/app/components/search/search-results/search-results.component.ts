import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  metrolename:string;
  metroluid:string;
  columns: any;
  records: any = [];
  p: any;
  numItems: number = 10;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("localStorage");
    console.log(localStorage.getItem("metrolename"));
    this.metrolename = localStorage.getItem("metrolename");
    this.metroluid = localStorage.getItem("metroluid")

    this.columns = [
      { field: 'appDcnNum', label: 'FUC', align: 'text-center', type: 'string'},
      { field: 'appId', label: 'Folio DES', align: 'text-left', type: 'id'},
      { field: 'agntPmtrCd', label: 'Promotoria', align: 'text-left', type: 'string'},
      { field: 'appPolNum', label: 'Núm Póliza', align: 'text-left', type: 'string'},
      { field: 'partyNatlId', label: 'RFC', align: 'text-left', type: 'string'},
      { field: 'docStts', label: 'Status', align: 'text-left', type: 'string'},
      { field: 'recCrtTs', label: 'Fecha de solicitud', align: 'text-center', type: 'date'},
      { field: 'recUpdtTs', label: 'Fecha de modificación', align: 'text-center', type: 'date'}
    ];

    if(JSON.parse(localStorage.getItem('search'))!==null){
      this.records = JSON.parse(localStorage.getItem('search'));
      console.log("records");
      console.log(this.records);
    }else
    this.records = [];
  }

  detail(app_id: any){
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'metrolename': 'MX-6979_DES_G_OPS',
      'metuserid': localStorage.getItem('metuid')
    });

    let params = new HttpParams();
    params = params.append('app_id', app_id);

    this.httpClient.get( AppConstants.URL_SERVICE_DEV  + '/application', {headers, params}).subscribe((resp:any) => {
      console.log("detalle");
      console.log(resp.data);
      localStorage.setItem('detail', JSON.stringify(resp.data));
      this.router.navigate(['search','detail', app_id]);
    });
  }
}
