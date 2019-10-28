import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Beneficiary} from '../../../models/beneficiary-model';
import {ApplicationService} from '../../../core/services';
import {beneficiaryFields} from '../../../core/mock/mock-beneficiaries';
import {NewBeneficiaryComponent} from '../new-beneficiary/new-beneficiary.component';
import {DialogService} from '../../dialog/dialog.service';
import {FormGroup} from '@angular/forms';
import {ModalService} from '../../custom-modal';
import {BeneficiaryItemOperations} from '../../../core/mock/mock-operations';


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
  modalId;
  operations = BeneficiaryItemOperations;

  constructor(private applicationService: ApplicationService,
              public dialog: DialogService,
              private modalService: ModalService) {
  }

  ngOnInit() {
    this.formGroup = this.applicationService.createNewFormGroup(this.fields);
    // console.log('formGroup: ', this.formGroup);
    // this.clearFields();
    this.setFieldsValues();
    this.modalId = 'modal-' + this.beneficiary.beneficiaryId;

  }

  ngAfterViewInit(): void {
  }

  addNewBeneficiary() {
    const ref = this.dialog.open(NewBeneficiaryComponent, {data: null});
    ref.afterClosed.subscribe((result) => {
      console.log('dialog closed FROM BENEFICIARY ITEM, result: ', result);
    });
  }

  deleteBeneficiary() {
   this.applicationService.removeBeneficiary(this.beneficiary.beneficiaryId);
   this.closeModal(this.modalId);
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
    this.formGroup.controls[this.fields[0].name].setValue(this.beneficiary.relationship);
    this.formGroup.controls[this.fields[1].name].setValue(this.beneficiary.participationPercentage);
    // this.fields[0].value = this.beneficiary.relationship;
    // this.fields[1].value = this.beneficiary.participationPercentage;
  }

  clearFields() {
    console.log('onClear...', this.index);
    this.fields.forEach((field) => {
      console.log('onClear...', field.value);
      field.value = '';
    });
  }

  openModal(modalId: string) {
    this.modalService.open(modalId);
  }

  closeModal(modalId: string) {
    this.modalService.close(modalId);
  }

  executeOperation(delegateOperation: string) {
    if (delegateOperation === 'closeModal') {
      this.closeModal(this.modalId);
    } else if (delegateOperation === 'deleteBeneficiary') {
      this.deleteBeneficiary();
    }
  }
}
