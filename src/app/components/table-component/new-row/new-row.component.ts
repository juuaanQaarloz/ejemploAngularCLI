import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../../core/services';
import {Content, Field, Operation} from '../../../models';
import {DialogConfig} from '../../dialog/dialog-config';
import {DialogRef} from '../../dialog/dialog-ref';
import {RowOperations} from '../../../core/mock/mock-operations';

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

  constructor(private appService: ApplicationService,
              public config: DialogConfig,
              public dialog: DialogRef) {
  }

  ngOnInit() {
    if (this.config.data !== null) {
      this.content = this.config.data.content;
      this.drawerTitle = this.config.data.drawerTitle;
      this.operations = this.config.data.operations;
      this.itemType = this.config.data.itemType;

      this.formGroup = this.appService.createNewFormGroup(this.content.fields);
      this.foundedOperations = this.getOperations();

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
        agentId: (this.appService.getLastItemId(this.itemType) + 1).toString(),
        name: this.formGroup.controls.agentName.value,
        promotor: this.formGroup.controls.agentPromotor.value,
        key: this.formGroup.controls.agentKey.value,
        participation: this.formGroup.controls.agentParticipation.value
      };

    }
    return newMappedItem;
  }

  updateItem() {
    console.log('on updateItem');
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

}
