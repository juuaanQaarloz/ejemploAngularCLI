import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ColumnSettings} from '../../../models/table-model/column-settings';
import {determinateEvenOrOdd} from '../../../core/utilities';
import {ColumnMap} from '../../../models/table-model/column-map';
import {BehaviorSubject} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../../core/services';
import {DialogService} from '../../dialog/dialog.service';
import {NewBeneficiaryComponent} from '../../beneficiaries/new-beneficiary/new-beneficiary.component';
import {NewRowComponent} from '../new-row/new-row.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, OnChanges {
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
        .map(key => {
          return new ColumnMap({primaryKey: key});
        });
    }
  }

  constructor(private applicationService: ApplicationService,
              public dialogService: DialogService) {
  }

  ngOnInit() {
    // set the number of columns
    document.documentElement.style.setProperty('--columnNumber', this.calculateNumOfColumns());

    this.formGroup = this.applicationService.createNewFormGroup(this.fields);
  }

  determinateEvenOrOdd(num: number) {
    return determinateEvenOrOdd(num);
  }

  addRow() {
    // console.log('addRow clicked...');
    let ref;
    ref = this.dialogService.open(NewRowComponent,
      {data: {
        typeOperation: 'addRow',
        fields: this.fields,
        drawerTitle: 'Enfermedad(s)'
      }});
    ref.afterClosed.subscribe((result) => {
      // // console.log('dialog closed FROM BENEFICIARY TABLE, result: ', result);
    });
  }

  calculateNumOfColumns() {
    return (this.columnMaps.length + 1).toString();
  }

  setFieldsIds() {
    let i = 0;
    this.fields.forEach((field) => {
      field.name = field.name + i;
      i++;
    });
  }
}
