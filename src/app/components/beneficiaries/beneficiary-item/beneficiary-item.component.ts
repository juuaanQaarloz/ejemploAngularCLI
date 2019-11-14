import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Beneficiary} from '../../../models/beneficiary-model';
import {ApplicationService} from '../../../core/services';
import {beneficiaryFields} from '../../../core/mock/mock-beneficiaries/mock-beneficiaries';
import {NewBeneficiaryComponent} from '../new-beneficiary/new-beneficiary.component';
import {DialogService} from '../../dialog/dialog.service';
import {FormGroup} from '@angular/forms';
import {ModalService} from '../../custom-modal';
import {BeneficiaryItemOperations} from '../../../core/mock/mock-operations';
import {NewAgentComponent} from '../new-agent/new-agent.component';
import {AgentFields, AgentFieldsItem} from '../../../core/mock/mock-agents/mock-agents-questions';


@Component({
  selector: 'app-beneficiary-item',
  templateUrl: './beneficiary-item.component.html',
  styleUrls: ['./beneficiary-item.component.css']
})
export class BeneficiaryItemComponent implements OnInit, AfterViewInit {
  @Input() item: any;
  @Input() itemType: string;
  @Input() index: number;
  @Input() isLast: boolean;
  @Input() totalItems: number;
  @Input() totalParticipationPercentageItems: number;
  fields;
  formGroup: FormGroup;
  modalId;
  operations = BeneficiaryItemOperations;
  questionModal;
  maxItems;
  styleClass;

  constructor(public applicationService: ApplicationService,
              public dialog: DialogService,
              private modalService: ModalService) {
  }

  ngOnInit() {
    if (this.itemType === 'beneficiary') {
      this.fields = beneficiaryFields;
      this.operations = BeneficiaryItemOperations;
      this.questionModal = '¿Está seguro que desea eliminar al beneficiario de la lista?';
      this.maxItems = 10;
      this.styleClass = 'item-row-beneficiary';
    } else if (this.itemType === 'agent') {
      this.fields = AgentFieldsItem;
      this.operations = BeneficiaryItemOperations;
      this.questionModal = '¿Está seguro que desea eliminar al agente de la lista?';
      this.maxItems = 2;
      this.styleClass = 'item-row-agent';
    }

    this.formGroup = this.applicationService.createNewFormGroup(this.fields);
    this.setFieldsValues();
    this.modalId = 'modal-' + this.itemType + this.index;

  }

  ngAfterViewInit(): void {
  }

  addNewItem() {
    let ref;
    if (this.itemType === 'beneficiary') {
      ref = this.dialog.open(NewBeneficiaryComponent, {data: null});
    } else if (this.itemType === 'agent') {
      ref = this.dialog.open(NewAgentComponent, {data: null});
    }

    ref.afterClosed.subscribe((result) => {
      console.log('dialog closed FROM ITEM component, result: ', result);
    });
  }

  deleteItem() {
    let propertyItem;
    if (this.itemType === 'beneficiary') {
      propertyItem = 'beneficiaryId';
    } else if (this.itemType === 'agent') {
      propertyItem = 'agentId';
    }
    this.applicationService.removeItem(this.item[propertyItem], this.itemType);
    this.closeModal(this.modalId);
  }

  editItem() {
    let ref;
    if (this.itemType === 'beneficiary') {
      ref = this.dialog.open(NewBeneficiaryComponent, {data: {item: this.item}});
    } else if (this.itemType === 'agent') {
      ref = this.dialog.open(NewAgentComponent, {data: {item: this.item}});
    }

    ref.afterClosed.subscribe((result) => {
      console.log('dialog closed FROM BENEFICIARY ITEM, result: ', result);
    });
  }

  getBeneficiaryTypeLabel() {
    if (this.item.beneficiaryType === 'phyPerson') {
      return 'Persona física';
    } else if (this.item.beneficiaryType === 'morPerson') {
      return 'Persona moral';
    } else {
      return 'MetLife fiduciaria';
    }
  }

  setFieldsValues() {
    if (this.itemType === 'beneficiary') {
      this.formGroup.controls[this.fields[0].name].setValue(this.item.relationship);
      this.formGroup.controls[this.fields[1].name].setValue(this.item.participationPercentage);
    } else if (this.itemType === 'agent') {
      this.formGroup.controls[this.fields[0].name].setValue(this.item.name);
      this.formGroup.controls[this.fields[1].name].setValue(this.item.promotor);
      this.formGroup.controls[this.fields[2].name].setValue(this.item.key);
      this.formGroup.controls[this.fields[3].name].setValue(this.item.participation);
    }
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
      this.deleteItem();
    }
  }
}
