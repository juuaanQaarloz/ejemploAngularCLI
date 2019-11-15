import {Field} from '../../../models';


export const Plan1: Field[] = [
  {
    id: 'field-1401',
    idHtml: 'slctPacking',
    name: 'packing',
    orderAppearance: 1,
    label: 'Empaquetamiento',
    type: 'select',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'packing',
    sourceStructure: ['id', 'name', 'code'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Seleccionar un tipo de empaquetamiento.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: ''
  },{
    id: 'field-1402',
    idHtml: 'radioCoverageOptions',
    name: 'coverageOptions',
    orderAppearance: 2,
    label: 'Tipo de cobertura',
    type: 'radio',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'coverageOptions',
    sourceStructure: ['id', 'label', 'value'],
    style: 'margin:0 auto',
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
    id: 'field-1403',
    idHtml: 'chboxCurrency',
    name: 'currency',
    orderAppearance: 3,
    label: 'Tipo de moneda',
    type: 'checkbox',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'currency',
    sourceStructure: ['id', 'name', 'code'],
    style: 'margin:0 auto',
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

export const Plan2: Field[] = [
  {
    id: 'field-1401',
    idHtml: 'txtAssuredImport',
    name: 'assuredImport',
    orderAppearance: 4,
    label: 'Suma asegurada',
    type: 'text',
    required: true,
    placeholder: 'Suma asegurada',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El importe no puede ser 0.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },{
    id: 'field-1402',
    idHtml: 'txtCost',
    name: 'cost',
    orderAppearance: 5,
    label: 'Prima',
    type: 'text',
    required: true,
    placeholder: 'Prima',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El importe no puede ser 0.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },{
    id: 'field-1403',
    idHtml: 'txtSavingsGoal',
    name: 'savingsGoal',
    orderAppearance: 6,
    label: 'Meta de ahorro',
    type: 'text',
    required: false,
    placeholder: 'Meta de ahorro',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El importe no puede ser 0.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },{
    id: 'field-1404',
    idHtml: 'txtYears',
    name: 'years',
    orderAppearance: 7,
    label: 'Años',
    type: 'text',
    required: false,
    placeholder: 'Años',
    length: '40',
    minValue: 1,
    maxValue: 3,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El importe no puede ser 0.',
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


export const Plan3: Field[] = [

];
