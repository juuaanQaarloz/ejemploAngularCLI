import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from '../../custom-modal';

import {ApplicationService} from '../../../core/services';
import {Beneficiarios} from '../../../core/mock/mock-beneficiaries';
import {MockOperations} from '../../../core/mock/mock-operations';
import {Content} from '../../../models';
import {MockContentStep7Process1ContentSection2} from '../../../core/mock/mock-contents';

@Component({
  selector: 'app-new-beneficiary',
  templateUrl: './new-beneficiary.component.html',
  styleUrls: ['./new-beneficiary.component.css']
})
export class NewBeneficiaryComponent implements OnInit {
  @Input() modalId: string;
  // @Input() content: Content;
  /*content = {
    id: 'content-2.19',
    idParent: 'step-7',
    parentType: 'Step',
    idHtml: 'app-content-form-2.18',
    fields: Beneficiarios,
    operations: MockOperations,
    showContent: true,
    styleClass: 'modal-type',
    renderConditions: '',
    contentType: 'looseFields'
  };*/
  content = MockContentStep7Process1ContentSection2[1];

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
