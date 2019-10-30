import {Component, OnInit} from '@angular/core';
import {ApplicationService} from '../../../core/services';
import {NewBeneficiaryComponent} from '../new-beneficiary/new-beneficiary.component';
import {DialogService} from '../../dialog/dialog.service';
import {Field} from '../../../models';
import {FormGroup} from '@angular/forms';

const FIELDS: Field[] = [
  {
    id: 'field-109',
    idHtml: 'txtAdditionalComments',
    name: 'additionalComments',
    label: 'Información adicional',
    orderAppearance: 1,
    type: 'text',
    required: false,
    placeholder: '',
    length: '200',
    minValue: 0,
    maxValue: 200,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: '',
    messageClass: '',
    messageError: '', // new
    messageErrorClass: '', // new
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '',
    entity: '',
    entityField: '',
    value: '',
    disable: false
  }
];

@Component({
  selector: 'app-beneficiary-table',
  templateUrl: './beneficiary-table.component.html',
  styleUrls: ['./beneficiary-table.component.css']
})
export class BeneficiaryTableComponent implements OnInit {
  title = 'Datos de Beneficiario(s)';
  columnsNames = ['Tipo de Beneficiario',
    'Nombre / Razón social',
    'Fecha de nacimiento / constitución',
    'Parentesco',
    'Porcentaje de participación',
  ];
  beneficiaries = [];

  content = {
    id: 'content-2.21',
    idParent: 'step-7',
    parentType: 'Step',
    idHtml: 'app-content-form-2.21',
    fields: FIELDS,
    showContent: true,
    styleClass: 'modal-type',
    renderConditions: '',
    contentType: 'looseFields'
  };

  form: FormGroup;

  constructor(private applicationService: ApplicationService,
              public dialog: DialogService) {
  }

  ngOnInit() {
    // console.log('onInit of BeneficiaryTableComponent');
    // console.log('content: ', this.content);
    this.form = this.applicationService.createNewFormGroup(this.content.fields);
    this.applicationService.beneficiaries.subscribe((value) => {
      this.beneficiaries = value;
      if (this.beneficiaries.length === 3) {
        this.form.controls.additionalComments.disable();
      } else {
        this.form.controls.additionalComments.enable();
      }
      console.log('beneficiaries.length: ', this.beneficiaries.length);
    });
  }

  addNewBeneficiary() {
    const ref = this.dialog.open(NewBeneficiaryComponent, {data: null});
    ref.afterClosed.subscribe((result) => {
      console.log('dialog closed FROM BENEFICIARY TABLE, result: ', result);
    });
  }
}
