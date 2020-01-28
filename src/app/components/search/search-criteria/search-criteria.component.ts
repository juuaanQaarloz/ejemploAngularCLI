import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';
import {ApplicationService} from '../../../core/services';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })
};
const httpOptionsUndefined = {
  headers: new HttpHeaders({

  })
};

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  metrolename: string;
  metroluid: string;
  url_services;

  criteria = {
    param1: '',
    param2: '',
    param3: '',
    param4: ''
  };

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private appService: ApplicationService
  ) { }

  ngOnInit() {
    this.metrolename = localStorage.getItem('metrolename');
    this.metroluid = localStorage.getItem('metroluid');
    this.url_services = this.appService.getUrlServices();
    // console.log("search criteria");
    // console.log(this.metrolename);
    // console.log(this.metroluid);
  }

  search() {

    let metrolname = localStorage.getItem('metrolename');
    let metuserid = localStorage.getItem('metroluid');
    let agentID = '';
    let promoID = '';

    console.log('metrolname: ', metrolname);
    if (metrolname !== 'MX-6979_DES_G_OPS') {
      console.log('inside if');
      agentID = localStorage.getItem('userId');
      promoID = localStorage.getItem('promotoryId');
    }


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
    params = params.append('agentId', agentID);
    params = params.append('promotoryId', promoID);

    if (this.criteria.param1 !== '' ) {
      params = params.append('fiel', 'APP_DCN_NUM');
      params = params.append('value', this.criteria.param1);
    }
    if (this.criteria.param2 !== '' ) {
      params = params.append('fiel', 'APP_ID');
      params = params.append('value', this.criteria.param2);
    }
    if (this.criteria.param3 !== '' ) {
      params = params.append('fiel', 'APP_POL_NUM');
      params = params.append('value', this.criteria.param3);
    }
    if (this.criteria.param4 !== '' ) {
      params = params.append('fiel', 'PARTY_NATL_ID');
      params = params.append('value', this.criteria.param4);
    }

    this.httpClient.get( this.url_services  + '/getApp', {headers, params}).subscribe((resp: any) => {
      localStorage.setItem('search', JSON.stringify(resp.data));
      console.log('resp: ', resp);
      this.router.navigate(['search', 'results']);
    });
  }

  validParam1() {
    if (this.criteria.param1 !== '' && (this.criteria.param2 !== '' || this.criteria.param3 !== '' || this.criteria.param4 !== '')) {
      return false;
    }
    return true;
  }

  validParam2() {
    if (this.criteria.param2 !== '' && (this.criteria.param1 !== '' || this.criteria.param3 !== '' || this.criteria.param4 !== '')) {
      return false;
    }
    return true;
  }

  validParam3() {
    if (this.criteria.param3 !== '' && (this.criteria.param1 !== '' || this.criteria.param2 !== '' || this.criteria.param4 !== '')) {
      return false;
    }
    return true;
  }

  validParam4() {
    if (this.criteria.param4 !== '' && (this.criteria.param1 !== '' || this.criteria.param2 !== '' || this.criteria.param3 !== '')) {
      return false;
    }
    return true;
  }

  validParams() {
    if (this.criteria.param1 === '' && this.criteria.param2 === '' && this.criteria.param3 === '' && this.criteria.param4 === '') {
      return false;
    }
    return true;
  }

  disable() {
    if (this.validParam1() && this.validParam2() && this.validParam3() && this.validParam4() && this.validParams()) {
      return false;
    }
    return true;
  }

  hideAlert() {
    if ( this.validParam1() && this.validParam2() && this.validParam3() && this.validParam4()) {
      return false;
    }
    return true;
  }
}
