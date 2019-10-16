import {Component, Input, OnInit} from '@angular/core';
import {Beneficiary} from '../../../models/beneficiary-model';
import {ModalService} from '../../custom-modal';
import {ApplicationService} from '../../../core/services';

@Component({
  selector: 'app-beneficiary-item',
  templateUrl: './beneficiary-item.component.html',
  styleUrls: ['./beneficiary-item.component.css']
})
export class BeneficiaryItemComponent implements OnInit {
  @Input() beneficiary: Beneficiary;
  @Input() index: number;
  @Input() isLast: boolean;
  constructor(private modalService: ModalService,
              private applicationService: ApplicationService) { }

  ngOnInit() {
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

}
