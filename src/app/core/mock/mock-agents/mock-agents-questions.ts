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
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '',
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
    name: '1ignAndReadConfirmation',
    orderAppearance: 1,
    label: '2. ¿Te consta que el cliente llenó y firmo esta solicitud?',
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
    style: 'margin:0 auto',
    styleClass: 'radio-options',
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
