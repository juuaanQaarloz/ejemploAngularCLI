import {Beneficiary, Field} from '../../../models';
import {Coverage} from '../../../models/coverage-model/coverage';

export const CoverageFieldsItem: Field[] = [
  {
    id: 'field-90001',
    idHtml: 'check1Ep',
    name: 'ep',
    orderAppearance: 1,
    label: 'Exención de pago de primas por invalidez total y permanente',
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
    value: false,
    disable: true
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
    detonateFunctionParams: 'imapo,dimapo',
    disable: true
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
    detonateFunctionParams: 'ima,dimapo',
    disable: true
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
    detonateFunctionParams: 'ima,imapo',
    disable: true
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
    enableConditions: '(ageS>=20,&,ageS<=60)',
    entity: '',
    entityField: '',
    value: false,
    disable: true
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
    enableConditions: '(ageS>=18,&,ageS<=70)',
    entity: '',
    entityField: '',
    value: true,
    disable: true
  }
];
