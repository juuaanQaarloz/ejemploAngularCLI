import {Component, Input, OnInit} from '@angular/core';
import {ApplicationService} from '../../../core/services';
import {DialogService} from '../../dialog/dialog.service';
import {Field} from '../../../models';

const FIELDS: Field[] = [
];

@Component({
  selector: 'app-coverage-table',
  templateUrl: './coverage-table.component.html',
  styleUrls: ['./coverage-table.component.css']
})
export class CoverageTableComponent implements OnInit {
  @Input() type: string;
  title = 'Beneficios Adicionales Disponibles para el Plan';
  columnsNames = ['Contratar:',
    'Cobertura',
    'Suma asegurada',
    'Prima', 'Detalle',
  ];
  coverturas = [];

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

    if (this.type === 'table-coverage') {
      this.title = 'Beneficios Adicionales Disponibles para el Plan';
      this.columnsNames = ['Contratar:', 'Cobertura', 'Suma asegurada', 'Prima', 'Detalle',
      ];
      this.content.fields.forEach((field) => {
        this.applicationService.addNewFormControl(this.applicationService.getFormGroup(), field);
      });
      // this.style = 'even-beneficiary';

      /* this.applicationService.beneficiaries.subscribe((value) => {
        this.beneficiaries = value;
        this.totalPercentageParticipation = this.applicationService.getTotalParticipationPercentage();
      }); */
    } else if (this.type === 'table-disseases') {}
  }
  addNewFormaTwo() {
    /* const ref = this.dialog.open(NewBeneficiaryComponent, {data: null});
    ref.afterClosed.subscribe((result) => {
      console.log('dialog closed FROM BENEFICIARY TABLE, result: ', result);
    }); */
  }
}
