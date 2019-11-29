import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ColumnSettings} from '../../../models/table-model/column-settings';
import {determinateEvenOrOdd} from '../../../core/utilities';
import {ColumnMap} from '../../../models/table-model/column-map';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  /*@Input() header: string;
  @Input() columns: [];
  @Input() rows: Array<RowItem<any>>;*/

  // from example
  @Input() rows: any[];
  @Input() header: string;
  @Input() settings: ColumnSettings[];
  columnMaps: ColumnMap[];

  ngOnChanges() {
    if (this.settings) { // when settings is provided
      this.columnMaps = this.settings
        .map(col => new ColumnMap(col));
    } else { // when settings is no provided
      this.columnMaps = Object.keys(this.rows[0])
        .map( key => {
          return new ColumnMap( { primaryKey: key });
        });
    }
  }

  constructor() { }

  ngOnInit() {
    // set the number of columns
    document.documentElement.style.setProperty('--columnNumber', this.columnMaps.length.toString());
  }

  determinateEvenOrOdd(num: number) {
    return determinateEvenOrOdd(num);
  }
}
