import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../../core/services';
import {Content, Field, Operation} from '../../../models';
import {DialogConfig} from '../../dialog/dialog-config';
import {DialogRef} from '../../dialog/dialog-ref';
import {OKOPT, RowOperations} from '../../../core/mock/mock-operations';
import {ModalService} from '../../custom-modal';
import {medicalFieldsDialog} from '../../../core/mock/basic-questionnaires/medical';
import {sportsFieldsDialog} from '../../../core/mock/basic-questionnaires/sports-aviation-hobbies';
import {FORM_MSG_ERROR} from '../../../core/mock/errors/mock-erros-datos-plan';
import {transformDate} from '../../../core/utilities';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-new-row',
  templateUrl: './new-row.component.html',
  styleUrls: ['./new-row.component.css']
})
export class NewRowComponent implements OnInit {
  content: Content;
  drawerTitle: string;
  formGroup: FormGroup;
  operations;
  foundedOperations = [];
  itemType;
  modalID = 'modal-warningNR';
  modalMessage = '';
  okOperation = OKOPT;
  item;
  showFormError = false;
  formMsgError = FORM_MSG_ERROR;
  contentTypeId: string;

  constructor(private appService: ApplicationService,
              public config: DialogConfig,
              public dialog: DialogRef,
              public modalService: ModalService) {
  }

  ngOnInit() {
    if (this.config.data !== null) {
      this.content = this.config.data.content;
      this.drawerTitle = this.config.data.drawerTitle;
      this.operations = this.config.data.operations;
      this.itemType = this.config.data.itemType;
      this.item = this.config.data.item;
      this.contentTypeId = this.config.data.contentTypeId;


      this.setContentFields();
      this.formGroup = this.appService.createNewFormGroup(this.content.fields);
      this.foundedOperations = this.getOperations();

      if (this.item !== undefined) {
        // edit mode
        // setFieldsValues
        this.setFieldsItemValues();
      }
    }
  }

  setContentFields() {
    if (this.itemType === 'disease') {
      this.content.fields = medicalFieldsDialog;
    } else if (this.itemType === 'sport') {
      this.content.fields = sportsFieldsDialog;
    }
  }

  executeOperation(delegateOperation: string) {
    if (delegateOperation === 'closeDialog') {
      this.closeDialog();
    } else if (delegateOperation === 'addNewItem') {
      Object.keys(this.formGroup.controls).forEach((formControl) => {
        if ( formControl === 'extremeSportsD' ) {
          console.log('Va a validar los deportes');
          this.appService.getCatalogById('sports', 'IPRE').subscribe(result => {
            if (this.validateSport(result) === 'INVALID' ) {
              this.addNewItem('INVALID');
            } else {
              this.addNewItem();
            }
          });
        } else if ( formControl === 'describeDiseasesD' ) {
          console.log('Va a validar las enfermedades');
          this.appService.getCatalogById('diseases', 'IPRE').subscribe((results) => {
            if (this.validateDesease(results) === 'INVALID' ) {
              this.addNewItem('INVALID');
            } else {
              this.addNewItem();
            }
          });
        }
      });
    } else if (delegateOperation === 'updateItem') {
      Object.keys(this.formGroup.controls).forEach((formControl) => {
        if ( formControl === 'extremeSportsD' ) {
          console.log('Va a validar los deportes');
          this.appService.getCatalogById('sports', 'IPRE').subscribe(result => {
            if (this.validateSport(result) === 'INVALID' ) {
              this.updateItem('INVALID');
            } else {
              this.updateItem();
            }
          });
        } else if ( formControl === 'describeDiseasesD' ) {
          console.log('Va a validar las enfermedades');
          this.appService.getCatalogById('diseases', 'IPRE').subscribe((results) => {
            if (this.validateDesease(results) === 'INVALID' ) {
              this.updateItem('INVALID');
            } else {
              this.updateItem();
            }
          });
        }
      });
    } /*else if (delegateOperation === 'closeModal') {
      this.modalService.close(this.modalID);
    }*/
  }

  closeDialog() {
    this.dialog.close();
  }

  validateSport(list) {
    const listToCompare = list;
    let formStatus = 'VALID';
    let contador = 0;
    let valueExtremeSport;
    Object.keys(this.formGroup.controls).forEach((formControl) => {
      if ( formControl === 'extremeSportsD' ) {
        valueExtremeSport = this.formGroup.controls[formControl].value;
        console.log('-----Value sport-----');
        console.log(valueExtremeSport);
        console.log('-----Value sport-----');
        if ( valueExtremeSport ) {
          const index = listToCompare.findIndex((i) => i['alias'] === valueExtremeSport);
          console.log('indexSport:', index);
          if ( index !== -1 ) {
            formStatus = 'VALID';
          } else {
            formStatus = 'INVALID';
          }
          console.log(formStatus, 'if');
          console.log(formStatus, 'if');
          console.log(formStatus, 'if');
        } else {
          formStatus = 'INVALID';
        }
      }
      if ( formControl === 'periodicityD' ) {
        const value = this.formGroup.controls[formControl].value;
        if ( !value ) {
          contador++;
        }
      }
      if ( formControl === 'otherActivityD' && valueExtremeSport === 'OTRO') {
        const value = this.formGroup.controls[formControl].value;
        if ( !value ) {
          contador++;
        }
      }
      console.log('Contador: ', contador);
      if ( contador > 0 ) {
        formStatus = 'INVALID';
      }
    });
    console.log('formStatusSports: ', formStatus);
    return formStatus;
  }

