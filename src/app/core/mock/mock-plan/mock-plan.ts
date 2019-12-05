import {Field} from '../../../models';


export const Plan1: Field[] = [
  {
    id: 'field-1403',
    idHtml: 'slctCurrency',
    name: 'currency',
    orderAppearance: 1,
    label: 'Tipo de moneda',
    type: 'select',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'currency',
    sourceStructure: ['id', 'name', 'code'],
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
    id: 'field-1401',
    idHtml: 'slctPacking',
    name: 'packing',
    orderAppearance: 3,
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
  }

];

export const Plan2: Field[] = [
  {
    id: 'field-1404',
    idHtml: 'txtAssuredImportMXN',
    name: 'assuredImport',
    orderAppearance: 4,
    label: 'Suma asegurada',
    type: 'text',
    required: true,
    placeholder: 'Suma asegurada',
    length: '12',
    minValue: 0,
    maxValue: 9999999,
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
    // minConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
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
    renderConditions: '(packing=3)',
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
    renderConditions: '(packing=3)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  }
];


export const Plan3: Field[] = [
  {
    id: 'field-1405',
    idHtml: 'txtAdditionalCost',
    name: 'additionalCost',
    orderAppearance: 8,
    label: 'Prima adicional anual',
    type: 'text',
    required: false,
    placeholder: 'Prima adicional anual',
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
  }
];

export const Plan4: Field[] = [
  {
    id: 'field-1406',
    idHtml: 'txtFixedFunds',
    name: 'fixedFunds',
    orderAppearance: 9,
    label: 'Fijos',
    type: 'text',
    required: false,
    placeholder: 'Fijos',
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
  },
  {
    id: 'field-1407',
    idHtml: 'txtVariableFunds',
    name: 'variableFunds',
    orderAppearance: 10,
    label: 'Variables',
    type: 'text',
    required: false,
    placeholder: 'Variables',
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
    enableConditions: '(currency=usd)',
    entity: '',
    entityField: '',
    value: ''
  }
];

export const Plan5: Field[] = [
  {
    id: 'field-1408',
    idHtml: 'txtFixedRetirement',
    name: 'fixedRetirement',
    orderAppearance: 11,
    label: 'Fijos',
    type: 'text',
    required: false,
    placeholder: 'Fijos',
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
    enableConditions: '(packing!=4)',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-1409',
    idHtml: 'txtVariableRetirement',
    name: 'variableRetirement',
    orderAppearance: 12,
    label: 'Variables',
    type: 'text',
    required: false,
    placeholder: 'Variables',
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
    enableConditions: '(currency=usd,|,packing!=4)',
    entity: '',
    entityField: '',
    value: ''
  }
];

export const Plan6: Field[] = [
  {
    id: 'field-1408',
    idHtml: 'txtFixedRetirement',
    name: 'fixedRetirement',
    orderAppearance: 13,
    label: 'Fijos',
    type: 'text',
    required: false,
    placeholder: 'Fijos',
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
    enableConditions: '(packing!=4)',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-1409',
    idHtml: 'txtVariableRetirement',
    name: 'variableRetirement',
    orderAppearance: 14,
    label: 'Variables',
    type: 'text',
    required: false,
    placeholder: 'Variables',
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
    enableConditions: '(currency=usd,|,packing!=4)',
    entity: '',
    entityField: '',
    value: ''
  }
];

export const Plan7: Field[] = [
  {
    id: 'field-1405',
    idHtml: 'txtAdditionalCost2',
    name: 'additionalCost2',
    orderAppearance: 15,
    label: 'Prima Total  Anual y Aportaciones',
    type: 'text',
    required: false,
    placeholder: 'Prima Total  Anual y Aportaciones',
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
  }
];
