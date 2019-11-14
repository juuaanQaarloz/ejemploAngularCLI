import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApplicationService} from '../../../core/services';
import {DialogConfig} from '../../dialog/dialog-config';
import {DialogRef} from '../../dialog/dialog-ref';
import {NewBeneficiaryFields} from '../../../core/mock/mock-beneficiaries/mock-beneficiaries';
import {BeneficiariesOperations} from '../../../core/mock/mock-operations';
import {FormGroup} from '@angular/forms';
import {transformDate} from '../../../core/utilities';
import {ModalService} from '../../custom-modal';
import {Operation} from '../../../models';
import {BeneficiaryFieldsP} from '../../../core/mock/mock-beneficiaries/phy-beneficiary';
import {BeneficiaryFieldsM} from '../../../core/mock/mock-beneficiaries/mor-beneficiary';
import {BeneficiaryFieldsF} from '../../../core/mock/mock-beneficiaries/fid-beneficiary';

@Component({
  selector: 'app-new-beneficiary',
  templateUrl: './new-beneficiary.component.html',
  styleUrls: ['./new-beneficiary.component.css']
})
export class NewBeneficiaryComponent implements OnInit, AfterViewInit {
  content = {
    id: 'content-2.19',
    idParent: 'step-7',
    parentType: 'Step',
    idHtml: 'app-content-form-2.19',
    fields: this.setUpFormFields(),
    operations: BeneficiariesOperations,
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
  beneficiaryType = 'phyPerson';
  fields = [];

  constructor(private applicationService: ApplicationService,
              public config: DialogConfig,
              public dialog: DialogRef,
              private modalService: ModalService
  ) {
  }

  ngOnInit() {

    this.formGroup = this.applicationService.createNewFormGroup(this.content.fields);

    this.fields = this.getFields();

    this.formGroup.controls.beneficiaryType.valueChanges.subscribe((value) => {
      this.beneficiaryType = value;
      // console.log('beneficiaryType');
      this.fields = this.getFields();
    });

    if (this.config.data !== null) {
      this.operationType = 'edit';
      this.setBeneficiaryValues();
    } else {
      this.operationType = 'add';
    }

  }

  ngAfterViewInit(): void {
  }

  addNewBeneficiary() {
    console.log('formGroup value: ', this.formGroup.value);
    const newBeneficiary = this.mapNewBeneficiaryData();
    const response = this.applicationService.addItem(newBeneficiary, 'beneficiary');

    if (response.status) {
      this.closeDialog();
    } else {
      this.modalMessage = response.message;
      this.modalService.open(this.modalID);
    }
  }

  updateBeneficiary() {
    const updatedBeneficiary = this.mapBeneficiaryData();
    this.applicationService.updateItem(updatedBeneficiary, 'beneficiary');
    this.closeDialog();
  }

  executeOperation(delegateOperation: string) {
    if (delegateOperation === 'closeDialog') {
      this.closeDialog();
    } else if (delegateOperation === 'addNewBeneficiary') {
      this.addNewBeneficiary();
    } else if (delegateOperation === 'updateBeneficiary') {
      this.updateBeneficiary();
    } else if (delegateOperation === 'closeModal') {
      this.modalService.close(this.modalID);
    }
  }

  closeDialog() {
    this.dialog.close();
  }

  setBeneficiaryValues() {
    this.content.fields.forEach((field) => {
      let value;
      switch (field.name) {
        case 'beneficiaryType':
          value = this.config.data.beneficiary.beneficiaryType;
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
          break;
        /*case 'beneficiaryBirthDate':
          value = this.config.data.beneficiary.birthDateOrConstitution;
          break;*/
      }
      this.formGroup.controls[field.name].setValue(value);
    });
    console.log('form values: ');
    console.log(this.formGroup.value);
  }

  mapNewBeneficiaryData() {
    const newBeneficiaryBase = {
      beneficiaryId: (this.applicationService.getLastItemId('beneficiary') + 1).toString(),
      beneficiaryType: this.formGroup.controls.beneficiaryType.value
    };

    if (this.beneficiaryType === 'phyPerson') {
      return {
        ...newBeneficiaryBase,
        name: this.formGroup.controls.beneficiaryName.value,
        fatherLastName: this.formGroup.controls.beneficiaryFaLastName.value,
        motherLastName: this.formGroup.controls.beneficiaryMoLastName.value,
        relationship: this.formGroup.controls.beneficiaryRelationshipP.value,
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
        participationPercentage: this.formGroup.controls.participationPercentageP.value,
      };
    } else if (this.beneficiaryType === 'morPerson') {
      return {
        ...newBeneficiaryBase,
        businessName: this.formGroup.controls.beneficiaryBusinessName.value,
        relationship: this.formGroup.controls.beneficiaryRelationshipM.value,
        birthDateOrConstitution: transformDate(this.formGroup.controls.beneficiaryConstitutionDate.value, 'YYYY/MM/DD'),
        address: {
          street: this.formGroup.controls.beneficiaryStreetM.value,
          exteriorNumber: this.formGroup.controls.beneficiaryExteriorNumberM.value,
          interiorNumber: this.formGroup.controls.beneficiaryInteriorNumberM.value,
          zipCode: this.formGroup.controls.beneficiaryZipCodeM.value,
          neighborhood: this.formGroup.controls.beneficiarySuburbM.value,
          municipality: this.formGroup.controls.beneficiaryMunicipalityM.value,
          state: this.formGroup.controls.beneficiaryStateM.value,
          city: this.formGroup.controls.beneficiaryCityM.value,
          country: this.formGroup.controls.beneficiaryCountryM.value,
        },
        participationPercentage: this.formGroup.controls.participationPercentageM.value,
      };
    } else if (this.beneficiaryType === 'fidPerson') {
      return {
        ...newBeneficiaryBase,
        suspensiveCondition: this.formGroup.controls.suspensiveCondition.value,
        contractNumber: this.formGroup.controls.contractNumber.value,
        instructionLetterNumber: this.formGroup.controls.instructionLetterNumber.value,
        relationship: this.formGroup.controls.beneficiaryRelationshipF.value,
        birthDateOrConstitution: transformDate(this.formGroup.controls.beneficiaryConstitutionDateF.value, 'YYYY/MM/DD'),
        address: {
          street: this.formGroup.controls.beneficiaryStreetF.value,
          exteriorNumber: this.formGroup.controls.beneficiaryExteriorNumberF.value,
          interiorNumber: this.formGroup.controls.beneficiaryInteriorNumberF.value,
          zipCode: this.formGroup.controls.beneficiaryZipCodeF.value,
          neighborhood: this.formGroup.controls.beneficiarySuburbF.value,
          municipality: this.formGroup.controls.beneficiaryMunicipalityF.value,
          state: this.formGroup.controls.beneficiaryStateF.value,
          city: this.formGroup.controls.beneficiaryCityF.value,
          country: this.formGroup.controls.beneficiaryCountryF.value,
        },
        participationPercentage: this.formGroup.controls.participationPercentageF.value,
      };
    }
  }

  mapBeneficiaryData() {
    return {
      beneficiaryId: this.config.data.beneficiary.beneficiaryId,
      beneficiaryType: this.formGroup.controls.beneficiaryType.value,
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
      participationPercentage: this.formGroup.controls.participationPercentage.value,
      businessName: this.formGroup.controls.beneficiaryBusinessName.value,
      suspensiveCondition: this.formGroup.controls.suspensiveCodition.value,
      contractNumber: this.formGroup.controls.contractNumber.value,
      instructionLetterNumber: this.formGroup.controls.instructionLetterNumber.value,
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

    NewBeneficiaryFields.forEach((field) => {
      fields.push(field);
    });

    BeneficiaryFieldsP.forEach((field) => {
      fields.push(field);
    });
    BeneficiaryFieldsM.forEach((field) => {
      fields.push(field);
    });

    BeneficiaryFieldsF.forEach((field) => {
      fields.push(field);
    });
    return fields;
  }

  getFields() {
    let fields = [];

    NewBeneficiaryFields.forEach((field) => {
      fields.push(field);
    });

    if (this.beneficiaryType === 'phyPerson') {
      BeneficiaryFieldsP.forEach((field) => {
        fields.push(field);
      });
    } else if (this.beneficiaryType === 'morPerson') {
      BeneficiaryFieldsM.forEach((field) => {
        fields.push(field);
      });
    } else if (this.beneficiaryType === 'fidPerson') {
      BeneficiaryFieldsF.forEach((field) => {
        fields.push(field);
      });
    }
    return fields;
  }
}
