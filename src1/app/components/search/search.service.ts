import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';
import {ApplicationService} from '../../core/services';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private httpClient: HttpClient,
    private appService: ApplicationService
  ) { }

  downloadPDF(appId) {
    //// console.log("PDF");
    //// console.log(appId);
    // console.log("localStorage.getItem('metroluid')");
    // console.log(localStorage.getItem('metroluid'));
    let metrolname = localStorage.getItem('metrolename');
    let metuserid = localStorage.getItem('metroluid');

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'metrolename': metrolname ? metrolname : 'DES_Admin',
      'metuserid': metuserid ? metuserid : 'N3333876'
    };

    let params = new HttpParams();
    params = params.append('appId', appId);

    const URL_SERVICES = this.appService.getUrlServices();

    this.httpClient.get( URL_SERVICES +"/App/getPdf", {headers, params}).subscribe( (resp:any) => {
      if(resp.result!=null){
        window.open(resp.result.pdfDoc, "_blank");
      }
    });
  }
}
