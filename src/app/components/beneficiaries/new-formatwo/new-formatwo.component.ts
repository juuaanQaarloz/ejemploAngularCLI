import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApplicationService} from '../../../core/services';
import {DialogConfig} from '../../dialog/dialog-config';
import {DialogRef} from '../../dialog/dialog-ref';
import {FormGroup} from '@angular/forms';
import {transformDate} from '../../../core/utilities';
import {ModalService} from '../../custom-modal';
import {Operation} from '../../../models';
import {FormatwoOperations} from '../../../core/mock/mock-operations';
import {NewFormatwoFields} from '../../../core/mock/formats/formatwo';


@Component({
  selector: 'app-new-formatwo',
  templateUrl: './new-formatwo.component.html',
  styleUrls: ['./new-formatwo.component.css']
})
export class NewFormatwoComponent implements OnInit {
  content = {
    id: 'content-2.19',
    idParent: 'step-7',
    parentType: 'Step',
    idHtml: 'app-content-form-2.19',
    fields: NewFormatwoFields,
    operations: FormatwoOperations,
    showContent: true,
    styleClass: 'modal-type',
    renderConditions: '',
    contentType: 'looseFields'
  };

  okOperation: Operation = {
    id: 'opt-1',
    idHtml: 'btnOK',
    name: 'OK',
    label: 'OK',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'closeModal',
    renderConditions: '',
    enableConditions: ''
  };

  formGroup: FormGroup;
  operationType: string;
  modalID = 'modal-warning';
  modalMessage = 'La suma de las participaciones de los formatos excede el 100%';

  fields = [];

  constructor(private applicationService: ApplicationService,
              public config: DialogConfig,
              public dialog: DialogRef,
              private modalService: ModalService
  ) {
  }

  ngOnInit() {
    this.formGroup = this.applicationService.createNewFormGroup(this.content.fields);
    console.log('formGroup', this.formGroup);
    this.fields = this.getFields();

    this.formGroup.controls.formatwoType.valueChanges.subscribe((value) => {
      // this.formatwoType = value;
      console.log('formatwoType');
      this.fields = this.getFields();
    });

    if (this.config.data !== null) {
      this.operationType = 'edit';
      this.setFormatwoValues();
    } else {
      this.operationType = 'add';
    }

  }

  addNewFormatwo() {
    console.log('addNewFormatwo-component ');
    console.log('formGroup value: ', this.formGroup.value);
    const newFormatwo = this.mapNewFormatwoData();
    const response = this.applicationService.addItem(newFormatwo, 'formatwo');

    if (response.status) {
      this.closeDialog();
    } else {
      this.modalMessage = response.message;
      this.modalService.open(this.modalID);
    }
  }

  updateFormatwo() {
    const updatedBeneficiary = this.mapFormatwoData();
    // this.applicationService.updateItem(updatedBeneficiary, 'beneficiary');
    this.closeDialog();
  }

  executeOperation(delegateOperation: string) {
    console.log('delegateOperation: ', delegateOperation);
    if (delegateOperation === 'closeDialog') {
      this.closeDialog();
    } else if (delegateOperation === 'addNewBeneficiary') {
       this.addNewFormatwo();
    } else if (delegateOperation === 'updateBeneficiary') {
       this.updateFormatwo();
    } else if (delegateOperation === 'closeModal') {
       this.modalService.close(this.modalID);
    }
  }

  closeDialog() {
    this.dialog.close();
  }

  setFormatwoValues() {
    this.fields.forEach((field) => {
      let value;
      switch (field.name) {
        case 'formatwoType':
          value = this.config.data.item.formatwoType;
          break;
         case 'formatwoName':
          value = this.config.data.item.formatwoName;
          break;
        case 'formatwoFatherLastName':
          value = this.config.data.item.formatwoFatherLastName;
          break;
        case 'formatwoMotherLastName':
          value = this.config.data.item.formatwoMotherLastName;
          break;
         /*
        case 'formatwoBirthDate':
          value = this.config.data.beneficiary.birthDate;
          break; */
      }
      this.formGroup.controls[field.name].setValue(value);
    });
    console.log('form values: ');
    console.log(this.formGroup.value);
  }

  mapNewFormatwoData() {
    const newFormatwoBase = {
      formatwoId: (this.applicationService.getLastItemId('formatwo') + 1).toString(),
      formatwoType: this.formGroup.controls.formatwoType.value,
      formatwoName: this.formGroup.controls.formatwoName.value,
      formatwoFatherLastName: this.formGroup.controls.formatwoFatherLastName.value,
      formatwoMotherLastName: this.formGroup.controls.formatwoMotherLastName.value,
      formatwoBirthDate: transformDate(this.formGroup.controls.formatwoBirthDate.value, 'YYYY/MM/DD'),
      participation: '1',
    };
    return newFormatwoBase;
  }
  closeModal(modalID: string) {
    this.modalService.close(modalID);
  }

  getFields() {
    let fields = [];
    NewFormatwoFields.forEach((field) => {
      fields.push(field);
    });
    console.log('getFields: ', fields);
    return fields;
  }

  mapFormatwoData() {
    const formatwoBase = {
      formatwoId: this.config.data.item.formatwoId,
      formatwoType: this.formGroup.controls.formatwoType.value,
      formatwoName: this.formGroup.controls.formatwoName.value,
      formatwoFatherLastName: this.formGroup.controls.formatwoFatherLastName.value,
      formatwoMotherLastName: this.formGroup.controls.formatwoMotherLastName.value,
      formatwoBirthDate: transformDate(this.formGroup.controls.formatwoBirthDate.value, 'YYYY/MM/DD'),
      participation: '1',
    };
    return formatwoBase;
  }
}
