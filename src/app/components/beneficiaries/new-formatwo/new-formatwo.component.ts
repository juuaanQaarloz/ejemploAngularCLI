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
// import {BeneficiariesOperations} from '../../../core/mock/mock-operations';
// import {BeneficiaryFieldsP} from '../../../core/mock/mock-beneficiaries/phy-beneficiary';
// import {BeneficiaryFieldsM} from '../../../core/mock/mock-beneficiaries/mor-beneficiary';
// import {BeneficiaryFieldsF} from '../../../core/mock/mock-beneficiaries/fid-beneficiary';

@Component({
  selector: 'app-new-formatwo',
  templateUrl: './new-formatwo.component.html',
  styleUrls: ['./new-formatwo.component.css']
})
export class NewFormatwoComponent implements OnInit, AfterViewInit {
  content = {
    id: 'content-2.19',
    idParent: 'step-7',
    parentType: 'Step',
    idHtml: 'app-content-form-2.19',
    fields: this.setUpFormFields(),
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
  formatwoType = 'spouse';
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
      this.formatwoType = value;
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

  ngAfterViewInit(): void {
  }

  addNewFormatwo() {
    console.log('addNewFormatwo-component ');
    console.log('formGroup value: ', this.formGroup.value);
    const newFormatwo = this.mapNewFormatwoData();
    const response = this.applicationService.addFormatwo((newFormatwo));

    if (response.status) {
      this.closeDialog();
    } else {
      this.modalMessage = response.message;
      this.modalService.open(this.modalID);
    }
  }

  updateFormatwo() {
    const updatedBeneficiary = this.mapNewFormatwoData();
    // this.applicationService.updateBeneficiary(updatedBeneficiary);
    this.closeDialog();
  }

  executeOperation(delegateOperation: string) {
    console.log('delegateOperation: ', delegateOperation);
    if (delegateOperation === 'closeDialog') {
      this.closeDialog();
    } else if (delegateOperation === 'addNewFormatwo') {
       this.addNewFormatwo();
    } else if (delegateOperation === 'update<Formatwo') {
       this.updateFormatwo();
    } else if (delegateOperation === 'closeModal') {
       this.modalService.close(this.modalID);
    }
  }

  closeDialog() {
    this.dialog.close();
  }

  setFormatwoValues() {
    this.content.fields.forEach((field) => {
      let value;
      switch (field.name) {
        case 'formatwoType':
          value = this.config.data.formatwo.formatwoType;
          break;
         case 'beneficiaryName':
          value = this.config.data.beneficiary.name;
          break;
        case 'beneficiaryFaLastName':
          value = this.config.data.beneficiary.fatherLastName;
          break;
        case 'beneficiaryMoLastName':
          value = this.config.data.beneficiary.motherLastName;
          break;
        case 'suspensiveCodition':
          value = this.config.data.beneficiary.suspensiveCondition;
          break;
        case 'contractNumber':
          value = this.config.data.beneficiary.contractNumber;
          break;
        case 'instructionLetterNumber':
          value = this.config.data.beneficiary.instructionLetterNumber;
          break;
        case 'beneficiaryRelationship':
          value = this.config.data.beneficiary.instructionLetterNumber;
          break; /*
        case 'beneficiaryBirthDate':
          value = this.config.data.beneficiary.birthDateOrConstitution;
          break; */
      }
      this.formGroup.controls[field.name].setValue(value);
    });
    console.log('form values: ');
    console.log(this.formGroup.value);
  }

  mapNewFormatwoData() {
    const newFormatwoBase = {
      formatwoId: (this.applicationService.getLastFormatwoId() + 1).toString(),
      formatwoType: this.formGroup.controls.formatwoType.value
    };
    console.log('mapNew: ');
    return {
        ...newFormatwoBase,
        name: this.formGroup.controls.beneficiaryName.value,
        fatherLastName: this.formGroup.controls.beneficiaryFaLastName.value,
        motherLastName: this.formGroup.controls.beneficiaryMoLastName.value,
        relationship: this.formGroup.controls.beneficiaryRelationshipP.value,
        birthDate: transformDate(this.formGroup.controls.beneficiaryBirthDate.value, 'YYYY/MM/DD'),
        address: {
          street: this.formGroup.controls.beneficiaryStreet.value,
          exteriorNumber: this.formGroup.controls.beneficiaryExteriorNumber.value,
          interiorNumber: this.formGroup.controls.beneficiaryInteriorNumber.value,
          zipCode: this.formGroup.controls.beneficiaryZipCode.value,
          neighborhood: this.formGroup.controls.beneficiarySuburb.value,
          municipality: this.formGroup.controls.beneficiaryMunicipality.value,
          state: this.formGroup.controls.beneficiaryState.value,
          city: this.formGroup.controls.beneficiaryCity.value,
          country: this.formGroup.controls.beneficiaryCountry.value,
        },
      };
  }
  mapFormatwoData() {
    return {
      formatwoId: this.config.data.formatwo.formatwoId,
      formatwoType: this.formGroup.controls.formatwoType.value,
      name: this.formGroup.controls.beneficiaryName.value,
      fatherLastName: this.formGroup.controls.beneficiaryFaLastName.value,
      motherLastName: this.formGroup.controls.beneficiaryMoLastName.value,
      relationship: this.formGroup.controls.beneficiaryRelationship.value,
      birthDateOrConstitution: transformDate(this.formGroup.controls.beneficiaryBirthDate.value, 'YYYY/MM/DD'),
      address: {
        street: this.formGroup.controls.beneficiaryStreet.value,
        exteriorNumber: this.formGroup.controls.beneficiaryExteriorNumber.value,
        interiorNumber: this.formGroup.controls.beneficiaryInteriorNumber.value,
        zipCode: this.formGroup.controls.beneficiaryZipCode.value,
        neighborhood: this.formGroup.controls.beneficiarySuburb.value,
        municipality: this.formGroup.controls.beneficiaryMunicipality.value,
        state: this.formGroup.controls.beneficiaryState.value,
        city: this.formGroup.controls.beneficiaryCity.value,
        country: this.formGroup.controls.beneficiaryCountry.value,
      },
    };
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

  setUpFormFields() {
    let fields = [];
    NewFormatwoFields.forEach((field) => {
      fields.push(field);
    });
    console.log('setUpFormFields: ', fields);
    return fields;
  }

  getFields() {
    let fields = [];
    NewFormatwoFields.forEach((field) => {
      fields.push(field);
    });
    console.log('getFields: ', fields);
    return fields;
  }
}
