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
    delegateOperationParameters: null,
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
    delegateOperation: 'validateStep',
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
  },
  {
    id: 'opt-4',
    idHtml: 'btnUploadInstructionLetter',
    name: 'uploadInstructionLetter',
    label: 'CARGAR DOCUMENTOS',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'uploadInstructionLetter',
    renderConditions: '(beneficiaryType=fidPerson)',
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

export const SearchOccupationOperations: Operation[] = [
  {
    id: 'opt-1',
    idHtml: 'btnSearchOccupation',
    name: 'searchOccupation',
    label: 'BUSCAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'searchOccupation',
    renderConditions: '',
    enableConditions: ''
  }
];

export const SearchOccupationOperationsS: Operation[] = [
  {
    id: 'opt-1',
    idHtml: 'btnSearchOccupationS',
    name: 'searchOccupationS',
    label: 'BUSCAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'searchOccupationS',
    renderConditions: '',
    enableConditions: ''
  }
];

export const SearchOccupationOperationsM: Operation[] = [
  {
    id: 'opt-1',
    idHtml: 'btnSearchOccupationM',
    name: 'searchOccupationM',
    label: 'BUSCAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'searchOccupationM',
    renderConditions: '',
    enableConditions: ''
  }
];

export const APPL_OPERATIONS: Operation[] = [
  {
    id: 'opt-1',
    idHtml: 'btnGeneratePDF',
    name: 'generatePDF',
    label: 'PDF',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'generatePDF',
    renderConditions: '',
    enableConditions: ''
  },
  {
    id: 'opt-2',
    idHtml: 'btnValidateApplication',
    name: 'validateApplication',
    label: 'VALIDAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'validateApplication',
    renderConditions: '',
    enableConditions: ''
  }
];

export const pdfOperation = {
  id: 'opt-1',
  idHtml: 'btnGeneratePDF',
  name: 'generatePDF',
  label: 'PDF',
  type: 'button',
  style: '',
  styleClass: 'ml-button-primary',
  message: '',
  messageClass: '',
  delegateOperation: 'generatePDF',
  renderConditions: '',
  enableConditions: ''
};

export const AgentsOperations: Operation[] = [
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

export const RowOperations: Operation[] = [
  {
    id: 'opt-1',
    idHtml: 'btnCancelR',
    name: 'cancelOperationR',
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
    idHtml: 'btnAddNewItemR',
    name: 'addItemR',
    label: 'AGREGAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'addNewItem',
    renderConditions: '',
    enableConditions: ''
  },
  {
    id: 'opt-3',
    idHtml: 'btnUpdateItemR',
    name: 'updateItemR',
    label: 'GUARDAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'updateItem',
    renderConditions: '',
    enableConditions: '',
  }
];


export const FormatwoOperations: Operation[] = [
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
  },
  {
    id: 'opt-4',
    idHtml: 'btnUploadInstructionLetter',
    name: 'uploadInstructionLetter',
    label: 'CARGAR DOCUMENTOS',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'uploadInstructionLetter',
    renderConditions: '(beneficiaryType=fidPerson)',
    enableConditions: '',
  }
];

export const OKOPT: Operation = {
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

export const CLOSE_MODALS_OPT: Operation = {
  id: 'opt-1',
  idHtml: 'btnClose',
  name: 'cerrar',
  label: 'CERRAR',
  type: 'button',
  style: '',
  styleClass: 'ml-button-primary',
  message: '',
  messageClass: '',
  delegateOperation: 'closeModal',
  renderConditions: '',
  enableConditions: ''
};
