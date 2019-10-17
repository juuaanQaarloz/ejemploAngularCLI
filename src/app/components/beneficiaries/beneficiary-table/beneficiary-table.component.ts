import { Component, OnInit } from '@angular/core';
import {ModalService} from '../../custom-modal';
import {ApplicationService} from '../../../core/services';

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
  constructor(private modalService: ModalService,
              private applicationService: ApplicationService) { }

  ngOnInit() {
    this.applicationService.beneficiaries.subscribe((value) => {
      this.beneficiaries = value;
    });
  }

  addNewBeneficiary() {
    console.log('addNewBeneficiary...');
    this.modalService.open('add-beneficiary-modal-1');
  }

  closeModal(modalId) {
    this.modalService.close(modalId);
  }
}
