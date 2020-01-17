import {Field} from '../../../models';

export const sportsQuestions1: Field[] = [
  {
    id: 'field-143',
    idHtml: 'radioAviationQuestion',
    name: 'aviationQuestion',
    orderAppearance: 1,
    label: '1. ¿Vuelas como piloto o pasajero en líneas o aeronaves privadas incluyendo helicóptero?',
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: 'applicationExtension.sprt_flg_ind',
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
    style: '',
    styleClass: '',
    styleClassError: '',
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: 'applicationExtension.sprt_mtrc_ind',
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
    length: '10',
    minValue: 0,
    maxValue: 10,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9\\s\\-\\.\\(\\)]*[A-ZÑ0-9\\s\\-\\.\\(\\)])(?:([A-ZÑ0-9\\s\\-\\.\\(\\)])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9\\s\\.\\-\\(\\)]/',
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
    entityField: 'applicationExtension.sprt_mtrc_fqncy',
    value: ''
  },
  {
    id: 'field-146',
    idHtml: 'textDisplacement',
    name: 'displacement',
    orderAppearance: 2,
    label: 'Cilindrada*',
    type: 'select',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'cilindrada',
    sourceStructure: ['key', 'keyValue', 'key'],
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
    entityField: 'applicationExtension.sprt_mtrc_cilnd',
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
      '¿Practicas automovilismo, vuelos no motorizados (paracaidismo, ala delta, vuelo sin motor), ' +
      'o practicas caza, equitación, buceo, montañismo, lancha de motor, esquí de nieve, esquí acuático, ' +
      'corrida de toros o charrería o algún otro deporte o afición de alto riesgo o deportes extremos?',
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: 'applicationExtension.sprt_xtrm_ind',
    value: ''
  }
];

export const sportsFields2: Field[] = [
  {
    id: 'field-148',
    idHtml: 'slctExtremeSports',
    name: 'extremeSports',
    orderAppearance: 1,
    label: '',
    type: 'text',
    required: true,
    placeholder: '',
    length: '200',
    minValue: 0,
    maxValue: 200,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9\\s\\-\\.\\(\\)]*[A-ZÑ0-9\\s\\-\\.\\(\\)])(?:([A-ZÑ0-9\\s\\-\\.\\(\\)])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9\\s\\.\\-\\(\\)]/',
    source: 'IPRE',
    sourceID: 'gender',
    sourceStructure: ['key', 'keyValue', 'key'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Deporte / actividad es un campo obligatorio',
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
    id: 'field-149',
    idHtml: 'slctPeriodicity',
    name: 'periodicity',
    orderAppearance: 2,
    label: '',
    type: 'text',
    required: true,
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
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-150',
    idHtml: 'txtOtherActivity',
    name: 'otherActivity',
    orderAppearance: 3,
    label: '',
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
    renderConditions: '(extremeSports=M)',
    enableConditions: '',
    requiredConditions: '(extremeSports=M)',
    entity: '',
    entityField: '',
    value: ''
  }
];

export const sportsFieldsDialog: Field[] = [
  {
    id: 'field-148',
    idHtml: 'slctExtremeSportsD',
    name: 'extremeSportsD',
    orderAppearance: 1,
    label: 'Deporte / Actividad*',
    type: 'autocomplete',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s\\.\\-]*[A-ZÑ\\s\\.\\-()])(?:([A-ZÑ\\s\\.\\-()])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s\\.\\-]/',
    source: 'IPRE',
    sourceID: 'sports',
    sourceStructure: ['sportId', 'alias', 'sportId'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Deporte / actividad es un campo obligatorio',
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
    id: 'field-149',
    idHtml: 'slctPeriodicityD',
    name: 'periodicityD',
    orderAppearance: 2,
    label: 'Frecuencia*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '10',
    minValue: 0,
    maxValue: 10,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9\\s\\-\\.\\(\\)]*[A-ZÑ0-9\\s\\-\\.\\(\\)])(?:([A-ZÑ0-9\\s\\-\\.\\(\\)])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9\\s\\.\\-\\(\\)]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Frecuencia es un campo obligatorio',
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
    id: 'field-150',
    idHtml: 'txtOtherActivityD',
    name: 'otherActivityD',
    orderAppearance: 3,
    label: 'Descripción',
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
    message: 'Descripción es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(extremeSportsD=OTRO)',
    enableConditions: '',
    requiredConditions: '(extremeSportsD=OTRO)',
    entity: '',
    entityField: '',
    value: ''
  }
];
