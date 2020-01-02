import { Component, OnInit } from '@angular/core';
import {AgentsOperations} from '../../../core/mock/mock-operations';
import {AgentFields} from '../../../core/mock/mock-agents/mock-agents-questions';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../../core/services';
import {DialogConfig} from '../../dialog/dialog-config';
import {DialogRef} from '../../dialog/dialog-ref';
import {ModalService} from '../../custom-modal';
import {Operation} from '../../../models';
import {FORM_MSG_ERROR} from '../../../core/mock/errors/mock-erros-datos-plan';

@Component({
  selector: 'app-new-agent',
  templateUrl: './new-agent.component.html',
  styleUrls: ['./new-agent.component.css']
})
export class NewAgentComponent implements OnInit {

  content = {
    id: 'content-2.32',
    idParent: 'step-20',
    parentType: 'Step',
    idHtml: 'app-content-form-2.32',
    fields: AgentFields,
    operations: AgentsOperations,
    showContent: true,
    styleClass: 'modal-type',
    renderConditions: '',
    contentType: 'looseFields'
  };

  okOperation: Operation = {
    id: 'opt-1',
    idHtml: 'btnOK',
    name: 'OK',
    label: 'OK',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'closeModal',
    renderConditions: '',
    enableConditions: ''
  };

  formGroup: FormGroup;
  operationType: string;
  modalID = 'modal-warning1';
  modalMessage;
  showFormError = false;
  formMsgError = FORM_MSG_ERROR;

  constructor(private applicationService: ApplicationService,
              public config: DialogConfig,
              public dialog: DialogRef,
              private modalService: ModalService) { }

  ngOnInit() {

    this.formGroup = this.applicationService.createNewFormGroup(this.content.fields);
    if (this.config.data !== null) {
      this.operationType = 'edit';
      this.setAgentValues();
    } else {
      this.operationType = 'add';
    }
  }

  setAgentValues() {
    this.content.fields.forEach((field) => {
      let value;
      switch (field.name) {
        case 'agentName':
          value = this.config.data.item.name;
          break;
        case 'agentPromotor':
          value = this.config.data.item.promotor;
          break;
        case 'agentKey':
          value = this.config.data.item.key;
          break;
        case 'agentParticipation':
          value = this.config.data.item.participation;
          break;
      }
      this.formGroup.controls[field.name].setValue(value);
    });
  }

  addNewAgent() {
    const formStatus = this.getFormStatus();
    if (formStatus === 'VALID') {
      const newAgent = this.mapNewAgentData();

      const response = this.applicationService.addItem(newAgent, 'agent');

      if (response.status) {
        this.closeDialog();
      } else {
        this.modalMessage = response.message;
        this.modalService.open(this.modalID);
      }
    } else {
      this.showFormError = true;
    }
  }

  mapNewAgentData() {
    const newMappedAgent = {
      agentId: (this.applicationService.getLastItemId('agent') + 1).toString(),
      name: this.formGroup.controls.agentName.value,
      key: this.formGroup.controls.agentKey.value,
      promotor: this.formGroup.controls.agentPromotor.value,
      participation: this.formGroup.controls.agentParticipation.value
    };
    return newMappedAgent;
  }

  closeDialog() {
    this.dialog.close();
  }

  closeModal(modalID: string) {
    this.modalService.close(modalID);
  }

  executeOperation(delegateOperation: string) {
    if (delegateOperation === 'closeDialog') {
      this.closeDialog();
    } else if (delegateOperation === 'addNewBeneficiary') {
      this.addNewAgent();
    } else if (delegateOperation === 'updateBeneficiary') {
      this.updateAgent();
    } else if (delegateOperation === 'closeModal') {
      this.modalService.close(this.modalID);
    }
  }

  updateAgent() {
    const formStatus = this.getFormStatus();
    if (formStatus === 'VALID') {
      const updatedAgent = this.mapAgentData();
      const response = this.applicationService.updateItem(updatedAgent, 'agent');
      if (response.status) {
        this.closeDialog();
      } else {
        this.modalMessage = response.message;
        this.modalService.open(this.modalID);
      }
    }
  }

  mapAgentData() {
    const mappedAgent = {
      agentId: this.config.data.item.agentId,
      name: this.formGroup.controls.agentName.value,
      key: this.formGroup.controls.agentKey.value,
      promotor: this.formGroup.controls.agentPromotor.value,
      participation: this.formGroup.controls.agentParticipation.value
    };
    return mappedAgent;
  }

  getFormStatus() {
    return this.formGroup.status;
  }

}
