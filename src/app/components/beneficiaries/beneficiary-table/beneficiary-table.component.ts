import {Component, Input, OnInit} from '@angular/core';
import {ApplicationService} from '../../../core/services';
import {NewBeneficiaryComponent} from '../new-beneficiary/new-beneficiary.component';
import {DialogService} from '../../dialog/dialog.service';
import {Field} from '../../../models';
import {NewAgentComponent} from '../new-agent/new-agent.component';
import {NewFormatwoComponent} from '../new-formatwo/new-formatwo.component';
import {NewCountryComponent} from '../new-country/new-country.component';

const FIELDS: Field[] = [
  {
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
  }
];

@Component({
  selector: 'app-beneficiary-table',
  templateUrl: './beneficiary-table.component.html',
  styleUrls: ['./beneficiary-table.component.css']
})
export class BeneficiaryTableComponent implements OnInit {
  @Input() type: string;
  @Input() showplus: boolean;
  title;
  columnsNames;
  items = [];
  itemsType;
  content: any;
  totalPercentageParticipation = 0;
  style;

  constructor(public applicationService: ApplicationService,
              public dialog: DialogService) {
  }

  ngOnInit() {

    if (this.type === 'table-beneficiary') {
      this.title = 'Datos de Beneficiario(s)';
      this.columnsNames = ['Tipo de Beneficiario', 'Nombre / Razón social', 'Fecha de nacimiento / constitución', 'Parentesco',
        'Porcentaje de participación',
      ];

      this.itemsType = 'beneficiary';
      this.showplus = true;

      this.content = {
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

      this.style = 'even-beneficiary';

      this.content.fields.forEach((field) => {
        this.applicationService.addNewFormControl(this.applicationService.getFormGroup(), field);
      });

      this.applicationService.beneficiaries.subscribe((value) => {
        this.items = value;
        this.totalPercentageParticipation = this.applicationService.getTotalParticipationPercentage('beneficiary');
      });
    } else if (this.type === 'table-agent') {
      this.title = 'Datos de Agente(s)';
      this.columnsNames = ['Nombre', 'Promotoría', 'Clave', 'Participación'
      ];

      this.itemsType = 'agent';
      this.style = 'even-agent';
      this.showplus = true;

      this.applicationService.agents.subscribe((value) => {
        this.items = value;
        this.totalPercentageParticipation = this.applicationService.getTotalParticipationPercentage('agent');
      });
    } else if (this.type ===  'table-formatfour') {
      this.title = 'Datos Formato Cuatro';
      this.columnsNames = ['Razon social', 'RFC', 'Fecha de constitución', 'Nombre comercial',
      ];
      this.style = 'even-beneficiary';
      this.showplus = true;
      /* this.content.fields.forEach((field) => {
        this.applicationService.addNewFormControl(this.applicationService.getFormGroup(), field);
      }); */

      /* this.applicationService.beneficiaries.subscribe((value) => {
        this.beneficiaries = value;
        this.totalPercentageParticipation = this.applicationService.getTotalParticipationPercentage();
      }); */
    } else if (this.type ===  'table-formathree') {
      this.title = 'Datos Formato Tres';
      this.columnsNames = ['Tipo de Persona', 'Nombre / Razón social', 'Fecha de nacimiento / constitución', 'RFC',
      ];
      this.style = 'even-beneficiary';
      this.showplus = true;
     /*  this.content.fields.forEach((field) => {
        this.applicationService.addNewFormControl(this.applicationService.getFormGroup(), field);
      }); */

      /* this.applicationService.beneficiaries.subscribe((value) => {
        this.beneficiaries = value;
        this.totalPercentageParticipation = this.applicationService.getTotalParticipationPercentage();
      }); */
    } else if (this.type ===  'table-country') {
      this.title = 'Paises';
      this.columnsNames = ['Pais', 'Numero de idenficación fiscal',
      ];
      this.itemsType = 'country';
      this.style = 'even-beneficiary';
      this.showplus = true;
      /* this.content.fields.forEach((field) => {
        this.applicationService.addNewFormControl(this.applicationService.getFormGroup(), field);
      }); */
      this.applicationService.countries.subscribe((value) => {
        this.items = value;
        // this.totalPercentageParticipation = this.applicationService.getTotalParticipationPercentage();
      });
    } else if (this.type ===  'table-formatwo') {
      this.title = 'Datos Formato dos';
      this.columnsNames = ['Caracter', 'Nombre', 'Fecha de nacimiento',
      ];
      this.itemsType = 'formatwo';
      this.style = 'even-beneficiary';
      this.showplus = true;
      /*this.content.fields.forEach((field) => {
        this.applicationService.addNewFormControl(this.applicationService.getFormGroup(), field);
      });*/
      this.applicationService.formatosdos.subscribe((value) => {
        this.items = value;
      });
    } else if (this.type ===  'table-coverage') {
      this.title = 'Beneficios adicionales disponibles para el plan';
      this.columnsNames = ['Contratar:', 'Cobertura', 'Suma asegurada', 'Prima', 'Detalle',
      ];
      this.itemsType = 'coverage';
      this.style = 'even-beneficiary';
      this.showplus = false;
      /*this.content.fields.forEach((field) => {
        this.applicationService.addNewFormControl(this.applicationService.getFormGroup(), field);
      });*/
      // coberturas = asignar
      this.applicationService.coverages.subscribe((value) => {
        this.items = value;
      });
    } else if (this.type ===  'table-formatwob') {
      this.title = 'Datos Formato dos';
      this.columnsNames = ['Caracter', 'Nombre', 'Fecha de nacimiento',
      ];
      this.itemsType = 'formatwob';
      this.style = 'even-beneficiary';
      this.showplus = true;
      /*this.content.fields.forEach((field) => {
        this.applicationService.addNewFormControl(this.applicationService.getFormGroup(), field);
      });*/
      this.applicationService.formatosdos.subscribe((value) => {
        this.items = value;
      });
    }
  }

  addNewItem() {
    let ref;
    if (this.type === 'table-beneficiary') {
      ref = this.dialog.open(NewBeneficiaryComponent, {data: null});
      ref.afterClosed.subscribe((result) => {
        // console.log('dialog closed FROM BENEFICIARY TABLE, result: ', result);
      });
    } else if (this.type === 'table-agent') {
      ref = this.dialog.open(NewAgentComponent, {data: null});
      ref.afterClosed.subscribe((result) => {
        // console.log('dialog closed FROM AGENT TABLE, result: ', result);
      });
    } else if (this.type === 'table-formatwo') {
      ref = this.dialog.open(NewFormatwoComponent, {data: null});
      ref.afterClosed.subscribe((result) => {
        console.log('dialog closed FROM FORMATWO TABLE, result: ', result);
      });
    } else if (this.type === 'table-coverage') {
      // ref = this.dialog.open(NewFormatwoComponent, {data: null});
      /* ref.afterClosed.subscribe((result) => {
        console.log('dialog closed FROM FORMATWO TABLE, result: ', result);
      }); */
    } else if (this.type === 'table-country') {
      ref = this.dialog.open(NewCountryComponent, {data: null});
      ref.afterClosed.subscribe((result) => {
        console.log('dialog closed FROM OUNTRY TABLE, result: ', result);
      });
    }
  }
}
