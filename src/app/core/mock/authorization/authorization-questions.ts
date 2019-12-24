import {Field} from '../../../models';

export const AuthorizationQuestions1: Field[] = [
  {
    id: 'field-169',
    idHtml: 'rdioDeclarationQuestion',
    name: 'declarationQuestion',
    orderAppearance: 1,
    label: '1. ¿El Cliente / Contratante desea manifestar algún hecho importante?',
    type: 'radio',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'guardBoxOptions',
    sourceStructure: ['id', 'label', 'value'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Debe elegirse un valor',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '',
    entity: '',
    entityField: '',
    value: ''
  }
];

export const AuthorizationFields1: Field[] = [
  {
    id: 'field-170',
    idHtml: 'textDeclaration',
    name: 'declaration',
    orderAppearance: 1,
    label: 'Descripción',
    type: 'text',
    required: false,
    placeholder: 'Descripción',
    length: '',
    minValue: 0,
    maxValue: 500,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Descripción es obligatorio y no debe exeder los 500 caracteres',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(declarationQuestion=true)',
    enableConditions: '',
    requiredConditions: '(declarationQuestion=true)',
    entity: '',
    entityField: '',
    value: ''
  }
];

export const AuthorizationQuestions2: Field[] = [
  {
    id: 'field-171',
    idHtml: 'rdioDocumentationAuthorizationQuestion',
    name: 'documentationAuthorizationQuestion',
    orderAppearance: 1,
    label: '2. ¿Te consta que el solicitante o contratante proporcionaron todos los datos capturados en esta solicitud' +
      ' y en su caso firmaron la carta aceptación?',
    type: 'radio',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'guardBoxOptions',
    sourceStructure: ['id', 'label', 'value'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Debe elegirse un valor',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-172',
    idHtml: 'rdioConfirmationInformationQuestion',
    name: 'confirmationInformationQuestion',
    orderAppearance: 2,
    label: '3. ¿El Cliente / Contratante ha recibido la información total y completa del seguro producto que se propone?',
    type: 'radio',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'guardBoxOptions',
    sourceStructure: ['id', 'label', 'value'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Debe elegirse un valor',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-173',
    idHtml: 'rdioRightsConfirmationQuestion',
    name: 'rightsConfirmationQuestion',
    orderAppearance: 3,
    label: '4. ¿El Cliente / Contratante ha recibido toda la información de los derechos básicos de los contratantes,' +
      ' asegurados y beneficiarios?',
    type: 'radio',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'guardBoxOptions',
    sourceStructure: ['id', 'label', 'value'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Debe elegirse un valor',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '',
    entity: '',
    entityField: '',
    value: ''
  }
];
