import {Component, Input, OnInit} from '@angular/core';
import {ApplicationService} from '../../../core/services';
// import {NewBeneficiaryComponent} from '../new-beneficiary/new-beneficiary.component';
import {DialogService} from '../../dialog/dialog.service';
import {Field} from '../../../models';

const FIELDS: Field[] = [
  /*  {
     id: 'field-117',
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
   }  */
];

@Component({
  selector: 'app-formatfour-table',
  templateUrl: './formatfour-table.component.html',
  styleUrls: ['./formatfour-table.component.css']
})
export class FormaFourTableComponent implements OnInit {
  @Input() type: string;
  title = 'Formato cuatro';
  columnsNames = ['Razon social',
    'RFC',
    'Fecha de constitución',
    'Nombre comercial',
  ];
  formatoscuatro = [];

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

    if (this.type === 'table-formatfour') {
      this.title = 'Datos Formato Cuatro';
      this.columnsNames = ['Razon social', 'RFC', 'Fecha de constitución', 'RFC','Nombre comercial',
      ];
      this.content.fields.forEach((field) => {
        this.applicationService.addNewFormControl(this.applicationService.getFormGroup(), field);
      });

      /* this.applicationService.beneficiaries.subscribe((value) => {
        this.beneficiaries = value;
        this.totalPercentageParticipation = this.applicationService.getTotalParticipationPercentage();
      }); */
    } else if (this.type === 'table-disseases') {}
  }
  addNewFormatFour() {
    /* const ref = this.dialog.open(NewBeneficiaryComponent, {data: null});
    ref.afterClosed.subscribe((result) => {
      console.log('dialog closed FROM BENEFICIARY TABLE, result: ', result);
    }); */
  }
}
