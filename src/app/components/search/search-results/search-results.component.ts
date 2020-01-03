import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.columns = [
      { field: 'app_id', label: 'FUC', align: 'text-left'},
      { field: 'app_dcn_num', label: 'Folio DES', align: 'text-left'},
      { field: 'agnt_pmtr_cd', label: 'Promotoria', align: 'text-left'},
      { field: 'app_pol_num', label: 'Núm Póliza', align: 'text-left'},
      { field: 'party_natl_id', label: 'RFC', align: 'text-left'},
      { field: 'doc_stts', label: 'Status', align: 'text-left'},
      { field: 'rec_crt_ts', label: 'Fecha de solicitud', align: 'text-left'},
      { field: 'rec_updt_ts', label: 'Fecha de modificación', align: 'text-left'}
    ];

    this.records = JSON.parse(localStorage.getItem('search'));
  }

}
