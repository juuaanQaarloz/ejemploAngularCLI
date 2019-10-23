import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../custom-modal';
import {ApplicationService} from '../../../core/services';
import {NewBeneficiaryComponent} from '../new-beneficiary/new-beneficiary.component';
import {DialogService} from '../../dialog/dialog.service';

@Component({
  selector: 'app-beneficiary-table',
  templateUrl: './beneficiary-table.component.html',
  styleUrls: ['./beneficiary-table.component.css']
})
export class BeneficiaryTableComponent implements OnInit {
  // @Input() content: Content;
  title = 'Datos de Beneficiario(s)';
  columnsNames = ['Tipo de Beneficiario',
    'Nombre / Razón social',
    'Fecha de nacimiento / constitución',
    'Parentesco',
    'Porcentaje de participación',
  ];
  beneficiaries = [];

  constructor(private applicationService: ApplicationService,
              public dialog: DialogService) {
  }

  ngOnInit() {
    // console.log('onInit of BeneficiaryTableComponent');
    // console.log('content: ', this.content);
    this.applicationService.beneficiaries.subscribe((value) => {
      this.beneficiaries = value;
    });
  }

  addNewBeneficiary() {
    const ref = this.dialog.open(NewBeneficiaryComponent, {data: null});
    ref.afterClosed.subscribe((result) => {
      console.log('dialog closed FROM BENEFICIARY TABLE, result: ', result);
    });
  }
}
