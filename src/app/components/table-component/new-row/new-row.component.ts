import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../../core/services';
import {Content, Field, Operation} from '../../../models';
import {DialogConfig} from '../../dialog/dialog-config';
import {DialogRef} from '../../dialog/dialog-ref';
import {OKOPT, RowOperations} from '../../../core/mock/mock-operations';
import {ModalService} from '../../custom-modal';

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

      this.formGroup = this.appService.createNewFormGroup(this.content.fields);
      this.foundedOperations = this.getOperations();

      if (this.item !== undefined) {
        // edit mode
        // setFieldsValues
        this.setFieldsItemValues();
      }
    }
  }

  executeOperation(delegateOperation: string) {
    if (delegateOperation === 'closeDialog') {
      this.closeDialog();
    } else if (delegateOperation === 'addNewItem') {
      this.addNewItem();
    } else if (delegateOperation === 'updateItem') {
      this.updateItem();
    } /*else if (delegateOperation === 'closeModal') {
      this.modalService.close(this.modalID);
    }*/
  }

  closeDialog() {
    this.dialog.close();
  }

  addNewItem() {
    console.log('on addNewItem...');
    const newItem = this.mapNewItemData();
    const response = this.appService.addItem(newItem, this.itemType);

    if (response.status) {
      this.closeDialog();
    } else {
      this.modalMessage = response.message;
      this.modalService.open(this.modalID);
    }
  }

  mapNewItemData() {
    let newMappedItem = {};

    if (this.itemType === 'disease') {
      newMappedItem = {
        idDisease: (this.appService.getLastItemId(this.itemType) + 1).toString(),
        name: this.formGroup.controls.describeDiseases.value,
        diagnosticDate: this.formGroup.controls.diagnosticDate.value,
        duration: this.formGroup.controls.durationDiseases.value,
        actualCondition: this.formGroup.controls.actualMedicalCondition.value,
        hasQuestionnaire: false
      };

    } else if (this.itemType === 'sport') {
      newMappedItem = {
        idSportActivity: (this.appService.getLastItemId(this.itemType) + 1).toString(),
        name: this.formGroup.controls.extremeSports.value,
        periodicity: this.formGroup.controls.periodicity.value,
        description: this.formGroup.controls.otherActivity.value,
      };

    }
    return newMappedItem;
  }

  updateItem() {
    const updatedItem = this.mapItemData();
    this.appService.updateItem(updatedItem, this.itemType);
    this.closeDialog();
  }

  mapItemData() {
    let newMappedItem = {};

    if (this.itemType === 'disease') {
      newMappedItem = {
        idDisease: this.item.idDisease,
        name: this.formGroup.controls.describeDiseases.value,
        diagnosticDate: this.formGroup.controls.diagnosticDate.value,
        duration: this.formGroup.controls.durationDiseases.value,
        actualCondition: this.formGroup.controls.actualMedicalCondition.value,
        hasQuestionnaire: false
      };

    } else if (this.itemType === 'sport') {
      newMappedItem = {
        idSportActivity: this.item.idSportActivity,
        name: this.formGroup.controls.extremeSports.value,
        periodicity: this.formGroup.controls.periodicity.value,
        description: this.formGroup.controls.otherActivity.value,
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
    console.log('foundedOperations: ', foundedOperations);
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

  /*setFieldsItemValues() {
    this.content.fields.forEach((field) => {
      let value;
      switch (field.name) {
        case 'agentName':
          value = this.config.data.item.name;
          break;
        case 'agentPromotor':
          value = this.config.data.item.promotor;
          break;
        case 'agentKey':
          value = this.config.data.item.key;
          break;
        case 'agentParticipation':
          value = this.config.data.item.participation;
          break;
      }
      this.formGroup.controls[field.name].setValue(value);
    });
  }*/

}