  validateDesease(list) {
    const listToCompare = list;
    let formStatus = 'VALID';
    Object.keys(this.formGroup.controls).forEach((formControl) => {
      if ( formControl === 'describeDiseasesD' ) {
        const value = this.formGroup.controls[formControl].value;
        console.log('-----Value-----');
        console.log(value);
        console.log('-----Value-----');
        if ( value ) {
          const index = listToCompare.findIndex((i) => i['alias'] === value);
          if ( index !== -1 ) {
            formStatus = 'VALID';
          } else {
            formStatus = 'INVALID';
          }
          console.log(formStatus, 'if');
          console.log(formStatus, 'if');
          console.log(formStatus, 'if');
        } else {
          formStatus = 'INVALID';
        }
      }
    });
    return formStatus;
  }

  addNewItem(statusValidateCatalog?) {
    let formStatus = this.getFormStatus();
    console.log(formStatus);
    console.log(formStatus);
    console.log(statusValidateCatalog);
    console.log(statusValidateCatalog);
    if ( statusValidateCatalog === 'INVALID' ) {
      formStatus = statusValidateCatalog;
    }
    if (formStatus === 'VALID') {
      const newItem = this.mapNewItemData();
      const response = this.appService.addItem(newItem, this.itemType, this.contentTypeId);
      if (response.status) {
        this.closeDialog();
      } else {
        this.modalMessage = response.message;
        this.modalService.open(this.modalID);
      }
    } else {
      this.showFormError = true;
    }
  }

  mapNewItemData() {
    let newMappedItem = {};

    console.log('contentTypeId: ', this.contentTypeId);

    if (this.itemType === 'disease') {
      newMappedItem = {
        idDisease: (this.appService.getLastItemId(this.itemType, this.contentTypeId) + 1).toString(),
        name: this.formGroup.controls.describeDiseasesD.value,
        diagnosticDate: transformDate(this.formGroup.controls.diagnosticDateD.value, 'YYYY/MM/DD'),
        duration: this.formGroup.controls.durationDiseasesD.value,
        actualCondition: this.formGroup.controls.actualMedicalConditionD.value,
        hasQuestionnaire: false,
        fromTable: this.contentTypeId
      };

    } else if (this.itemType === 'sport') {
      newMappedItem = {
        idSportActivity: (this.appService.getLastItemId(this.itemType) + 1).toString(),
        name: this.formGroup.controls.extremeSportsD.value,
        periodicity: this.formGroup.controls.periodicityD.value,
        description: this.formGroup.controls.otherActivityD.value,
      };

    }
    return newMappedItem;
  }

  updateItem(statusValidateCatalog?) {
    let formStatus = this.getFormStatus();
    console.log(formStatus);
    console.log(formStatus);
    console.log(statusValidateCatalog);
    console.log(statusValidateCatalog);
    if ( statusValidateCatalog === 'INVALID' ) {
      formStatus = statusValidateCatalog;
    }
    if (formStatus === 'VALID') {
      const updatedItem = this.mapItemData();
      console.log('this.contentId: ', this.contentTypeId);
      if (this.contentTypeId) {
        this.appService.updateItem(updatedItem, this.itemType, this.contentTypeId);
      } else {
        this.appService.updateItem(updatedItem, this.itemType);
      }
      this.closeDialog();
    } else {
      this.showFormError = true;
    }
  }

  mapItemData() {
    let newMappedItem = {};

    if (this.itemType === 'disease') {
      newMappedItem = {
        idDisease: this.item.idDisease,
        name: this.formGroup.controls.describeDiseasesD.value,
        diagnosticDate: transformDate(this.formGroup.controls.diagnosticDateD.value, 'YYYY/MM/DD'),
        duration: this.formGroup.controls.durationDiseasesD.value,
        actualCondition: this.formGroup.controls.actualMedicalConditionD.value,
        hasQuestionnaire: false
      };

    } else if (this.itemType === 'sport') {
      newMappedItem = {
        idSportActivity: this.item.idSportActivity,
        name: this.formGroup.controls.extremeSportsD.value,
        periodicity: this.formGroup.controls.periodicityD.value,
        description: this.formGroup.controls.otherActivityD.value,
      };

    }
    return newMappedItem;
  }

  getOperations(): Operation[] {
    let foundedOperations = [];
    this.operations.forEach((optName) => {
      const filterResult = RowOperations.filter(o => o.name === optName)[0];
      if (filterResult) {
        foundedOperations.push(filterResult);
      }
    });
    // console.log('foundedOperations: ', foundedOperations);
    return foundedOperations;
  }

  closeModal(modalID: string) {
    this.modalService.close(modalID);
  }

  setFieldsItemValues() {
    const itemAttrNames = [];
    Object.keys(this.item).forEach((key, index) => {
      if (index !== 0) { // skip the id attr to coindice with the fields
        itemAttrNames.push(key);
      }
    });

    this.content.fields.forEach((field, index) => {
      this.formGroup.controls[field.name].setValue(this.item[itemAttrNames[index]]);
    });
  }

  getFormStatus() {
    console.log('this.appService.validateFieldArray(this.content.fields): ', this.appService.validateFieldArray(this.content.fields, this.formGroup));
    return this.formGroup.status;
  }

}
