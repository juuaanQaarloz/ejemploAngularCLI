import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../../models/content';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../core/services';
import {RowItem} from '../../models/table-model/row-item';
import {ColumnSettings} from '../../models/table-model/column-settings';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent implements OnInit {
  @Input() contentObj: Content;
  @Input() form: FormGroup;
  payLoad = '';
  show = true;
  rows: RowItem<any>[] = [
    {
      rowId: '1',
      rowName: 'row1',
      rowObject: {
        agentId: '01',
        name: 'Agente1',
        promotor: 'Promotor1',
        key: '12345678',
        participation: '50'
      }
    },
    {
      rowId: '2',
      rowName: 'row2',
      rowObject: {
        agentId: '02',
        name: 'Agente2',
        promotor: 'Promotor2',
        key: '9101112',
        participation: '50'
      }
    }
  ];

  columnsSettings: ColumnSettings[] = [
    {
      primaryKey: 'name',
      type: 'label',
      header: 'Nombre'
    },
    {
      primaryKey: 'promotor',
      type: 'label',
      header: 'Promotoría'
    },
    {
      primaryKey: 'key',
      type: 'label',
      header: 'Clave'
    },
    {
      primaryKey: 'participation',
      type: 'label',
      header: 'Participación'
    }
  ];

  constructor(public applicationService: ApplicationService) { }

  ngOnInit() {
    this.orderFields();
    if (this.contentObj.renderConditions) {
      const dependedFields = this.applicationService.getDependedFields(this.contentObj.renderConditions);
      this.show = this.applicationService.evaluateConditions(this.contentObj.renderConditions, this.form);
      this.contentObj.showContent = this.applicationService.evaluateConditions(this.contentObj.renderConditions, this.form);
      if (this.contentObj.contentType === 'table-diseases') {
        console.log('this.show: ', this.show);
        console.log('this.contentObj.showContent: ', this.contentObj.showContent);
        console.log('dependedFields: ', dependedFields);
      }
      dependedFields.forEach((dependedField) => {
        this.form.controls[dependedField].valueChanges.subscribe((value) => {
          console.log('value: ', value);
          this.show = this.applicationService.evaluateConditions(this.contentObj.renderConditions, this.form);
          this.contentObj.showContent = this.applicationService.evaluateConditions(this.contentObj.renderConditions, this.form);
          if (this.contentObj.contentType === 'table-diseases') {
            console.log('dependedField: ', dependedField);
            console.log('this.show: ', this.show);
            console.log('this.contentObj.showContent: ', this.contentObj.showContent);
          }
        });
      });
    }
  }

  getFormValue() {
    this.payLoad = JSON.stringify(this.form.value);
    // // console.log(this.form.value);
  }

  orderFields() {
    if (this.contentObj.fields) {
      this.contentObj.fields.sort((a, b) => a.orderAppearance - b.orderAppearance);
    }
  }
}
