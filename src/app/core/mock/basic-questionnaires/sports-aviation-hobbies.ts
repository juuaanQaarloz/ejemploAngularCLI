import {Field} from '../../../models';

export const sportsQuestions1: Field[] = [
  {
    id: 'field-143',
    idHtml: 'radioAviationQuestion',
    name: 'aviationQuestion',
    orderAppearance: 1,
    label: '1. ¿Vuelas como piloto o pasajero en lineas o aeronaves privadas incluyendo helicóptero?',
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-144',
    idHtml: 'radioMotobickeQuestion',
    name: 'motobickeQuestion',
    orderAppearance: 2,
    label: '2. ¿Utilizas motocicleta?',
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  }
];

export const sportsFields1: Field[] = [
  {
    id: 'field-145',
    idHtml: 'textFrequency',
    name: 'frequency',
    orderAppearance: 1,
    label: 'Frecuencia*',
    type: 'text',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 10,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Frecuencia es un campo obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(motobickeQuestion=true)',
    enableConditions: '',
    requiredConditions: '(motobickeQuestion=true)',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-146',
    idHtml: 'textDisplacement',
    name: 'displacement',
    orderAppearance: 2,
    label: 'Cilindrada*',
    type: 'text',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 10,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Cilindrada es un campo obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(motobickeQuestion=true)',
    enableConditions: '',
    requiredConditions: '(motobickeQuestion=true)',
    entity: '',
    entityField: '',
    value: ''
  }
];

export const sportQuestions2: Field[] = [
  {
    id: 'field-147',
    idHtml: 'radioExtremeSportsQuestion',
    name: 'extremeSportsQuestion',
    orderAppearance: 1,
    label: '3. En más de 5 veces al año, ' +
      '¿Prácticas automovilismo, vuelos no motorizados ( paracaidismo, ala delta, vuelo sin motor), ' +
      'o practicas caza, equitación, buceo, montañismo, lancha de motor, esquí de nieve, esquí acuático, ' +
      'corrida de toros o cherrería o algún otro deporte o afición de alto riesgo o deportes externos?',
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  }
];

export const sportsFields2: Field[] = [
  {
    id: 'field-148',
    idHtml: 'slctExtremeSports',
    name: 'extremeSports',
    orderAppearance: 1,
    label: 'Deporte / actividad*',
    type: 'select',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'genders',
    sourceStructure: ['id', 'name', 'code'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Deporte / actividad es un campo obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'extremeSportsQuestion=true',
    enableConditions: '',
    requiredConditions: 'extremeSportsQuestion=true',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-149',
    idHtml: 'slctPeriodicity',
    name: 'periodicity',
    orderAppearance: 2,
    label: 'Frecuencia*',
    type: 'select',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'genders',
    sourceStructure: ['id', 'name', 'code'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Frecuencia es un campo obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'extremeSportsQuestion=true',
    enableConditions: '',
    requiredConditions: 'extremeSportsQuestion=true',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-150',
    idHtml: 'txtOtherActivity',
    name: 'otherActivity',
    orderAppearance: 3,
    label: 'Describir otra actividad*',
    type: 'text',
    required: false,
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
    message: 'Describir otra actividad es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'extremeSportsQuestion=true',
    enableConditions: '',
    requiredConditions: 'extremeSportsQuestion=true',
    entity: '',
    entityField: '',
    value: ''
  }
];
