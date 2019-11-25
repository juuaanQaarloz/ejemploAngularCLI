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
          value = this.config.data.item.name;
          break;
        case 'formatwoFaLastName':
          value = this.config.data.item.fatherLastName;
          break;
        case 'formatwoMoLastName':
          value = this.config.data.item.motherLastName;
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
      name: this.formGroup.controls.formatwoName.value,
      fatherLastName: this.formGroup.controls.formatwoFaLastName.value,
      motherLastName: this.formGroup.controls.formatwoMoLastName.value,
      birthDate: transformDate(this.formGroup.controls.formatwoBirthDate.value, 'YYYY/MM/DD'),
      participation: '0',
    };
    return newFormatwoBase;
  }
  closeModal(modalID: string) {
    this.modalService.close(modalID);
  }

  fileChange(event) {
    console.log('event.target.files: ', event.target.files);
    const fileList = event.target.files;
    if (fileList.length > 0) {
      this.fileNameUpload = fileList[0].name;
    }
    /*let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData:FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new Headers();
      // In Angular 5, including the header Content-Type can invalidate your request
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers });
      this.http.post(`${this.apiEndPoint}`, formData, options)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
          data => console.log('success'),
          error => console.log(error)
        )
    }*/
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
      name: this.formGroup.controls.formatwoName.value,
      fatherLastName: this.formGroup.controls.formatwoFaLastName.value,
      motherLastName: this.formGroup.controls.formatwoMoLastName.value,
      birthDate: transformDate(this.formGroup.controls.formatwoBirthDate.value, 'YYYY/MM/DD'),
      participation: '0',
    };
    return formatwoBase;
  }
}
