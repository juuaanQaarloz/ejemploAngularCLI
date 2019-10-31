import {Component, OnInit} from '@angular/core';
import {ApplicationService} from '../../../core/services';
import {NewBeneficiaryComponent} from '../new-beneficiary/new-beneficiary.component';
import {DialogService} from '../../dialog/dialog.service';
import {Field} from '../../../models';

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
    length: '750',
    minValue: 0,
    maxValue: 750,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La información adicional no pueden exceder los 750 caracteres',
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

  totalPercentageParticipation = 0;

  constructor(public applicationService: ApplicationService,
              public dialog: DialogService) {
  }

  ngOnInit() {

    this.content.fields.forEach((field) => {
      this.applicationService.addNewFormControl(this.applicationService.getFormGroup(), field);
    });

    this.applicationService.beneficiaries.subscribe((value) => {
      this.beneficiaries = value;
      this.totalPercentageParticipation = this.applicationService.getTotalParticipationPercentage();
    });
  }

  addNewBeneficiary() {
    const ref = this.dialog.open(NewBeneficiaryComponent, {data: null});
    ref.afterClosed.subscribe((result) => {
      console.log('dialog closed FROM BENEFICIARY TABLE, result: ', result);
    });
  }
}
