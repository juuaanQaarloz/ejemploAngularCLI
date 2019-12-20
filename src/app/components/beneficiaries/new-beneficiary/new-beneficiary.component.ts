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
import {FORM_MSG_ERROR} from '../../../core/mock/errors/mock-erros-datos-plan';

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
  fidMessage = 'Se requiere adjuntar documentos:  Carta instrucción a la fiduciaria';
  beneficiaryType = 'phyPerson';
  showplus = false;
  fields = [];
  showFormError = false;
  formMsgError = FORM_MSG_ERROR;

  constructor(private applicationService: ApplicationService,
              public config: DialogConfig,
              public dialog: DialogRef,
              private modalService: ModalService
  ) {
  }

  ngOnInit() {
    this.formGroup = this.applicationService.createNewFormGroup(this.content.fields);

    if (this.config.data !== null) {
      this.operationType = 'edit';
      this.beneficiaryType = this.config.data.item.beneficiaryType;

      this.fields = this.getFields();
      this.setBeneficiaryValues();

    } else {
      this.operationType = 'add';
      this.beneficiaryType = 'phyPerson';
      this.fields = this.getFields();
    }
    this.formGroup.controls.beneficiaryType.valueChanges.subscribe((value) => {
      this.beneficiaryType = value;
      this.fields = this.getFields();
    });
  }

  ngAfterViewInit(): void {
  }

  addNewBeneficiary() {
    const formStatus = this.getFormStatus();
    console.log('formStatus: ', formStatus);
    console.log('form controls: ', this.formGroup.controls);

    if (formStatus === 'VALID') {
      const newBeneficiary = this.mapNewBeneficiaryData();
      const response = this.applicationService.addItem(newBeneficiary, 'beneficiary');

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

  updateBeneficiary() {
    const formStatus = this.getFormStatus();
    console.log('formStatus: ', formStatus);

    if (formStatus === 'VALID') {
      const updatedBeneficiary = this.mapBeneficiaryData();
      const response = this.applicationService.updateItem(updatedBeneficiary, 'beneficiary');
      console.log('response: ', response);
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

    console.log('this.config.data.item.beneficiaryType: ', this.config.data.item.beneficiaryType);

    switch (this.config.data.item.beneficiaryType) {
      case 'phyPerson':
        this.setBeneficiaryP();
        break;
      case 'morPerson':
        this.setBeneficiaryM();
        break;
      case 'fidPerson':
        this.setBeneficiaryF();
        break;
    }

    /*const itemAttrNames = [];
    Object.keys(this.config.data.item).forEach((key, index) => {
      console.log('key: ', key);
      console.log('index: ', index);

      /*if (index !== 0) { // skip the id attr to coindice with the fields
        itemAttrNames.push(key);
      }
    });*/
  }

  setBeneficiaryP() {
    console.log('on setBeneficiaryP...');

    /*this.fields.forEach((field) => {
      console.log('field.name: ', field.name);
      const value = this.formGroup.controls[field.name].value;
      // console.log('value: ', value);
    });*/

    console.log('item: ', this.config.data.item);

    this.fields.forEach((field) => {
      let value;
      console.log('field.name: ', field.name);
      switch (field.name) {
        case 'beneficiaryType':
          value = this.config.data.item.beneficiaryType;
          break;
        case 'beneficiaryName':
          value = this.config.data.item.name;
          break;
        case 'beneficiaryFaLastName':
          value = this.config.data.item.fatherLastName;
          break;
        case 'beneficiaryMoLastName':
          value = this.config.data.item.motherLastName;
          break;
        /*case 'beneficiaryBirthDate':
          value = this.config.data.item.birthDateOrConstitution;
          break;*/
        case 'beneficiaryRelationshipP':
          value = this.config.data.item.relationship;
          break;
        case 'participationPercentageP':
          value = this.config.data.item.participationPercentage;
          break;
        case 'sameAsTitular':
          value = this.config.data.item.addressSameAsTitular;
          break;
        case 'beneficiaryStreet':
          value = this.config.data.item.address.street;
          break;
        case 'beneficiaryExteriorNumber':
          value = this.config.data.item.address.exteriorNumber;
          break;
        case 'beneficiaryInteriorNumber':
          value = this.config.data.item.address.interiorNumber;
          break;
        case 'beneficiaryZipCode':
          value = this.config.data.item.address.zipCode;
          break;
        case 'beneficiarySuburb':
          value = this.config.data.item.address.neighborhood;
          break;
        case 'beneficiaryMunicipality':
          value = this.config.data.item.address.municipality;
          break;
        case 'beneficiaryState':
          value = this.config.data.item.address.state;
          break;
        case 'beneficiaryCity':
          value = this.config.data.item.address.city;
          break;
        case 'beneficiaryCountry':
          value = this.config.data.item.address.country;
          break;
      }
      console.log('value: ', value);
      this.formGroup.controls[field.name].setValue(value);
    });
  }

  setBeneficiaryM() {
    console.log('on setBeneficiaryM...');

    this.fields.forEach((field) => {
      let value;
      console.log('field.name: ', field.name);

      switch (field.name) {
        case 'beneficiaryBusinessName':
          value = this.config.data.item.businessName;
          break;
        case 'beneficiaryRelationshipM':
          value = this.config.data.item.relationship;
          break;
        /*case 'beneficiaryConstitutionDate':
          value = this.config.data.item.birthDateOrConstitution;
          break;*/
        case 'participationPercentageM':
          value = this.config.data.item.participationPercentage;
          break;
        case 'beneficiaryStreetM':
          value = this.config.data.item.address.street;
          break;
        case 'beneficiaryExteriorNumberM':
          value = this.config.data.item.address.exteriorNumber;
          break;
        case 'beneficiaryInteriorNumberM':
          value = this.config.data.item.address.interiorNumber;
          break;
        case 'txtBeneficiaryZipCodeM':
          value = this.config.data.item.address.zipCode;
          break;
        case 'beneficiarySuburbM':
          value = this.config.data.item.address.neighborhood;
          break;
        case 'beneficiaryMunicipalityM':
          value = this.config.data.item.address.municipality;
          break;
        case 'beneficiaryStateM':
          value = this.config.data.item.address.state;
          break;
        case 'txtBeneficiaryCityM':
          value = this.config.data.item.address.city;
          break;
        case 'slctBeneficiaryCountryM':
          value = this.config.data.item.address.country;
          break;
      }
      this.formGroup.controls[field.name].setValue(value);
    });
  }

  setBeneficiaryF() {
    console.log('on setBeneficiaryF...');
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
    const beneficiaryBase = {
      beneficiaryId: this.config.data.item.beneficiaryId,
      beneficiaryType: this.formGroup.controls.beneficiaryType.value
    };

    if (this.beneficiaryType === 'phyPerson') {
      return {
        ...beneficiaryBase,
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
        ...beneficiaryBase,
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
        ...beneficiaryBase,
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

  closeModal(modalID: string) {
    this.modalService.close(modalID);
  }

  fileChange(event) {
    // console.log('event.target.files: ', event.target.files);
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
          data => // console.log('success'),
          error => // console.log(error)
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

  getFormStatus() {
    return this.formGroup.status;
  }
}
