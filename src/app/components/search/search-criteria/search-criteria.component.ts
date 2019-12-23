import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  criteria = {
    param1: '',
    param2: '',
    param3: '',
    param4: ''
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  search(){
    this.router.navigate(['search','results']);
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
