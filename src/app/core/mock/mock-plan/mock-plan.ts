import {Field} from '../../../models';


export const Plan0: Field[] = [
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
    sourceStructure: ['currencyPrivId', 'description', 'currencyPrivId'],
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
    entityField: 'insuredCondition.aplicationPlan.pln_crrncy_cd',
    value: '',
    detonateFunction: 'enableAdditionalCoverage'
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
    sourceStructure: ['key', 'key', 'key'],
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
    entityField: 'insuredCondition.aplicationPlan.pln_cvr_tp_cd',
    value: '',
    detonateFunction: 'enableAdditionalCoverage'
  },
];

export const Plan1: Field[] = [
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
    sourceID: 'plan',
    sourceStructure: ['key', 'keyValue', 'key'],
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
    entityField: '',
    detonateFunction: 'enableAdditionalCoverage'
  },

];
export const Plan1a: Field[] = [
  /*{
    id: 'field-1401',
    idHtml: 'slctPacking1',
    name: 'packing1',
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
    sourceID: 'plan',
    sourceStructure: ['key', 'keyValue', 'key'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Seleccionar un tipo de empaquetamiento.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=M,|,contractorType=false)',
    entity: '',
    entityField: ''
  },*/

];

export const Plan2: Field[] = [
  {
    id: 'field-1404',
    idHtml: 'txtAssuredImport',
    name: 'assuredImport',
    orderAppearance: 4,
    label: 'Suma Asegurada *',
    type: 'text',
    subtype: 'currency',
    required: true,
    placeholder: '',
    length: '15',
    minValue: 0,
    maxValue: 15,
    // pattern: '/^([0-9]{1,10}|[0-9]{1,10}\\.[0-9]{1,2})$/',
    pattern: '/([0-9]{1,10}|[0-9]{1,10}\\.[0-9]{2})$/',
    noAllowedCharactersPattern: '/[^\\d\\.]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El importe no puede ser 0.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(currency=1,|,currency=2)',
    requiredConditions: '(currency=1,|,currency=2)',
    // minConditions: '',
    enableConditions: '',
    entity: '',
    entityField: 'insuredCondition.aplicationPlan.pln_bsc_cvr_ini_amnt',
    value: ''
  },
  {
    id: 'field-1403',
    idHtml: 'txtSavingsGoal',
    name: 'savingsGoal',
    orderAppearance: 6,
    label: 'Meta de ahorro *',
    type: 'text',
    required: false,
    placeholder: 'Meta de ahorro',
    length: '15',
    minValue: 0,
    maxValue: 15,
    pattern: '/^([0-9]{1,10}|[0-9]{1,10}\\.[0-9]{1,2})$/',
    noAllowedCharactersPattern: '/[^\\d\\.]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El importe no puede ser 0.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(packing=TF)',
    enableConditions: '',
    requiredConditions: '(packing=TF)',
    entity: '',
    entityField: 'insuredCondition.aplicationPlan.pln_bsc_cvr_sv_gl',
    value: ''
  },
  {
    id: 'field-1404',
    idHtml: 'txtYears',
    name: 'years',
    orderAppearance: 7,
    label: 'Años *',
    type: 'text',
    required: false,
    placeholder: 'Años',
    length: '2',
    minValue: 0,
    maxValue: 2,
    pattern: '/^([1-9]|[0-9]{2}(?<!00))$/',
    noAllowedCharactersPattern: '/[\\D]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Ingresar un numero de años valido, de 1 a 99 .',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(packing=TF)',
    requiredConditions: '(packing=TF)',
    enableConditions: '',
    entity: '',
    entityField: 'insuredCondition.aplicationPlan.pln_bsc_cvr_yrs',
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
    pattern: '/^\\$[0-9]{1,3}(?:[0-9]*(?:[.,][0-9]{1,2})?|(?:,[0-9]{3})*(?:\\.[0-9]{1,2})?|(?:\\.[0-9]{3})*(?:,[0-9]{1,2})?)$/',
    noAllowedCharactersPattern: '/[^\\d\\.\\$\\,]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La prima adicional no puede ser 0 y debera tener el formato de moneda',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: 'insuredCondition.aplicationPlan.an_prem_amt',
    value: ''
  }
];

