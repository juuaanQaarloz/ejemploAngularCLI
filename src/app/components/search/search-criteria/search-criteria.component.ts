import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';

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
  metrolename:string;
  metroluid:string;

  criteria = {
    param1: '',
    param2: '',
    param3: '',
    param4: ''
  }

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("localStorage");
    console.log(localStorage.getItem("metrolename"));
    this.metrolename = localStorage.getItem("metrolename");
    this.metroluid = localStorage.getItem("metroluid")
  }

  search() {
    //console.log("metrolename: "+this.metrolename);
    //console.log("metroluid: "+this.metroluid);
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'metrolename': this.metrolename,
      'metuserid': this.metroluid
    });

    let params = new HttpParams();
    params = params.append("agentId","");
    params = params.append("promotoryId", "");

    if(this.criteria.param1!='' ){
      params = params.append('fiel', 'APP_DCN_NUM');
      params = params.append('value', this.criteria.param1);
    }
    if(this.criteria.param2!='' ){
      params = params.append('fiel', 'APP_ID');
      params = params.append('value', this.criteria.param2);
    }
    if(this.criteria.param3!='' ){
      params = params.append('fiel', 'APP_POL_NUM');
      params = params.append('value', this.criteria.param3);
    }
    if(this.criteria.param4!='' ){
      params = params.append('fiel', 'PARTY_NATL_ID');
      params = params.append('value', this.criteria.param4);
    }

    this.httpClient.get( AppConstants.URL_SERVICE_DEV  + '/application', {headers, params}).subscribe((resp:any) => {
      localStorage.setItem('search', JSON.stringify(resp.data));
      console.log('resp: ', resp);
      this.router.navigate(['search','results']);
    });
  }

  validParam1(){
    if(this.criteria.param1!='' && (this.criteria.param2!='' || this.criteria.param3!='' || this.criteria.param4!='')){
      return false;
    }
    return true;
  }

  validParam2(){
    if(this.criteria.param2!='' && (this.criteria.param1!='' || this.criteria.param3!='' || this.criteria.param4!='')){
      return false;
    }
    return true;
  }

  validParam3(){
    if(this.criteria.param3!='' && (this.criteria.param1!='' || this.criteria.param2!='' || this.criteria.param4!='')){
      return false;
    }
    return true;
  }

  validParam4(){
    if(this.criteria.param4!='' && (this.criteria.param1!='' || this.criteria.param2!='' || this.criteria.param3!='')){
      return false;
    }
    return true;
  }

  validParams(){
    if(this.criteria.param1=='' && this.criteria.param2=='' && this.criteria.param3=='' && this.criteria.param4==''){
      return false;
    }
    return true;
  }

  disable(){
    if( this.validParam1() && this.validParam2() && this.validParam3() && this.validParam4() && this.validParams() ){
      return false;
    }
    return true;
  }

  hideAlert(){
    if( this.validParam1() && this.validParam2() && this.validParam3() && this.validParam4() ){
      return false;
    }
    return true;
  }
}
