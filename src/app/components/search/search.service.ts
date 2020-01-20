import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private httpClient: HttpClient
  ) { }

  downloadPDF(appId) {
    //console.log("PDF");
    //console.log(appId);
    console.log("localStorage.getItem('metroluid')");
    console.log(localStorage.getItem('metroluid'));
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'metrolename': 'MX-6979_DES_G_OPS',
      'metuserid': localStorage.getItem('metroluid')
    });

    let params = new HttpParams();
    params = params.append('appId', appId);

    this.httpClient.get(AppConstants.URL_SERVICE +"/App/getPdf", {headers, params}).subscribe( (resp:any) => {
      if(resp.result!=null){
        window.open(resp.result.pdfDoc, "_blank");
      }
    });
  }
}
