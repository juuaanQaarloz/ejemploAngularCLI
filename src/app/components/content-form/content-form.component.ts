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
  contentTypeId;
  rows: RowItem<any>[] = [
    {
      rowId: '1',
      rowName: 'row1',
      rowObject: {
        idDisease: 'disease1',
        name: 'Disease 1',
        diagnosticDate: '1990/01/01',
        duration: 'Duration 1',
        actualCondition: 'Actual physical condition 1',
        hasQuestionnaire: false,
      }
    },
    {
      rowId: '2',
      rowName: 'row2',
      rowObject: {
        idDisease: 'disease2',
        name: 'Disease 2',
        diagnosticDate: '1990/01/01',
        duration: 'Duration 2',
        actualCondition: 'Actual physical condition 2',
        hasQuestionnaire: false,
      }
    }
  ];

  columnsSettingsDiseases: ColumnSettings[] = [
    {
      primaryKey: 'name',
      format: 'field',
      header: 'Nombre de las enfermedades, lesiones, estudios o tratamientos'
    },
    {
      primaryKey: 'diagnosticDate',
      format: 'field',
      header: 'Fecha en que las sufriste o se te practicaron'
    },
    {
      primaryKey: 'duration',
      format: 'field',
      header: 'Duración'
    },
    {
      primaryKey: 'actualCondition',
      format: 'field',
      header: 'Condición física actual'
    }
  ];

  columnsSettingsSports: ColumnSettings[] = [
    {
      primaryKey: 'name',
      format: 'field',
      header: 'Deporte / Actividad'
    },
    {
      primaryKey: 'periodicity',
      format: 'field',
      header: 'Frecuencia'
    },
    {
      primaryKey: 'description',
      format: 'field',
      header: 'Describir otra actividad'
    }
  ];

  constructor(public applicationService: ApplicationService) { }

  ngOnInit() {
    this.orderFields();
    if (this.contentObj.renderConditions) {
      const dependedFields = this.applicationService.getDependedFields(this.contentObj.renderConditions);
      this.show = this.applicationService.evaluateConditions(this.contentObj.renderConditions, this.form);
      this.contentObj.showContent = this.applicationService.evaluateConditions(this.contentObj.renderConditions, this.form);

      dependedFields.forEach((dependedField) => {
        this.form.controls[dependedField].valueChanges.subscribe((value) => {
          this.show = this.applicationService.evaluateConditions(this.contentObj.renderConditions, this.form);
          this.contentObj.showContent = this.applicationService.evaluateConditions(this.contentObj.renderConditions, this.form);
        });
      });
    }

    if (this.contentObj.contentType) {
      this.contentTypeId = this.getContentTypeId();
    }
  }

  getContentTypeId() {
   const contentTypeArray = this.contentObj.contentType.split(',');

   if (contentTypeArray.length > 1) {
     this.contentObj.contentType = contentTypeArray[0];
     return contentTypeArray[1];
   } else {
     return null;
   }
  }

  getFormValue() {
    this.payLoad = JSON.stringify(this.form.value);
    // console.log(this.form.value);
  }

  orderFields() {
    if (this.contentObj.fields) {
      this.contentObj.fields.sort((a, b) => a.orderAppearance - b.orderAppearance);
    }
  }
}
