import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Input() columns: string[];
  @Input() items: [];
  constructor() { }

  ngOnInit() {
  }

  addNewItem() {
    console.log('onAddNewItem ...');
  }

}
