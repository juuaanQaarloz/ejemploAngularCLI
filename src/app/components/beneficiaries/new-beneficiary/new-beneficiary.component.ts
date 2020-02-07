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
  nameMessage = 'El nombre no puede ser igual al apeLLido paterno y materno';
  modalMessage = 'La suma de las participaciones de los beneficiarios excede el 100%';
  fileNameUpload = 'Ningún archivo seleccionado';
  fidMessage = 'Se requiere adjuntar documentos:  Carta instrucción a la fiduciaria';
  beneficiaryType = 'P';
  sameAsTitular = false;
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
    // console.log(1);
    this.formGroup = this.applicationService.createNewFormGroup(this.content.fields);
    // console.log(this.formGroup);

    if (this.config.data !== null) {
      this.operationType = 'edit';
      this.beneficiaryType = this.config.data.item.beneficiaryType;
      this.sameAsTitular = this.config.data.item.addressSameAsTitular;

      this.fields = this.getFields();
      this.setBeneficiaryValues();
      // console.log(this.fields);
      // console.log(2);
    } else {
      this.operationType = 'add';
      this.beneficiaryType = 'P';
      this.sameAsTitular = true;
      this.fields = this.getFields();
      // console.log(this.fields);
      // console.log(3);
    }
    // this.formGroup.get('beneficiaryType').valueChanges.subscribe((value) => {
    //   // console.log('Beneficiary Changes |1');
    //   this.beneficiaryType = value;
    //   this.fields = this.getFields();
    // });

    // console.log('Form group onInit: ');
    // console.log(this.formGroup.controls);
  }

  ngAfterViewInit(): void {
  }

  addNewBeneficiary() {
    const formStatus = this.getFormStatus();
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
    // console.log('formStatus: ', formStatus);

    if (formStatus === 'VALID') {
      const updatedBeneficiary = this.mapBeneficiaryData();
      console.log('updatedBeneficiary: ', updatedBeneficiary);
      const response = this.applicationService.updateItem(updatedBeneficiary, 'beneficiary');
      // console.log('response: ', response);
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

    // console.log('this.config.data.item.beneficiaryType: ', this.config.data.item.beneficiaryType);


    switch (this.config.data.item.beneficiaryType) {
      case 'P':
        this.setBeneficiaryP();
        break;
      case 'M':
        this.setBeneficiaryM();
        break;
      case 'fidPerson':
        this.setBeneficiaryF();
        break;
    }

    /*const itemAttrNames = [];
    Object.keys(this.config.data.item).forEach((key, index) => {
      // console.log('key: ', key);
      // console.log('index: ', index);

      /*if (index !== 0) { // skip the id attr to coindice with the fields
        itemAttrNames.push(key);
      }
    });*/
  }

  setBeneficiaryP() {
    // console.log('on setBeneficiaryP...');

    /*this.fields.forEach((field) => {
      // console.log('field.name: ', field.name);
      const value = this.formGroup.controls[field.name].value;
      // // console.log('value: ', value);
    });*/

    // console.log('item: ', this.config.data.item);

    this.fields.forEach((field) => {
      let value;
      // console.log('field.name: ', field.name);
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
        case 'beneficiaryBirthDate':
          value = this.config.data.item.birthDateOrConstitution;
          break;
        case 'beneficiaryRelationshipP':
          value = this.config.data.item.relationshipCd;
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
      // console.log('value: ', value);
      // console.log('field.name: ', field.name);
      this.formGroup.controls[field.name].setValue(value);
    });
  }

  setBeneficiaryM() {
    // console.log('on setBeneficiaryM...');

    this.fields.forEach((field) => {
      let value;
      // console.log('field.name: ', field.name);

      switch (field.name) {
        case 'beneficiaryType':
          value = this.config.data.item.beneficiaryType;
          break;
        case 'beneficiaryBusinessName':
          value = this.config.data.item.businessName;
          break;
        case 'beneficiaryRelationshipM':
          value = this.config.data.item.relationshipCd;
          // console.log('beneficiaryRelationshipM', value);
          break;
        case 'espBeneficiaryRelationshipM':
          value = this.config.data.item.espRelationship;
          break;
        case 'beneficiaryConstitutionDate':
          value = this.config.data.item.birthDateOrConstitution;
          break;
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
        case 'beneficiaryZipCodeM':
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
        case 'beneficiaryCityM':
          value = this.config.data.item.address.city;
          break;
        case 'beneficiaryCountryM':
          value = this.config.data.item.address.country;
          break;
      }
      // console.log('value: ', value);
      // console.log('field.name: ', field.name);
      this.formGroup.controls[field.name].setValue(value);
    });
  }

  setBeneficiaryF() {
    // console.log('on setBeneficiaryF...');

    this.fields.forEach((field) => {
      let value;
      // console.log('field.name: ', field.name);

      switch (field.name) {
        case 'beneficiaryType':
          value = this.config.data.item.beneficiaryType;
          break;
        case 'suspensiveCondition':
          value = this.config.data.item.suspensiveCondition;
          break;
        case 'contractNumber':
          value = this.config.data.item.contractNumber;
          break;
        case 'instructionLetterNumber':
          value = this.config.data.item.instructionLetterNumber;
          break;
        case 'beneficiaryRelationshipF':
          value = this.config.data.item.relationshipCd;
          break;
        case 'espBeneficiaryRelationshipF':
          value = this.config.data.item.espRelationship;
          break;
        case 'participationPercentageF':
          value = this.config.data.item.participationPercentage;
          break;
      }
      this.formGroup.controls[field.name].setValue(value);
    });
  }

  mapNewBeneficiaryData() {
    const newBeneficiaryBase = {
      beneficiaryId: (this.applicationService.getLastItemId('beneficiary') + 1).toString(),
      beneficiaryType: this.formGroup.controls.beneficiaryType.value
    };

    if (this.beneficiaryType === 'P') {
      return {
        ...newBeneficiaryBase,
        name: this.formGroup.controls.beneficiaryName.value,
        fatherLastName: this.formGroup.controls.beneficiaryFaLastName.value,
        motherLastName: this.formGroup.controls.beneficiaryMoLastName.value,
        relationshipCd: this.formGroup.controls.beneficiaryRelationshipP.value,
        relationship: BeneficiaryFieldsP[4].additionalData.name,
        birthDateOrConstitution: transformDate(this.formGroup.controls.beneficiaryBirthDate.value, 'YYYY/MM/DD'),
        addressSameAsTitular: this.formGroup.controls.sameAsTitular.value,
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
    } else if (this.beneficiaryType === 'M') {
      return {
        ...newBeneficiaryBase,
        businessName: this.formGroup.controls.beneficiaryBusinessName.value,
        relationship: BeneficiaryFieldsM[1].additionalData ?
          BeneficiaryFieldsM[1].additionalData.name :
          this.formGroup.controls.espBeneficiaryRelationshipM.value,
        relationshipCd: this.formGroup.controls.beneficiaryRelationshipM.value,
        espRelationship: this.formGroup.controls.espBeneficiaryRelationshipM.value,
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
        businessName: 'METLIFE',
        suspensiveCondition: this.formGroup.controls.suspensiveCondition.value,
        contractNumber: this.formGroup.controls.contractNumber.value,
        instructionLetterNumber: this.formGroup.controls.instructionLetterNumber.value,
        relationshipCd: this.formGroup.controls.beneficiaryRelationshipF.value,
        relationship: BeneficiaryFieldsF[3].additionalData ?
          BeneficiaryFieldsF[3].additionalData.name :
          this.formGroup.controls.espBeneficiaryRelationshipF.value,
        espRelationship: this.formGroup.controls.espBeneficiaryRelationshipF.value,
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

    if (this.beneficiaryType === 'P') {
      return {
        ...beneficiaryBase,
        name: this.formGroup.controls.beneficiaryName.value,
        fatherLastName: this.formGroup.controls.beneficiaryFaLastName.value,
        motherLastName: this.formGroup.controls.beneficiaryMoLastName.value,
        relationshipCd: this.formGroup.controls.beneficiaryRelationshipP.value,
        relationship: BeneficiaryFieldsP[4].additionalData.name,
        birthDateOrConstitution: transformDate(this.formGroup.controls.beneficiaryBirthDate.value, 'YYYY/MM/DD'),
        addressSameAsTitular: this.formGroup.controls.sameAsTitular.value,
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
    } else if (this.beneficiaryType === 'M') {
      return {
        ...beneficiaryBase,
        businessName: this.formGroup.controls.beneficiaryBusinessName.value,
        relationshipCd: this.formGroup.controls.beneficiaryRelationshipM.value,
        relationship: BeneficiaryFieldsM[1].additionalData ?
          BeneficiaryFieldsM[1].additionalData.name :
          this.formGroup.controls.espBeneficiaryRelationshipM.value,
        espRelationship: this.formGroup.controls.espBeneficiaryRelationshipM.value,
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
        relationshipCd: this.formGroup.controls.beneficiaryRelationshipF.value,
        relationship: BeneficiaryFieldsF[1].additionalData ?
          BeneficiaryFieldsF[1].additionalData.name :
          this.formGroup.controls.espBeneficiaryRelationshipF.value,
        // this.formGroup.controls.beneficiaryRelationshipF.value,
        espRelationship: this.formGroup.controls.espBeneficiaryRelationshipF.value,
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
    // // console.log('event.target.files: ', event.target.files);
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
          data => // // console.log('success'),
          error => // // console.log(error)
        )
    }*/
  }

  setUpFormFields() {
    const fields = [];

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
    // console.log('Entro a getFields');
    const fields = [];
    const fieldsPerBeneficiary = [];

    NewBeneficiaryFields.forEach((field) => {
      if ('beneficiaryType' === field.name ) {
        field.value = this.beneficiaryType;
      }
      if ('sameAsTitular' === field.name ) {
        field.value = this.sameAsTitular;
      }
      fields.push(field);
      fieldsPerBeneficiary.push(field);
    });

    if (this.beneficiaryType === 'P') {
      BeneficiaryFieldsP.forEach((field) => {
        if ('sameAsTitular' === field.name ) {
          field.value = this.sameAsTitular;
          console.log('sameAsTitular field value: ', field.value);
        }
        fields.push(field);
        fieldsPerBeneficiary.push(field);
      });
    } else if (this.beneficiaryType === 'M') {
      BeneficiaryFieldsM.forEach((field) => {
        fields.push(field);
        fieldsPerBeneficiary.push(field);
      });
    } else if (this.beneficiaryType === 'fidPerson') {
      BeneficiaryFieldsF.forEach((field) => {
        fields.push(field);
        fieldsPerBeneficiary.push(field);
      });
    }

    this.formGroup = this.applicationService.createNewFormGroup(fieldsPerBeneficiary);
    this.formGroup.controls.beneficiaryType.setValue(this.beneficiaryType);
    console.log('beneficiaryType: ', this.formGroup.controls.beneficiaryType.value);
    if ( this.formGroup.controls.sameAsTitular !== undefined ) {
      this.formGroup.controls.sameAsTitular.setValue(this.sameAsTitular);
      console.log('sameAsTitular: ', this.formGroup.controls.sameAsTitular.value);
    }
    return fields;
  }

  getFormStatus() {
    return this.formGroup.status;
  }

  beneficiaryChange(beneficiaryType) {
    // console.log('Entro a beneficiaryChange: ', beneficiaryType);
    this.formGroup.controls.beneficiaryType.setValue(beneficiaryType);
    this.beneficiaryType = beneficiaryType;
    this.fields = this.getFields();
    this.formGroup.controls.beneficiaryType.setValue(beneficiaryType);
  }
}
