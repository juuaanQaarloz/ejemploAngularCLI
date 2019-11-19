import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

import {ApplicationService} from '../../../core/services';
import {DialogService} from '../../dialog/dialog.service';
import {FormGroup} from '@angular/forms';
import {ModalService} from '../../custom-modal';
import {Formatwo} from '../../../models/formats-model';
import {FormattwoItemOperations} from '../../../core/mock/mock-operations';
import {formatwoFields} from '../../../core/mock/formats/formatwo';
import {NewFormatwoComponent} from '../new-formatwo/new-formatwo.component';


@Component({
  selector: 'app-formatwo-item',
  templateUrl: './formatwo-item.component.html',
  styleUrls: ['./formatwo-item.component.css']
})
export class FormaTwoItemComponent implements OnInit, AfterViewInit {
  @Input() formatwo: Formatwo;
  @Input() index: number;
  @Input() isLast: boolean;
  @Input() totalFormatos: number;
  // @Input() content: Content;
  fields = formatwoFields;
  formGroup: FormGroup;
  modalId;
  operations = FormattwoItemOperations;

  constructor(public applicationService: ApplicationService,
              public dialog: DialogService,
              private modalService: ModalService) {
  }

  ngOnInit() {
    this.formGroup = this.applicationService.createNewFormGroup(this.fields);
    console.log('formGroup: ', this.formGroup);
    // this.clearFields();
    this.setFieldsValues();
    this.modalId = 'modal-' + this.formatwo.formatwoId;

  }

  ngAfterViewInit(): void {
  }

  addNewFormatwo() {
     console.log('addNewFormatwo-item', 'addNewFormatwo-item');
     const ref = this.dialog.open(NewFormatwoComponent, {data: null});
     ref.afterClosed.subscribe((result) => {
      console.log('dialog closed FROM FROMTWO ITEM, result: ', result);
    });
  }

  deleteFormatwo() {
    // this.applicationService.removeFormatwo(this.formatwo.formatwoId);
    this.closeModal(this.modalId);
  }

  editFormatwo() {
    const ref = this.dialog.open(NewFormatwoComponent, {data: { beneficiary: this.formatwo}});
    ref.afterClosed.subscribe((result) => {
      console.log('dialog closed FROM BENEFICIARY ITEM, result: ', result);
    });
  }

  getFormatwoTypeLabel() {
    console.log('getFormatwoTypeLabel', 'getFormatwoTypeLabel');
    if (this.formatwo.formatwoType === 'spouse') {
      return 'Cónyuge o concubina(o)';
    } else if (this.formatwo.formatwoType === 'dependent') {
      return 'Dependiente económico';
    } else {
    }
  }

  setFieldsValues() {
    // this.formGroup.controls[this.fields[0].name].setValue(this.formatwo..beneficiary.relationship);
    // this.formGroup.controls[this.fields[1].name].setValue(this.beneficiary.participationPercentage);
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
    } else if (delegateOperation === 'deleteFormatwo') {
      this.deleteFormatwo();
    }
  }
}
