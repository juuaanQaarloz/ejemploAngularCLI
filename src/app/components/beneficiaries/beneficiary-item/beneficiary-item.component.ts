import {Component, Input, OnInit} from '@angular/core';
import {Beneficiary} from '../../../models/beneficiary-model';
import {ModalService} from '../../custom-modal';
import {ApplicationService} from '../../../core/services';
import {Field} from '../../../models';
import {beneficiaryFields} from '../../../core/mock/mock-beneficiaries';


@Component({
  selector: 'app-beneficiary-item',
  templateUrl: './beneficiary-item.component.html',
  styleUrls: ['./beneficiary-item.component.css']
})
export class BeneficiaryItemComponent implements OnInit {
  @Input() beneficiary: Beneficiary;
  @Input() index: number;
  @Input() isLast: boolean;

  fields = beneficiaryFields;

  constructor(private modalService: ModalService,
              private applicationService: ApplicationService) {
  }

  ngOnInit() {
    this.setFieldsValues();
  }

  determinateEvenOrOdd(num: number): boolean {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  addNewBeneficiary() {
    console.log('addNewBeneficiary...');
    this.openModal('add-beneficiary-modal-2');
  }

  deleteBeneficiary() {
   this.applicationService.removeBeneficiary(this.beneficiary.beneficiaryId);
  }

  openModal(modalId: string) {
    this.modalService.open(modalId);
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
    this.fields[0].value = this.beneficiary.relationship;
    this.fields[1].value = this.beneficiary.participationPercentage;
    this.fields.forEach((field) => {
      console.log('field value : ', field.value);
    });
  }
}
