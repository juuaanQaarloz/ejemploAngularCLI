import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApplicationService} from '../../../core/services';
import {DialogConfig} from '../../dialog/dialog-config';
import {DialogRef} from '../../dialog/dialog-ref';
import {Beneficiarios} from '../../../core/mock/mock-beneficiaries';
import {BeneficiariesOperations} from '../../../core/mock/mock-operations';
import {FormGroup} from '@angular/forms';
import {transformDate} from '../../../core/utilities';

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
    fields: Beneficiarios,
    operations: BeneficiariesOperations,
    showContent: false,
    styleClass: 'modal-type',
    renderConditions: '',
    contentType: 'looseFields'
  };
  formGroup: FormGroup;
  operationType: string;
  constructor(private applicationService: ApplicationService,
              public config: DialogConfig,
              public dialog: DialogRef
  ) {
  }

  ngOnInit() {
    this.formGroup = this.applicationService.createNewFormGroup(this.content.fields);
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
    let newBeneficiary = this.mapNewBeneficiaryData();

    this.applicationService.addBeneficiary(newBeneficiary);
    this.closeDialog();
  }

  updateBeneficiary() {
    let updatedBeneficiary = this.mapBeneficiaryData();
    this.applicationService.updateBeneficiary(updatedBeneficiary);
    this.closeDialog();
  }

  executeOperation(delegateOperation: string) {
    if (delegateOperation === 'closeDialog') {
      this.closeDialog();
    } else if (delegateOperation === 'addNewBeneficiary') {
      this.addNewBeneficiary();
    } else if (delegateOperation === 'updateBeneficiary') {
      this.updateBeneficiary();
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
    return {
      beneficiaryId: (this.applicationService.getLastBeneficiaryId() + 1).toString(),
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
}
