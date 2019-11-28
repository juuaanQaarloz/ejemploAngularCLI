import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {determinateEvenOrOdd} from '../../../core/utilities';
import {ColumnMap} from '../../../models/table-model/column-map';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit, OnChanges {
  @Input() record;
  @Input() index;
  @Input() columnMaps: ColumnMap[];
  constructor() { }

  ngOnInit() {
    // console.log('itemRow: ', this.record);
  }

  ngOnChanges() {
  }

  determinateEvenOrOdd(num: number) {
    return determinateEvenOrOdd(num);
  }
}
