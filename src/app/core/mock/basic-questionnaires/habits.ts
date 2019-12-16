import {Field} from '../../../models';

export const habitsQuestions: Field[] = [
  {
    id: 'field-151',
    idHtml: 'radioSmokeQuestion',
    name: 'smokeQuestion',
    orderAppearance: 1,
    label: '1. ¿Fuma? (considerar cigarro electrónico)',
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
    entityField: '',
    value: ''
  },
  {
    id: 'field-152',
    idHtml: 'radioDrugsQuestion',
    name: 'drugsQuestion',
    orderAppearance: 2,
    label: '¿Usa drogas o estimulantes?',
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
    entityField: '',
    value: ''
  }
];

export const habitsFields: Field[] = [
  {
    id: 'field-175',
    idHtml: 'txtWeight',
    name: 'weight',
    orderAppearance: 1,
    label: '2. ¿Cuál es su peso?*',
    type: 'text',
    required: true,
    placeholder: 'Peso en kilogramos',
    length: '4',
    minValue: 0,
    maxValue: 4,
    pattern: '/^-?\\b([1-9][0-9]|1?[1-3][0-9]{2,2}|2?4[0]{2,2})\\b$/',
    noAllowedCharactersPattern: '/[\\D]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Peso es un campo requerido y su valor debe estar entre 2 y 400 kg',
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
    id: 'field-176',
    idHtml: 'txtHeight',
    name: 'height',
    orderAppearance: 2,
    label: '¿Cuál es su estatura?*',
    type: 'text',
    required: true,
    placeholder: 'Estatura en metros',
    length: '6',
    minValue: 0,
    maxValue: 6,
    pattern: '/^-?\\b([1-9][0-9]|1?[1-3][0-9]{2,2}|2?4[0]{2,2})\\b$/',
    noAllowedCharactersPattern: '/[\\D]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Estatura es un campo requerido y su valor debe estar entre 1.0 y 2.5 mts',
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

export const habitsQuestions2: Field[] = [
  {
    id: 'field-153',
    idHtml: 'radioWeightQuestion',
    name: 'weightQuestion',
    orderAppearance: 3,
    label: '3. ¿Haz aumentado o disminuido más de 7 kilográmos de tu peso en los últimos 12 meses?',
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
    entityField: '',
    value: ''
  }
];