export const Plan4: Field[] = [
  {
    id: 'field-1406',
    idHtml: 'txtFixedFunds',
    name: 'fixedFunds',
    orderAppearance: 9,
    label: '(%) Fijo',
    type: 'text',
    required: false,
    placeholder: 'Fijo',
    length: '5',
    minValue: 0,
    maxValue: 5,
    pattern: '/(^100(\\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\\.[0-9]{1,3})?$)|(^([0-9])(\\.[0-9]{1,4})?$)/',
    noAllowedCharactersPattern: '/[^\\d\\.]/',
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
    entityField: 'insuredCondition.aplicationPlan.pln_fx_fnd_dist',
    value: '100'
  },
  {
    id: 'field-1407',
    idHtml: 'txtVariableFunds',
    name: 'variableFunds',
    orderAppearance: 10,
    label: '(%) Variable',
    type: 'text',
    required: false,
    placeholder: 'Variable',
    length: '5',
    minValue: 0,
    maxValue: 5,
    pattern: '/(^100(\\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\\.[0-9]{1,3})?$)|(^([0-9])(\\.[0-9]{1,4})?$)/',
    noAllowedCharactersPattern: '/[^\\d\\.]/',
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
    enableConditions: '(currency!=1)',
    entity: '',
    entityField: 'insuredCondition.aplicationPlan.pln_vr_fnd_dist',
    value: '0'
  }
];

export const Plan5: Field[] = [
  {
    id: 'field-1408',
    idHtml: 'txtFixedRetirement',
    name: 'fixedRetirement',
    orderAppearance: 11,
    label: '(%) Fijo',
    type: 'text',
    required: false,
    placeholder: 'Fijo',
    length: '5',
    minValue: 0,
    maxValue: 5,
    pattern: '/(^100(\\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\\.[0-9]{1,3})?$)|(^([0-9])(\\.[0-9]{1,4})?$)/',
    noAllowedCharactersPattern: '/[^\\d\\.]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El importe no puede ser.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '(packing=RE)',
    entity: '',
    entityField: 'insuredCondition.aplicationPlan.pln_fx_psnl_wthdrwl',
    value: '0'
  },
  {
    id: 'field-1409',
    idHtml: 'txtVariableRetirement',
    name: 'variableRetirement',
    orderAppearance: 12,
    label: '(%) Variable',
    type: 'text',
    required: false,
    placeholder: 'Variable',
    length: '5',
    minValue: 0,
    maxValue: 5,
    pattern: '/(^100(\\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\\.[0-9]{1,3})?$)|(^([0-9])(\\.[0-9]{1,4})?$)/',
    noAllowedCharactersPattern: '/[^\\d\\.]/',
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
    enableConditions: '((currency=0),&,(packing=RE))',
    entity: '',
    entityField: 'insuredCondition.aplicationPlan.pln_vr_psnl_wthdrwl',
    value: '0'
  }
];

export const Plan6: Field[] = [
  {
    id: 'field-1408',
    idHtml: 'txtFixedSaving',
    name: 'fixedSaving',
    orderAppearance: 13,
    label: '(%) Fijo',
    type: 'text',
    required: false,
    placeholder: 'Fijo',
    length: '5',
    minValue: 0,
    maxValue: 5,
    pattern: '/(^100(\\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\\.[0-9]{1,3})?$)|(^([0-9])(\\.[0-9]{1,4})?$)/',
    noAllowedCharactersPattern: '/[^\\d\\.]/',
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
    enableConditions: '(packing=RE)',
    entity: '',
    entityField: 'insuredCondition.aplicationPlan.pln_fx_spcl_amnt_svgn',
    value: '0'
  },
  {
    id: 'field-1409',
    idHtml: 'txtVariableSaving',
    name: 'variableSaving',
    orderAppearance: 14,
    label: '(%) Variable',
    type: 'text',
    required: false,
    placeholder: 'Variable',
    length: '5',
    minValue: 0,
    maxValue: 5,
    pattern: '/(^100(\\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\\.[0-9]{1,3})?$)|(^([0-9])(\\.[0-9]{1,4})?$)/',
    noAllowedCharactersPattern: '/[^\\d\\.]/',
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
    enableConditions: '((currency=0),&,(packing=RE))',
    entity: '',
    entityField: 'insuredCondition.aplicationPlan.pln_vr_spcl_amnt_svgn',
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
    entityField: 'insuredCondition.aplicacionPlan.xs_prem_amt',
    value: '',
    disable: true
  }
];
