import {Field} from '../../../models';


export const Plan1: Field[] = [
  {
    id: 'field-1403',
    idHtml: 'slctCurrency',
    name: 'currency',
    orderAppearance: 1,
    label: 'Tipo de Moneda *',
    type: 'select',
    required: true,
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
    message: 'Seleccionar el tipo de moneda',
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
    label: 'Tipo de Cobertura *',
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
    label: 'Empaquetamiento *',
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
    idHtml: 'txtAssuredImport',
    name: 'assuredImport',
    orderAppearance: 4,
    label: 'Suma Asegurada *',
    type: 'text',
    required: true,
    placeholder: '',
    length: '15',
    minValue: 0,
    maxValue: 15,
    pattern: '/^[0-9]{0,15}$/',
    noAllowedCharactersPattern: '/\\D/',
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
    label: 'Meta de ahorro *',
    type: 'text',
    required: true,
    placeholder: 'Meta de ahorro',
    length: '15',
    minValue: 0,
    maxValue: 15,
    pattern: '/^[0-9]{0,15}$/',
    noAllowedCharactersPattern: '/\\D/',
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
  },
  {
    id: 'field-1404',
    idHtml: 'txtYears',
    name: 'years',
    orderAppearance: 7,
    label: 'Años *',
    type: 'text',
    required: true,
    placeholder: 'Años',
    length: '3',
    minValue: 0,
    maxValue: 3,
    pattern: 'edad',
    noAllowedCharactersPattern: '/\\D/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Ingresar un numero de años valido, de 1 a 99 .',
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
    length: '15',
    minValue: 0,
    maxValue: 15,
    pattern: '/^[0-9]{0,15}$/',
    noAllowedCharactersPattern: '/\\D/',
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
    placeholder: 'Porcentaje de Fijos',
    length: '3',
    minValue: 0,
    maxValue: 3,
    pattern: '/^[0-9]{0,15}$/',
    noAllowedCharactersPattern: '/\\D/\n',
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
    value: '100'
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
    length: '3',
    minValue: 0,
    maxValue: 3,
    pattern: '/^[0-9]{0,15}$/',
    noAllowedCharactersPattern: '/\\D/',
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
    value: '0'
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
    length: '3',
    minValue: 0,
    maxValue: 3,
    pattern: '/^[0-9]{0,15}$/',
    noAllowedCharactersPattern: '/\\D/',
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
    value: '0'
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
    length: '3',
    minValue: 0,
    maxValue: 3,
    pattern: '/^[0-9]{0,15}$/',
    noAllowedCharactersPattern: '/\\D/',
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
    enableConditions: '((currency=usd),|,(packing!=4))',
    entity: '',
    entityField: '',
    value: '0'
  }
];

export const Plan6: Field[] = [
  {
    id: 'field-1408',
    idHtml: 'txtFixedSaving',
    name: 'fixedSaving',
    orderAppearance: 13,
    label: 'Fijos',
    type: 'text',
    required: false,
    placeholder: 'Fijos',
    length: '3',
    minValue: 0,
    maxValue: 3,
    pattern: '/^[0-9]{0,15}$/',
    noAllowedCharactersPattern: '/\\D/',
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
    value: '0'
  },
  {
    id: 'field-1409',
    idHtml: 'txtVariableSaving',
    name: 'variableSaving',
    orderAppearance: 14,
    label: 'Variables',
    type: 'text',
    required: false,
    placeholder: 'Variables',
    length: '3',
    minValue: 0,
    maxValue: 3,
    pattern: '/^[0-9]{0,15}$/',
    noAllowedCharactersPattern: '/\\D/\n',
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
    enableConditions: '((currency=usd),|,packing!=4)',
    entity: '',
    entityField: '',
    value: '0'
  }
];

export const Plan7: Field[] = [
  {
    id: 'field-1405',
    idHtml: 'txtCostContributions',
    name: 'costContributions',
    orderAppearance: 15,
    label: 'Prima Total  Anual y Aportaciones',
    type: 'text',
    required: false,
    placeholder: 'Prima Total  Anual y Aportaciones',
    length: '12',
    minValue: 0,
    maxValue: 15,
    pattern: '/^[0-9]{0,15}$/',
    noAllowedCharactersPattern: '/\\D/',
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
    value: '',
    disable: true
  }
];
