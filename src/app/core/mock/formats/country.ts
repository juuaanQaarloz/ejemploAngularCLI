import {Field} from '../../../models';

export const NewCountryFields: Field[] = [
  {
    id: 'field-1101',
    idHtml: 'slctStatCountry',
    name: 'statCountry',
    orderAppearance: 8,
    label: 'País*',
    type: 'select',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'countries',
    sourceStructure: ['id', 'name', 'code'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El país debe ser un valor alfabético.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-1102',
    idHtml: 'txtCountryTaxId',
    name: 'taxCountryId',
    orderAppearance: 2,
    label: 'Número de identificación fical',
    type: 'text',
    required: true,
    placeholder: 'Nombre(s)*',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El nombre es obligatorio y no puede contener más de 3 letras y/o 3 números iguales consecutivos. ' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
];

export const countryFieldsItems: Field[] = [
];
