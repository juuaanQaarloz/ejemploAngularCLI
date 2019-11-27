import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApplicationService} from '../../../core/services';
import {DialogConfig} from '../../dialog/dialog-config';
import {DialogRef} from '../../dialog/dialog-ref';
import {FormGroup} from '@angular/forms';
import {transformDate} from '../../../core/utilities';
import {ModalService} from '../../custom-modal';
import {Operation} from '../../../models';
import {FormatwoOperations} from '../../../core/mock/mock-operations';
import {NewCountryFields} from '../../../core/mock/formats/country';


@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.css']
})
export class NewCountryComponent implements OnInit {
  content = {
    id: 'content-2.19',
    idParent: 'step-7',
    parentType: 'Step',
    idHtml: 'app-content-form-2.19',
    fields: NewCountryFields,
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
    console.log('country-fields', this.fields);

    this.formGroup.controls.statCountry.valueChanges.subscribe((value) => {
      // this.formatwoType = value;
      console.log('statCountry');
      this.fields = this.getFields();
    });

    if (this.config.data !== null) {
      this.operationType = 'edit';
      this.setCountryValues();
    } else {
      this.operationType = 'add';
    }

  }

  addNewCountry() {
    console.log('addNewCountry-component ');
    console.log('formGroup value: ', this.formGroup.value);
    const newCountry = this.mapNewCountryData();
    const response = this.applicationService.addItem(newCountry, 'country');

    if (response.status) {
      this.closeDialog();
    } else {
      this.modalMessage = response.message;
      this.modalService.open(this.modalID);
    }
  }

  updateFormatwo() {
    const updatedBeneficiary = this.mapCountryData();
    // this.applicationService.updateItem(updatedBeneficiary, 'beneficiary');
    this.closeDialog();
  }

  executeOperation(delegateOperation: string) {
    console.log('delegateOperation: ', delegateOperation);
    if (delegateOperation === 'closeDialog') {
      this.closeDialog();
    } else if (delegateOperation === 'addNewBeneficiary') {
      this.addNewCountry();
    } else if (delegateOperation === 'updateBeneficiary') {
      this.updateFormatwo();
    } else if (delegateOperation === 'closeModal') {
      this.modalService.close(this.modalID);
    }
  }

  closeDialog() {
    this.dialog.close();
  }

  setCountryValues() {
    this.fields.forEach((field) => {
      let value;
      switch (field.name) {
        case 'name':
          value = this.config.data.item.statCountry.value;
          break;
        case 'taxCountryId':
          value = this.config.data.item.taxCountryId;
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

  mapNewCountryData() {
    const newCountryBase = {
      countryId: (this.applicationService.getLastItemId('country') + 1).toString(),
      statCountry: this.formGroup.controls.statCountry.value,
      taxCountryId: this.formGroup.controls.taxCountryId.value,
      participation: '1',
    };
    return newCountryBase;
  }
  closeModal(modalID: string) {
    this.modalService.close(modalID);
  }

  getFields() {
    let fields = [];
    NewCountryFields.forEach((field) => {
      fields.push(field);
    });
    console.log('getFields: ', fields);
    return fields;
  }

  mapCountryData() {
    const countryBase = {
      countryId: this.config.data.item.countryId,
      statCountry: this.formGroup.controls.statCountry.value,
      taxCountryId: this.formGroup.controls.taxCountryId.value,
      participation: '1',
    };
    return countryBase;
  }
}
