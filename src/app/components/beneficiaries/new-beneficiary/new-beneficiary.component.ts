import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ApplicationService} from '../../../core/services';
import {Address, Beneficiary} from '../../../models';
import {MockContentStep7Process1ContentSection2} from '../../../core/mock/mock-contents';
import {DialogConfig} from '../../dialog/dialog-config';
import {DialogRef} from '../../dialog/dialog-ref';
import {Beneficiarios} from '../../../core/mock/mock-beneficiaries';
import {BeneficiariesOperations, MockOperations} from '../../../core/mock/mock-operations';
import {Form, FormControl, FormGroup} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-new-beneficiary',
  templateUrl: './new-beneficiary.component.html',
  styleUrls: ['./new-beneficiary.component.css']
})
export class NewBeneficiaryComponent implements OnInit, AfterViewInit {
  // @Input() content: Content;
  content = {
    id: 'content-2.19',
    idParent: 'step-7',
    parentType: 'Step',
    idHtml: 'app-content-form-2.19',
    fields: Beneficiarios,
    operations: BeneficiariesOperations,
    showContent: false,
    styleClass: 'modal-type',
    renderConditions: '',
    contentType: 'looseFields'
  };
  formGroup: FormGroup;
  // content = MockContentStep7Process1ContentSection2[1];
  constructor(private applicationService: ApplicationService,
              public config: DialogConfig,
              public dialog: DialogRef
  ) {
  }

  ngOnInit() {
    this.formGroup = this.applicationService.createNewFormGroup(this.content.fields);
    console.log('from newBeneficiary formGroup: ', this.formGroup);
    if (this.config.data !== null) {
      console.log('config: ', this.config.data);
      this.setBeneficiaryValues();
    }

  }

  ngAfterViewInit(): void {
  }

  addNewBeneficiary() {
    console.log('formGroup value: ', this.formGroup.value);
    let newBeneficiary = this.mapBeneficiaryData();

    console.log('newBeneficiary: ', newBeneficiary);
    this.applicationService.addBeneficiary(newBeneficiary);
    this.closeDialog();
  }

  executeOperation(delegateOperation: string) {
    if (delegateOperation === 'closeDialog') {
      this.closeDialog();
    } else if (delegateOperation === 'addNewBeneficiary') {
      this.addNewBeneficiary();
    }
  }

  closeDialog() {
    // this.cleanFields();
    this.dialog.close();
  }

  setBeneficiaryValues() {
    // this.getValue('');
    // this.content.fields[1].value = this.config.data.beneficiary.name;
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
        case 'beneficiaryBirthDate':
          value = this.config.data.beneficiary.birthDateOrConstitution;
          break;
      }
      this.formGroup.controls[field.name].setValue(value);
      // console.log('value: ', value);
      // field.value = value;
    });
  }

  cleanFields() {
    this.content.fields.forEach((field) => {
      console.log('field value before: ', field.value);
      field.value = '';
      console.log('field value after: ', field.value);
    });
  }

  getValue(fieldName: string) {
    let value = '';
    const properties = Object.getOwnPropertyNames(this.config.data.beneficiary);
    console.log('properties: ', properties);
    /*this.content.fields.forEach((field) => {
      if (field.name === fieldName) {
        value = '';
      }
    });*/

    return value;
  }

  mapBeneficiaryData() {
    return {
      beneficiaryId: (this.applicationService.getLastBeneficiaryId() + 1).toString(),
      beneficiaryType: this.formGroup.controls['beneficiaryType'].value,
      name: this.formGroup.controls['beneficiaryName'].value,
      fatherLastName: this.formGroup.controls['beneficiaryFaLastName'].value,
      motherLastName: this.formGroup.controls['beneficiaryMoLastName'].value,
      relationship: this.formGroup.controls['beneficiaryRelationship'].value,
      birthDateOrConstitution: this.formatDate(this.formGroup.controls['beneficiaryBirthDate'].value),
      address: {
        street: this.formGroup.controls['beneficiaryStreet'].value,
        exteriorNumber: this.formGroup.controls['beneficiaryExteriorNumber'].value,
        interiorNumber: this.formGroup.controls['beneficiaryInteriorNumber'].value,
        zipCode: this.formGroup.controls['beneficiaryZipCode'].value,
        neighborhood: this.formGroup.controls['beneficiarySuburb'].value,
        municipality: this.formGroup.controls['beneficiaryMunicipality'].value,
        state: this.formGroup.controls['beneficiaryState'].value,
        city: this.formGroup.controls['beneficiaryCity'].value,
        country: this.formGroup.controls['beneficiaryCountry'].value,
      },
      participationPercentage: this.formGroup.controls['participationPercentage'].value,
      businessName: this.formGroup.controls['beneficiaryBusinessName'].value,
      suspensiveCondition: this.formGroup.controls['suspensiveCodition'].value,
      contractNumber: this.formGroup.controls['contractNumber'].value,
      instructionLetterNumber: this.formGroup.controls['instructionLetterNumber'].value,
    };
  }

  formatDate(date) {
    const transformDate =  moment(date).format('YYYY/MM/DD');
    return transformDate;
  }
}
