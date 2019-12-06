import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {determinateEvenOrOdd} from '../../../core/utilities';
import {ColumnMap} from '../../../models/table-model/column-map';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit, OnChanges {
  @Input() row;
  @Input() index;
  @Input() columnMaps: ColumnMap[];
  @Input() fields?;
  @Input() formGroup?;

  constructor() {
  }

  ngOnInit() {
    console.log('itemRow: ', this.row);
    console.log('columnMaps: ', this.columnMaps);
    console.log('index: ', this.index);
    if (this.fields) {
      console.log('from TableRowComponent fieldObj: ', this.fields);
    }
  }

  ngOnChanges() {
  }

  determinateEvenOrOdd(num: number) {
    return determinateEvenOrOdd(num);
  }
}
