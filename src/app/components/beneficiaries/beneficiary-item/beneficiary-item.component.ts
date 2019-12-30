import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ApplicationService} from '../../../core/services';
import {beneficiaryFields} from '../../../core/mock/mock-beneficiaries/mock-beneficiaries';
import {NewBeneficiaryComponent} from '../new-beneficiary/new-beneficiary.component';
import {DialogService} from '../../dialog/dialog.service';
import {FormGroup} from '@angular/forms';
import {ModalService} from '../../custom-modal';
import {BeneficiaryItemOperations} from '../../../core/mock/mock-operations';
import {NewAgentComponent} from '../new-agent/new-agent.component';
import {AgentFieldsItem} from '../../../core/mock/mock-agents/mock-agents-questions';
import {FormaTwoFieldsItem} from '../../../core/mock/formats/formatwo';
import {NewFormatwoComponent} from '../new-formatwo/new-formatwo.component';
import {CoverageFieldsItem} from '../../../core/mock/coverage/coverage';
import {countryFieldsItems} from '../../../core/mock/formats/country';
import {NewCountryComponent} from '../new-country/new-country.component';
import {medicalFields} from '../../../core/mock/basic-questionnaires/medical';
import {sportsFields2} from '../../../core/mock/basic-questionnaires/sports-aviation-hobbies';
import {NewRowComponent} from '../../table-component/new-row/new-row.component';
import {Content} from '../../../models';
import {NewPaymentComponent} from '../new-payment/new-payment.component';
import {paymentFieldsItems} from 'src/app/core/mock/formats/payment';


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
  @Input() content?: Content;
  @Input() columnSettings?: any[];
  @Input() contentTypeId?: string;
  fields;
  formGroup: FormGroup;
  modalId;
  operations = BeneficiaryItemOperations;
  questionModal;
  maxItems;
  styleClass;
  enableOperations: boolean;
  showplus: boolean;
  itemAttrNames = [];
  tableIdFromModal: string;


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
      this.enableOperations = true;
      this.showplus = false;

    } else if (this.itemType === 'agent') {
      // this.fields = [];
      this.operations = BeneficiaryItemOperations;
      this.questionModal = '¿Está seguro que desea eliminar al agente de la lista?';
      this.maxItems = 2;
      this.styleClass = 'item-row-agent';
      this.showplus = false;
      this.enableOperations = true;
    } else if (this.itemType === 'disease') {
      // this.fields =  [];
      this.operations = BeneficiaryItemOperations;
      this.questionModal = '¿Está seguro que desea eliminar la enfermedad, lesión, estudio o tratamiento de la lista?';
      this.maxItems = 10;
      this.styleClass = 'item-row-agent';
      this.showplus = false;
      this.enableOperations = true;

    } else if (this.itemType === 'sport') {
      // this.fields =  sportsFields2;
      this.operations = this.operations = BeneficiaryItemOperations;
      this.questionModal = '¿Está seguro que desea eliminar la deporte / actividad de la lista?';
      this.maxItems = 5;
      this.styleClass = 'item-row-sport';
      this.showplus = false;
      this.enableOperations = true;

    } else if (this.itemType === 'formatwo') {
      this.fields = FormaTwoFieldsItem;
      this.operations = BeneficiaryItemOperations;
      this.questionModal = '¿Está seguro que desea eliminar al formato de la lista?';
      this.maxItems = 5;
      this.styleClass = 'item-row-formatwo';
      this.enableOperations = true;
      this.showplus = false;
    } else if (this.itemType === 'coverage') {
      this.fields = CoverageFieldsItem;
      // this.operations = BeneficiaryItemOperations;
      this.questionModal = '';
      this.maxItems = 50;
      this.styleClass = 'item-row-formatwo';
      this.enableOperations = false;
      this.showplus = true;
    } else if (this.itemType === 'country') {
      this.fields = countryFieldsItems;
      this.operations = BeneficiaryItemOperations;
      this.questionModal = '¿Está seguro que desea eliminar al formato de la lista?';
      this.maxItems = 3;
      this.styleClass = 'item-row-formatwo';
      this.enableOperations = true;
      this.showplus = false;
    } else if (this.itemType === 'payment') {
      this.fields = paymentFieldsItems;
      this.operations = BeneficiaryItemOperations;
      this.questionModal = '¿Está seguro que desea eliminar el registro de la lista?';
      this.maxItems = 3;
      this.styleClass = 'item-row-formatwo';
      this.enableOperations = true;
      this.showplus = false;
    }

    if (this.fields) {
      this.formGroup = this.applicationService.createNewFormGroup(this.fields);
      this.setFieldsValues();
    }

    if (this.columnSettings) {
      console.log('columnSettings');
      this.getItemAttrNames();
    }
    this.modalId = 'modal-' + this.itemType + this.index;
  }

  ngAfterViewInit(): void {
  }

  getItemAttrNames() {
    Object.keys(this.item).forEach((key, index) => {
      const searchResult = this.columnSettings.find(columnSetting => columnSetting.columnAttribute === key);
      if (searchResult) {
        this.itemAttrNames.push(key);
      }
    });
  }

  addNewItem() {
    let ref;
    if (this.itemType === 'beneficiary') {
      ref = this.dialog.open(NewBeneficiaryComponent, {data: null});
    } else if (this.itemType === 'agent') {
      ref = this.dialog.open(NewAgentComponent, {data: null});
    } else if (this.itemType === 'formatwo') {
      ref = this.dialog.open(NewFormatwoComponent, {data: null});
    } else if (this.itemType === 'coverage') {
      // ref = this.dialog.open(NewFormatwoComponent, {data: null});
    } else if (this.itemType === 'country') {
      ref = this.dialog.open(NewCountryComponent, {data: null});
    } else if (this.itemType === 'disease') {
      this.dialog.open(NewRowComponent,
        {
          data: {
            operations: ['cancelOperationR', 'addItemR'],
            content: this.content,
            drawerTitle: 'Enfermedad, lesión, estudio o tratamiento',
            itemType: 'disease',
            contentTypeId: this.contentTypeId
          }
        });
    } else if (this.itemType === 'sport') {
      ref = this.dialog.open(NewRowComponent,
        {
          data: {
            operations: ['cancelOperationR', 'addItemR'],
            content: this.content,
            drawerTitle: 'Deporte / Actividad',
            itemType: 'sport'
          }
        });
    } else if (this.itemType === 'payment') {
      ref = this.dialog.open(NewPaymentComponent, {data: null});
    }
  }

  deleteItem() {
    let propertyItem;
    if (this.itemType === 'beneficiary') {
      propertyItem = 'beneficiaryId';
    } else if (this.itemType === 'agent') {
      propertyItem = 'agentId';
    } else if (this.itemType === 'formatwo') {
      propertyItem = 'formatwoId';
    } else if (this.itemType === 'coverage') {
      propertyItem = 'coverageId';
    } else if (this.itemType === 'country') {
      propertyItem = 'countryId';
    } else if (this.itemType === 'disease') {
      propertyItem = 'idDisease';
    } else if (this.itemType === 'sport') {
      propertyItem = 'idSportActivity';
    } else if (this.itemType === 'payment') {
      propertyItem = 'paymentId';
      console.log('this.item: ', this.item);
    }
    if (this.contentTypeId) {
      console.log('contentTypeId: ', this.contentTypeId);
      this.applicationService.removeItem(this.item[propertyItem], this.itemType, this.contentTypeId);
    } else {
      console.log('with out contentTypeId');
      this.applicationService.removeItem(this.item[propertyItem], this.itemType);
    }
    this.closeModal(this.modalId);
  }

  editItem() {
    let ref;
    if (this.itemType === 'beneficiary') {
      ref = this.dialog.open(NewBeneficiaryComponent, {data: {item: this.item}});
    } else if (this.itemType === 'agent') {
      ref = this.dialog.open(NewAgentComponent, {data: {item: this.item}});
    } else if (this.itemType === 'formatwo') {
      ref = this.dialog.open(NewFormatwoComponent, {data: {item: this.item}});
    } else if (this.itemType === 'coverage') {
      // ref = this.dialog.open(NewFormatwoComponent, {data: {item: this.item}});
    } else if (this.itemType === 'country') {
      ref = this.dialog.open(NewCountryComponent, {data: {item: this.item}});
    } else if (this.itemType === 'disease') {
      this.dialog.open(NewRowComponent,
        {
          data: {
            operations: ['cancelOperationR', 'updateItemR'],
            content: this.content,
            drawerTitle: 'Enfermedad, lesión, estudio o tratamiento',
            itemType: 'disease',
            contentTypeId: this.contentTypeId,
            item: this.item
          }
        });
    } else if (this.itemType === 'sport') {
      this.dialog.open(NewRowComponent,
        {
          data: {
            operations: ['cancelOperationR', 'updateItemR'],
            content: this.content,
            drawerTitle: 'Deporte / Actividad',
            itemType: 'sport',
            item: this.item
          }
        });
    } else if (this.itemType === 'payment') {
      ref = this.dialog.open(NewPaymentComponent, {data: {item: this.item}});
    }
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

  getFormaTwoTypeLabel() {
    if (this.item.formatwoType === 'spouse') {
      return 'Cónyuge o concubina(o)';
    } else if (this.item.formatwoType === 'dependent') {
      return 'Dependiente económico';
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
    } else if (this.itemType === 'disease') {
      this.setFieldsValuesDynamically();

    } else if (this.itemType === 'sport') {
      this.setFieldsValuesDynamically();

    } else if (this.itemType === 'formatwo') {
      this.formGroup.controls[this.fields[0].name].setValue(this.item.formatwoBirthDate); // fatherLastName
    } else if (this.itemType === 'coverage') {
      // this.formGroup.controls[this.fields[0].name].setValue(this.item.coverageName);
      this.formGroup.controls[this.fields[0].name].setValue(this.item.assuredImport);
      this.formGroup.controls[this.fields[1].name].setValue(this.item.cost);

      // this.formGroup.controls[this.fields[2].name].setValue(this.item.detail);
    } else if (this.itemType === 'country') {
      // console.log('item: ', this.item);
      // this.formGroup.controls[this.fields[0].name].setValue(this.item.taxCountryId); // fatherLastName
    }
  }

  setFieldsValuesDynamically() {
    const itemAttrNames = [];
    Object.keys(this.item).forEach((key, index) => {
      if (index !== 0) { // skip the id attr to coindice with the fields
        itemAttrNames.push(key);
      }
    });

    this.fields.forEach((field, index) => {
      this.formGroup.controls[field.name].setValue(this.item[itemAttrNames[index]]);
    });
  }

  clearFields() {
    // console.log('onClear...', this.index);
    this.fields.forEach((field) => {
      // console.log('onClear...', field.value);
      field.value = '';
    });
  }

  openModal(modalId: string) {
    console.log('contentTypeId from openModal: ', this.contentTypeId);
    this.tableIdFromModal = this.contentTypeId;
    this.modalService.open(modalId);
  }

  closeModal(modalId: string) {
    this.modalService.close(modalId);
  }

  executeOperation(delegateOperation: string) {
    console.log('contentTypeId from executeOperation: ', this.contentTypeId);
    if (delegateOperation === 'closeModal') {
      this.closeModal(this.modalId);
    } else if (delegateOperation === 'deleteBeneficiary') {
      this.deleteItem();
    }
  }

  showPlus() {
    console.log('this.itemType: ', this.itemType);

    if (this.itemType === 'sport') {
      console.log('isLast: ', this.isLast);
      console.log('totalItems: ', this.totalItems);
      console.log('maxItems: ', this.maxItems);
      console.log('this.totalPercentageItems: ', this.totalParticipationPercentageItems);
    }

    if (this.isLast) {
      if (this.totalItems < this.maxItems) {
        if (this.totalParticipationPercentageItems < 100) {
          return true;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

}
