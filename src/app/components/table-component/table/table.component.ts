import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() header: string;
  @Input() rows: [];

  constructor() { }

  ngOnInit() {
    this.rows.forEach((itemRow) => {
      console.log('itemRow: ', itemRow);
    });
    // set the number of columns
    document.documentElement.style.setProperty('--columnNumber', this.rows.length.toString());
  }

}
