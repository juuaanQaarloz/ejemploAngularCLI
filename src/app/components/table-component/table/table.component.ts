import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ColumnSettings} from '../../../models/table-model/column-settings';
import {determinateEvenOrOdd} from '../../../core/utilities';
import {ColumnMap} from '../../../models/table-model/column-map';
import {BehaviorSubject} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../../core/services';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, OnChanges {
  // from example
  @Input() rows: any[];
  @Input() header: string;
  @Input() settings: ColumnSettings[];
  @Input() fields;
  columnMaps: ColumnMap[];
  rowsBehavior = new BehaviorSubject(this.rows);
  formGroup: FormGroup;

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

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    // set the number of columns
    document.documentElement.style.setProperty('--columnNumber', this.calculateNumOfColumns());

    this.formGroup = this.applicationService.createNewFormGroup(this.fields);
  }

  determinateEvenOrOdd(num: number) {
    return determinateEvenOrOdd(num);
  }

  addRow() {
    console.log('addRow clicked...');
  }

  deleteRow(idItem: string, propertyName) {
    let currentRows;
    currentRows = currentRows.filter(item => item[propertyName] !== idItem);
    this.rowsBehavior.next(currentRows);
  }

  editRow(idItem: string) {

  }

  calculateNumOfColumns() {
    return (this.columnMaps.length + 1).toString();
  }
}
