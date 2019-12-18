import {Beneficiary, Field} from '../../../models';
import {Coverage} from '../../../models/coverage-model/coverage';

export const CoverageFieldsItem: Field[] = [
  {
    id: 'field-90001',
    idHtml: 'check1Ep',
    name: 'ep',
    orderAppearance: 1,
    label: 'Extención',
    type: 'checkbox-1',
    required: false,
    placeholder: 'EP',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '(ageS>=18,&,ageS<=55)',
    entity: '',
    entityField: '',
    value: false,
    disable: true
  }, {
    id: 'field-90002',
    idHtml: 'check1Pasi',
    name: 'pasi',
    orderAppearance: 2,
    label: 'Pago de Suma Asegurada por Invalidez Total y Permanente',
    type: 'checkbox-1',
    required: false,
    placeholder: 'PASI',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '(ageS>=18,&,ageS<=55)',
    entity: '',
    entityField: '',
    value: false
  },
  {
    id: 'field-90003',
    idHtml: 'check1Ima',
    name: 'ima',
    orderAppearance: 3,
    label: 'Indemnización por Muerte Accidental',
    type: 'checkbox-1',
    required: false,
    placeholder: 'IMA',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    // enableConditions: '((ageS>=18,&,ageS<=65),|,(imapo=false),|,(dimapo=false))',
    enableConditions: '(ageS>=18,&,ageS<=65)',
    entity: '',
    entityField: '',
    value: false,
    detonateFunctionParams: 'imapo,dimapo'
  },
  {
    id: 'field-90004',
    idHtml: 'check1Imapo',
    name: 'imapo',
    orderAppearance: 5,
    label: 'Indemnización por Muerte Accidental y / o Pérdidas Orgánicas',
    type: 'checkbox-1',
    required: false,
    placeholder: 'IMAPO',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    // enableConditions: '((ageS>=18,&,ageS<=65),|,(ima=true),|,(dimapo=true))',
    enableConditions: '(ageS>=18,&,ageS<=65)',
    entity: '',
    entityField: '',
    value: false,
    detonateFunctionParams: 'ima,dimapo'
  },
  {
    id: 'field-90005',
    idHtml: 'check1Dimapo',
    name: 'dimapo',
    orderAppearance: 6,
    label: 'Doble indemnización por Muerte Accidental y/o Pérdida Orgánica',
    type: 'checkbox-1',
    required: false,
    placeholder: 'DIMAPO',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    // enableConditions: '((ageS>=18,&,ageS<=65),|,(ima=true),|,(imapo=true))',
    enableConditions: '(ageS>=18,&,ageS<=65)',
    entity: '',
    entityField: '',
    value: false,
    detonateFunctionParams: 'ima,imapo'
  },
  {
    id: 'field-90007',
    idHtml: 'check1Ge',
    name: 'ge',
    orderAppearance: 7,
    label: 'Graves Enfermedades (Suma Asegurada es de $3,000,000 pesos ó $230,000 dolares)',
    type: 'checkbox-1',
    required: false,
    placeholder: 'GE',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '(ageS>=18,&,ageS<=55)',
    entity: '',
    entityField: '',
    value: false
  },
  {
    id: 'field-90008',
    idHtml: 'check1Et',
    name: 'et',
    orderAppearance: 8,
    label: 'Enfermedades en fase Terminal',
    type: 'checkbox-1',
    required: false,
    placeholder: 'ET',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '(ageS>=20,&,ageS<=60)',
    entity: '',
    entityField: '',
    value: true,
  }
  /*
{
  id: 'field-10004',
  idHtml: 'txtCostdImport',
  name: 'costImport',
  orderAppearance: 4,
  label: '',
  type: 'text',
  required: false,
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
  message: '',
  messageClass: '',
  messageError: '',
  messageErrorClass: '',
  renderConditions: '',
  enableConditions: '',
  entity: '',
  entityField: '',
  value: '',
  disable: true
},
{
  id: 'field-10005',
  idHtml: 'txtDetail',
  name: 'detail',
  orderAppearance: 5,
  label: '',
  type: 'text',
  required: false,
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
  message: '',
  messageClass: '',
  messageError: '',
  messageErrorClass: '',
  renderConditions: '',
  enableConditions: '',
  entity: '',
  entityField: '',
  value: '',
  disable: true
}, */
];


export const COVERAGES: Coverage[] =  [
  {
    coverageId: '1',
    isSelected: false,
    coverageName: 'Exención',   // EP
    assuredImport: ' ',
    cost: ' ',
    detail: 'EP'
  },
  {
    coverageId: '2',
    isSelected: false,
    coverageName: 'Pago de Suma Asegurada por Invalidez Total y Permanente',   // PASI
    assuredImport: ' ',
    cost: ' ',
    detail: 'PASI'
  },
  {
    coverageId: '3',
    isSelected: false,
    coverageName: 'Indemnización por Muerte Accidental',   // IMA
    assuredImport: ' ',
    cost: ' ',
    detail: 'IMA'
  },
  {
    coverageId: '4',
    isSelected: false,
    coverageName: 'Indemnización por Muerte Accidental y / o Pérdidas Orgánicas',   // IMAPO
    assuredImport: ' ',
    cost: ' ',
    detail: 'IMAPO'
  },
  {
    coverageId: '5',
    isSelected: false,
    coverageName: 'Doble indemnización por Muerte Accidental y/o Pérdida Orgánica',   // DIMAPO
    assuredImport: ' ',
    cost: ' ',
    detail: 'DIMAPO'
  },
  {
    coverageId: '6',
    isSelected: false,
    coverageName: 'Graves Enfermedades (Suma Asegurada es de $3,000,000 pesos ó $230,000 dolares)',   // GE
    assuredImport: ' ',
    cost: ' ',
    detail: 'GE'
  },
  {
    coverageId: '7',
    isSelected: true,
    coverageName: 'Enfermedades en fase Terminal ( cobertura sin costo preseleccionada) ',   // ET
    assuredImport: ' ',
    cost: ' ',
    detail: 'ET'
  },
];
