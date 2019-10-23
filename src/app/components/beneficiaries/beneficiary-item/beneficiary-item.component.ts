import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Beneficiary} from '../../../models/beneficiary-model';
import {ApplicationService} from '../../../core/services';
import {beneficiaryFields} from '../../../core/mock/mock-beneficiaries';
import {NewBeneficiaryComponent} from '../new-beneficiary/new-beneficiary.component';
import {DialogService} from '../../dialog/dialog.service';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-beneficiary-item',
  templateUrl: './beneficiary-item.component.html',
  styleUrls: ['./beneficiary-item.component.css']
})
export class BeneficiaryItemComponent implements OnInit, AfterViewInit {
  @Input() beneficiary: Beneficiary;
  @Input() index: number;
  @Input() isLast: boolean;
  // @Input() content: Content;
  fields = beneficiaryFields;
  formGroup: FormGroup;

  constructor(private applicationService: ApplicationService,
              public dialog: DialogService) {
  }

  ngOnInit() {
    this.formGroup = this.applicationService.createNewFormGroup(this.fields);
    this.clearFields();
    this.setFieldsValues();

  }

  ngAfterViewInit(): void {
  }

  determinateEvenOrOdd(num: number): boolean {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  addNewBeneficiary() {
    const ref = this.dialog.open(NewBeneficiaryComponent, {data: null});
    ref.afterClosed.subscribe((result) => {
      console.log('dialog closed FROM BENEFICIARY ITEM, result: ', result);
    });
  }

  deleteBeneficiary() {
   this.applicationService.removeBeneficiary(this.beneficiary.beneficiaryId);
  }

  editBeneficiary() {
    const ref = this.dialog.open(NewBeneficiaryComponent, {data: { beneficiary: this.beneficiary}});
    ref.afterClosed.subscribe((result) => {
      console.log('dialog closed FROM BENEFICIARY ITEM, result: ', result);
    });
  }

  getBeneficiaryTypeLabel() {
    if (this.beneficiary.beneficiaryType === 'phyPerson') {
      return 'Persona física';
    } else if (this.beneficiary.beneficiaryType === 'morPerson') {
      return 'Persona moral';
    } else {
      return 'MetLife fiduciaria';
    }
  }

  setFieldsValues() {
    // console.log('before field value from item component: ', this.fields[0].value);
    console.log('before field value from item component: ', this.fields[1].value);

    // this.fields[0].value = this.beneficiary.relationship;
    this.fields[1].value = this.beneficiary.participationPercentage;

    // console.log('after field value from item component: ', this.fields[0].value);
    console.log('after field value from item component: ', this.fields[1].value);
  }

  clearFields() {
    this.fields.forEach((field) => {
      field.value = '';
    });
  }
}
