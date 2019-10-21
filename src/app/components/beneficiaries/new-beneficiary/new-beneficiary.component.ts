import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from '../../custom-modal';

import {ApplicationService} from '../../../core/services';
import {Beneficiarios} from '../../../core/mock/mock-beneficiaries';
import {MockOperations} from '../../../core/mock/mock-operations';

@Component({
  selector: 'app-new-beneficiary',
  templateUrl: './new-beneficiary.component.html',
  styleUrls: ['./new-beneficiary.component.css']
})
export class NewBeneficiaryComponent implements OnInit {
  @Input() modalId: string;
  content = {
    id: '3',
    idParent: '1',
    parentType: 'Step',
    idHtml: 'step-3',
    fields: Beneficiarios,
    operations: MockOperations,
    showContent: true,
    styleClass: 'ml-form-modal-type',
    renderConditions: '',
    contentType: 'looseFields'
  };

  constructor(private modalService: ModalService,
              private applicationService: ApplicationService) {
  }

  ngOnInit() {
    console.log('content style class: ', this.content.styleClass);
  }

  closeModal() {
    this.modalService.close(this.modalId);
  }

}
