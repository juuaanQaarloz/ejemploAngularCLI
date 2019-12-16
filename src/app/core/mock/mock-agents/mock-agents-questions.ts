import {Field} from '../../../models';

export const AgentQuestion: Field[] = [
  {
    id: 'field-160',
    idHtml: 'txtTimeKnowAgent',
    name: 'timeKnowAgent',
    orderAppearance: 1,
    label: '1. ¿Cuánto tiempo hace que conoces al solicitante?',
    type: 'text',
    required: true,
    placeholder: '',
    length: '60',
    minValue: 0,
    maxValue: 60,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9\\s\\-\\.\\(\\)]*[A-ZÑ0-9\\s\\-\\.\\(\\)])(?:([A-ZÑ0-9\\s\\-\\.\\(\\)])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9\\s\\.\\-\\(\\)]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El campo es requerido',
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

export const AgentQuestion1: Field[] = [
  {
    id: 'field-161',
    idHtml: 'rdioSignAndReadConfirmation',
    name: 'signAndReadConfirmation',
    orderAppearance: 1,
    label: '2. ¿Te consta que el solicitante o contratante proporcionaron todos los datos capturados en esta solicitud ' +
      'y en su caso firmaron la carta aceptación?',
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

export const AgentFields: Field[] = [
  {
    id: 'field-162',
    idHtml: 'txtAgentName',
    name: 'agentName',
    orderAppearance: 1,
    label: 'Nombre*',
    type: 'text',
    required: true,
    placeholder: 'Nombre',
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Nombre del agente es obligatorio',
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
    id: 'field-163',
    idHtml: 'txtAgentPromotor',
    name: 'agentPromotor',
    orderAppearance: 2,
    label: 'Promotoría*',
    type: 'text',
    required: true,
    placeholder: 'Promotoría',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9]*[A-ZÑ0-9])(?:([A-ZÑ0-9])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Promotoría es obligatorio',
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
    id: 'field-163',
    idHtml: 'txtAgentKey',
    name: 'agentKey',
    orderAppearance: 3,
    label: 'Clave*',
    type: 'text',
    required: true,
    placeholder: 'Clave*',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Clave es obligatorio',
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
    id: 'field-164',
    idHtml: 'txtAgentParticipation',
    name: 'agentParticipation',
    orderAppearance: 4,
    label: 'Participación*',
    type: 'text',
    required: true,
    placeholder: 'Participación*',
    length: '5',
    minValue: 0,
    maxValue: 5,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9]*[A-ZÑ0-9])(?:([A-ZÑ0-9])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Participación es obligatorio',
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

export const AgentFieldsItem: Field[] = [
  {
    id: 'field-165',
    idHtml: 'txtAgentNameI',
    name: 'agentNameI',
    orderAppearance: 1,
    label: '',
    type: 'text',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Nombre del agente es obligatorio',
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
    id: 'field-166',
    idHtml: 'txtAgentPromotorI',
    name: 'agentPromotorI',
    orderAppearance: 2,
    label: '',
    type: 'text',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Promotoría es obligatorio',
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
    id: 'field-167',
    idHtml: 'txtAgentKeyI',
    name: 'agentKeyI',
    orderAppearance: 3,
    label: '',
    type: 'text',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Clave es obligatorio',
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
    id: 'field-168',
    idHtml: 'txtAgentParticipationI',
    name: 'agentParticipationI',
    orderAppearance: 4,
    label: '',
    type: 'text',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 5,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Participación es obligatorio',
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
