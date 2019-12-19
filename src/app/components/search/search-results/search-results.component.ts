import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  columns: any;
  records: any;
  p: any;
  numItems: number = 10;

  constructor() { }

  ngOnInit() {
    this.columns = [
      { field: 'name', label: 'Nombre', align: 'text-left'},
      { field: 'lastname', label: 'Apellidos', align: 'text-left'},
      { field: 'rfc', label: 'RFC', align: 'text-left'},
      { field: 'email', label: 'Correo electrónico', align: 'text-left'},
      { field: 'phone', label: 'Teléfono', align: 'text-left'}
    ];

    this.records = [
      {id: '01', name: 'Name01', lastname: 'Max01', rfc: 'XXX590101X01', email: 'madmax01@metlife.com', phone: '01-12345678'},
      {id: '02', name: 'Name02', lastname: 'Max02', rfc: 'XXX590101X02', email: 'madmax02@metlife.com', phone: '02-12345678'},
      {id: '03', name: 'Name03', lastname: 'Max03', rfc: 'XXX590101X03', email: 'madmax03@metlife.com', phone: '03-12345678'},
      {id: '04', name: 'Name04', lastname: 'Max04', rfc: 'XXX590101X04', email: 'madmax04@metlife.com', phone: '04-12345678'},
      {id: '05', name: 'Name05', lastname: 'Max05', rfc: 'XXX590101X05', email: 'madmax05@metlife.com', phone: '05-12345678'},
      {id: '06', name: 'Name06', lastname: 'Max06', rfc: 'XXX590101X06', email: 'madmax06@metlife.com', phone: '06-12345678'},
      {id: '07', name: 'Name07', lastname: 'Max07', rfc: 'XXX590101X07', email: 'madmax07@metlife.com', phone: '07-12345678'},
      {id: '08', name: 'Name08', lastname: 'Max08', rfc: 'XXX590101X08', email: 'madmax08@metlife.com', phone: '08-12345678'},
      {id: '09', name: 'Name09', lastname: 'Max09', rfc: 'XXX590101X09', email: 'madmax09@metlife.com', phone: '09-12345678'},
      {id: '10', name: 'Name10', lastname: 'Max10', rfc: 'XXX590101X10', email: 'madmax10@metlife.com', phone: '10-12345678'},
      {id: '11', name: 'Name11', lastname: 'Max11', rfc: 'XXX590101X11', email: 'madmax11@metlife.com', phone: '11-12345678'},
      {id: '12', name: 'Name12', lastname: 'Max12', rfc: 'XXX590101X12', email: 'madmax12@metlife.com', phone: '12-12345678'},
      {id: '13', name: 'Name13', lastname: 'Max13', rfc: 'XXX590101X13', email: 'madmax13@metlife.com', phone: '13-12345678'},
      {id: '14', name: 'Name14', lastname: 'Max14', rfc: 'XXX590101X14', email: 'madmax14@metlife.com', phone: '14-12345678'},
      {id: '15', name: 'Name15', lastname: 'Max15', rfc: 'XXX590101X15', email: 'madmax15@metlife.com', phone: '15-12345678'},
      {id: '16', name: 'Name16', lastname: 'Max16', rfc: 'XXX590101X16', email: 'madmax16@metlife.com', phone: '16-12345678'},
      {id: '17', name: 'Name17', lastname: 'Max17', rfc: 'XXX590101X17', email: 'madmax17@metlife.com', phone: '17-12345678'},
      {id: '18', name: 'Name18', lastname: 'Max18', rfc: 'XXX590101X18', email: 'madmax18@metlife.com', phone: '18-12345678'},
      {id: '19', name: 'Name19', lastname: 'Max19', rfc: 'XXX590101X19', email: 'madmax19@metlife.com', phone: '19-12345678'},
      {id: '20', name: 'Name20', lastname: 'Max20', rfc: 'XXX590101X20', email: 'madmax20@metlife.com', phone: '20-12345678'},
      {id: '21', name: 'Name21', lastname: 'Max21', rfc: 'XXX590101X21', email: 'madmax21@metlife.com', phone: '21-12345678'},
      {id: '22', name: 'Name22', lastname: 'Max22', rfc: 'XXX590101X22', email: 'madmax22@metlife.com', phone: '22-12345678'},
      {id: '23', name: 'Name23', lastname: 'Max23', rfc: 'XXX590101X23', email: 'madmax23@metlife.com', phone: '23-12345678'},
      {id: '24', name: 'Name24', lastname: 'Max24', rfc: 'XXX590101X24', email: 'madmax24@metlife.com', phone: '24-12345678'},
      {id: '25', name: 'Name25', lastname: 'Max25', rfc: 'XXX590101X25', email: 'madmax25@metlife.com', phone: '25-12345678'},
      {id: '26', name: 'Name26', lastname: 'Max26', rfc: 'XXX590101X26', email: 'madmax26@metlife.com', phone: '26-12345678'},
      {id: '27', name: 'Name27', lastname: 'Max27', rfc: 'XXX590101X27', email: 'madmax27@metlife.com', phone: '27-12345678'},
      {id: '28', name: 'Name28', lastname: 'Max28', rfc: 'XXX590101X28', email: 'madmax28@metlife.com', phone: '28-12345678'},
      {id: '29', name: 'Name29', lastname: 'Max29', rfc: 'XXX590101X29', email: 'madmax29@metlife.com', phone: '29-12345678'},
      {id: '30', name: 'Name30', lastname: 'Max30', rfc: 'XXX590101X30', email: 'madmax30@metlife.com', phone: '30-12345678'},
      {id: '31', name: 'Name31', lastname: 'Max31', rfc: 'XXX590101X31', email: 'madmax31@metlife.com', phone: '31-12345678'},
      {id: '32', name: 'Name32', lastname: 'Max32', rfc: 'XXX590101X32', email: 'madmax32@metlife.com', phone: '32-12345678'},
      {id: '33', name: 'Name33', lastname: 'Max33', rfc: 'XXX590101X33', email: 'madmax33@metlife.com', phone: '33-12345678'},
      {id: '34', name: 'Name34', lastname: 'Max34', rfc: 'XXX590101X34', email: 'madmax34@metlife.com', phone: '34-12345678'}
    ]
  }

}
