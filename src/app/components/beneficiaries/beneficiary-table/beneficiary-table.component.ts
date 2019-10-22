import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from '../../custom-modal';
import {ApplicationService} from '../../../core/services';
import {Content} from '../../../models';

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
  constructor(private modalService: ModalService,
              private applicationService: ApplicationService) { }

  ngOnInit() {
    // console.log('onInit of BeneficiaryTableComponent');
    // console.log('content: ', this.content);
    this.applicationService.beneficiaries.subscribe((value) => {
      this.beneficiaries = value;
    });
  }

  addNewBeneficiary(idModal: string) {
    // console.log('addNewBeneficiary...');
    this.modalService.open(idModal);
  }

  closeModal(modalId) {
    this.modalService.close(modalId);
  }
}
