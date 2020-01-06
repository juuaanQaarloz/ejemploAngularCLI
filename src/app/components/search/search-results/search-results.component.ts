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
  columns: any;
  records: any = [];
  p: any;
  numItems: number = 10;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.columns = [
      { field: 'app_id', label: 'FUC', align: 'text-center', type: 'id'},
      { field: 'app_dcn_num', label: 'Folio DES', align: 'text-left', type: 'string'},
      { field: 'agnt_pmtr_cd', label: 'Promotoria', align: 'text-left', type: 'string'},
      { field: 'app_pol_num', label: 'Núm Póliza', align: 'text-left', type: 'string'},
      { field: 'party_natl_id', label: 'RFC', align: 'text-left', type: 'string'},
      { field: 'doc_stts', label: 'Status', align: 'text-left', type: 'string'},
      { field: 'rec_crt_ts', label: 'Fecha de solicitud', align: 'text-center', type: 'date'},
      { field: 'rec_updt_ts', label: 'Fecha de modificación', align: 'text-center', type: 'date'}
    ];

    this.records = JSON.parse(localStorage.getItem('search'));
  }

  detail(app_id: any){
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    });

    let params = new HttpParams();
    params = params.append('app_id', app_id);

    this.httpClient.get( AppConstants.URL_SERVICE  + '/aplication', {headers, params}).subscribe((resp:any) => {
      console.log("detalle");
      console.log(resp.data);
      localStorage.setItem('detail', JSON.stringify(resp.data));
      this.router.navigate(['search','detail', app_id]);
    });
  }
}
