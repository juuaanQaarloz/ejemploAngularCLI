import { ModalService } from './../../custom-modal/modal.service';
import { DialogRef } from './../../dialog/dialog-ref';
import { DialogConfig } from './../../dialog/dialog-config';
import { ApplicationService } from './../../../core/services/application.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NewPaymentFields } from 'src/app/core/mock/formats/payment';
import { FormatwoOperations } from 'src/app/core/mock/mock-operations';
import { Operation } from 'src/app/models';
import {FORM_MSG_ERROR} from '../../../core/mock/errors/mock-erros-datos-plan';

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.css']
})
export class NewPaymentComponent implements OnInit {
  content = {
    id: 'content-2.19',
    idParent: 'step-7',
    parentType: 'Step',
    idHtml: 'app-content-form-2.19',
    fields: NewPaymentFields,
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
  modalMessage = 'La suma de las participaciones de los beneficiarios excede el 100%';
  fileNameUpload = 'Ningún archivo seleccionado';
  fields = [];
  showFormError = false;
  formMsgError = FORM_MSG_ERROR;

  constructor(private applicationService: ApplicationService,
              public config: DialogConfig,
              public dialog: DialogRef,
              private modalService: ModalService ) {
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.formGroup = this.applicationService.createNewFormGroup(this.content.fields);
    console.log('formGroup', this.formGroup);
    this.fields = this.getFields();
    console.log('payment-fields', this.fields);

    this.formGroup.controls.txtBank.valueChanges.subscribe((value) => {
      // this.formatwoType = value;
      console.log('txtBank');
      this.fields = this.getFields();
    });

    if (this.config.data !== null) {
      this.operationType = 'edit';
      this.setPaymentValues();
    } else {
      this.operationType = 'add';
    }
  }

  addNewPayment() {
    console.log(' addNewPayment ---> ');
    const formStatus = this.getFormStatus();
    if (formStatus === 'VALID') {
      const newPayment = this.mapNewPaymentData();
      const response = this.applicationService.addItem(newPayment, 'payment');

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

  updateFormatwo() {
    const formStatus = this.getFormStatus();
    if (formStatus === 'VALID') {
      const updatedBeneficiary = this.mapPaymentData();
      // this.applicationService.updateItem(updatedBeneficiary, 'beneficiary');
      this.closeDialog();
    } else {
      this.showFormError = true;
    }
  }

  executeOperation(delegateOperation: string) {
    console.log('delegateOperation: ', delegateOperation);
    if (delegateOperation === 'closeDialog') {
      this.closeDialog();
    } else if (delegateOperation === 'addNewBeneficiary') {
      this.addNewPayment();
    } else if (delegateOperation === 'updateBeneficiary') {
      this.updateFormatwo();
    } else if (delegateOperation === 'closeModal') {
      this.modalService.close(this.modalID);
    }
  }

  closeDialog() {
    this.dialog.close();
  }

  setPaymentValues() {
    this.fields.forEach((field) => {
      let value;
      switch (field.name) {
        case 'bank':
          value = this.config.data.item.txtBank.value;
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

  mapNewPaymentData() {
    const newPaymentBase = {
      paymentId: (this.applicationService.getLastItemId('payment') + 1).toString(),
      txtBank: this.formGroup.controls.txtBank.value,
      txtClabe: this.formGroup.controls.txtClabe.value,
      selectCard: this.formGroup.controls.selectCard.value,
    };
    return newPaymentBase;
  }

  closeModal(modalID: string) {
    this.modalService.close(modalID);
  }

  getFields() {
    const fields = [];
    NewPaymentFields.forEach((field) => {
      fields.push(field);
    });
    console.log('getFields: ', fields);
    return fields;
  }

  mapPaymentData() {
    const paymentBase = {
      paymentId: this.config.data.item.paymentId,
      txtBank: this.formGroup.controls.txtBank.value,
    };
    return paymentBase;
  }

  getFormStatus() {
    return this.formGroup.status;
  }
}
