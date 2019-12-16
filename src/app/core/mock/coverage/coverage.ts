import {Beneficiary, Field} from '../../../models';
import {Coverage} from '../../../models/coverage-model/coverage';

export const CoverageFieldsItem: Field[] = [
  {
  id: 'field-10002',
  idHtml: 'txtAssuredImport',
  name: 'assuredImport',
  orderAppearance: 3,
  label: '',
  type: 'checkbox-1',
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
}, /*
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
