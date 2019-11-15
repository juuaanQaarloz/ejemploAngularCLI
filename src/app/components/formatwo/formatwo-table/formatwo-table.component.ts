import {Component, Input, OnInit} from '@angular/core';
import {ApplicationService} from '../../../core/services';
import {DialogService} from '../../dialog/dialog.service';
import {Field} from '../../../models';
import {NewFormatwoComponent} from '../new-formatwo/new-formatwo.component';

const FIELDS: Field[] = [
];

@Component({
  selector: 'app-formatwo-table',
  templateUrl: './formatwo-table.component.html',
  styleUrls: ['./formatwo-table.component.css']
})
export class FormaTwoTableComponent implements OnInit {
  @Input() type: string;
  title = 'Formato dos';
  columnsNames = ['Caracter:',
    'Nombre',
    'Fecha de nacimiento',
    'RFC',
  ];
  formatosdos = [];

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

    if (this.type === 'table-formatwo') {
      this.title = 'Datos Formato dos';
      this.columnsNames = ['Caracter', 'Nombre', 'Fecha de nacimiento', 'RFC',
      ];
      this.content.fields.forEach((field) => {
        this.applicationService.addNewFormControl(this.applicationService.getFormGroup(), field);
      });
      this.applicationService.formatosdos.subscribe((value) => {
        this.formatosdos = value;
      });
    } else if (this.type === 'table-disseases') {}
  }
  addNewFormaTwo() {
     console.log('addNewFormaTwo-table ', 'addNewFormaTwo');
     const ref = this.dialog.open(NewFormatwoComponent, {data: null});
     ref.afterClosed.subscribe((result) => {
      console.log('dialog closed FROM FORMATWO TABLE, result: ', result);
    });
  }
}
