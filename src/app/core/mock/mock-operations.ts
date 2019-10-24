import {Operation} from '../../models';

export const MockOperations: Operation[] = [
  {
    id: '1',
    idHtml: 'btnClose',
    name: 'close',
    label: 'CERRAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'closeStep',
    renderConditions: '',
    enableConditions: '',
  },
  {
    id: '2',
    idHtml: 'btnValidate',
    name: 'validate',
    label: 'VALIDAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'validateStep',
    renderConditions: '',
    enableConditions: '',
  },
  {
    id: '3',
    idHtml: 'btnNext',
    name: 'next',
    label: 'SIGUIENTE',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'nextStep',
    renderConditions: '',
    enableConditions: '',
  }
];

export const BeneficiariesOperations: Operation[] = [
  {
    id: 'opt-1',
    idHtml: 'btnCancel',
    name: 'cancelar',
    label: 'Cancelar',
    type: 'button',
    style: '',
    styleClass: 'ml-link',
    message: '',
    messageClass: '',
    delegateOperation: 'closeDialog',
    renderConditions: '',
    enableConditions: '',
  },
  {
    id: 'opt-2',
    idHtml: 'btnAddBeneficiary',
    name: 'addBeneficiary',
    label: 'AGREGAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'addNewBeneficiary',
    renderConditions: '',
    enableConditions: ''
  },
  {
    id: 'opt-3',
    idHtml: 'btnUpdateBeneficiary',
    name: 'updateBeneficiary',
    label: 'GUARDAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'updateBeneficiary',
    renderConditions: '',
    enableConditions: '',
  }
];

export const BeneficiaryItemOperations: Operation[] = [
  {
    id: 'opt-1',
    idHtml: 'btnCancel',
    name: 'cancelar',
    label: 'Cancelar',
    type: 'button',
    style: '',
    styleClass: 'ml-link',
    message: '',
    messageClass: '',
    delegateOperation: 'closeModal',
    renderConditions: '',
    enableConditions: '',
  },
  {
    id: 'opt-2',
    idHtml: 'btnDeleteBeneficiary',
    name: 'deleteBeneficiary',
    label: 'ELIMINAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'deleteBeneficiary',
    renderConditions: '',
    enableConditions: ''
  }
];


