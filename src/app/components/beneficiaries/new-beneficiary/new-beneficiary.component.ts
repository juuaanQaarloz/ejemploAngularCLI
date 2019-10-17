import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from '../../custom-modal';
import {Beneficiarios, MockOperations} from '../../../core/mock/mock-data';
import {ApplicationService} from '../../../core/services';

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
    renderConditions: ''
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
