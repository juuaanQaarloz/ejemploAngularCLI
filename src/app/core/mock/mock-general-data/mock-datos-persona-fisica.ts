import {Field} from '../../../models';

export const DatosGeneralesPersonaFisica: Field[] = [
  {
    id: 'field-3',
    idHtml: 'txtName',
    name: 'name',
    orderAppearance: 1,
    label: 'Nombres(s)*',
    type: 'text',
    required: true,
    placeholder: 'Nombres(s)',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El nombre es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: 'field-4',
    idHtml: 'txtFatherLastName',
    name: 'fatherLastName',
    orderAppearance: 2,
    label: 'Apellido paterno*',
    type: 'text',
    required: true,
    placeholder: 'Apellido paterno',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El Apellido paterno es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: 'field-5',
    idHtml: 'txtMotherLastName',
    name: 'motherLastName',
    orderAppearance: 3,
    label: 'Apellido materno*',
    type: 'text',
    required: true,
    placeholder: 'Apellido materno',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El apellido materno es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: 'field-6',
    idHtml: 'dteBirthDate',
    name: 'birthDate',
    orderAppearance: 4,
    label: 'Fecha de nacimiento*',
    type: 'date',
    required: true,
    placeholder: 'YYYY/MM/DD',
    length: '10',
    minValue: 0,
    maxValue: 10,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La fecha de nacimiento es obligatoria',
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
    id: 'field-7',
    idHtml: 'txtAge',
    name: 'age',
    orderAppearance: 5,
    label: 'Edad*',
    type: 'text',
    required: true,
    placeholder: 'Edad',
    length: '3',
    minValue: 0,
    maxValue: 3,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La edad es obligatoria',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: 'field-8',
    idHtml: 'txtRFC',
    name: 'rfc',
    orderAppearance: 6,
    label: 'RFC*',
    type: 'text',
    required: true,
    placeholder: 'RFC',
    length: '13',
    minValue: 0,
    maxValue: 13,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El rfc es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: 'field-9',
    idHtml: 'txtCurp',
    name: 'curp',
    orderAppearance: 7,
    label: 'CURP*',
    type: 'text',
    required: true,
    placeholder: 'CURP',
    length: '18',
    minValue: 0,
    maxValue: 18,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El curp es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: 'field-10',
    idHtml: 'slctGender',
    name: 'gender',
    orderAppearance: 8,
    label: 'Sexo*',
    type: 'select',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'genders',
    sourceStructure: ['id', 'name', 'code'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El sexo es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: 'field-11',
    idHtml: 'slctCivilStatus',
    name: 'civilStatus',
    orderAppearance: 9,
    label: 'Estado civil*',
    type: 'select',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'maritalStatuses',
    sourceStructure: ['id', 'status', 'value'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El estado civil es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: 'Soltero(a)'
  },
  {
    id: 'field-12',
    idHtml: 'slctIdType',
    name: 'idType',
    orderAppearance: 10,
    label: 'Tipo de identificación*',
    type: 'select',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'idTypes',
    sourceStructure: ['id', 'value', 'code'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El tipo de identificación es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: 'CREDENCIAL PARA VOTAR',
  },
  {
    id: 'field-13',
    idHtml: 'txtIdNumber',
    name: 'idNumber',
    orderAppearance: 11,
    label: 'Número de identificación*',
    type: 'text',
    canChangeType: true,
    required: true,
    placeholder: 'Número de identificación',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El número de identificación es obligatorio',
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
    id: 'field-14',
    idHtml: 'txtIdEmisor',
    name: 'idEmisor',
    orderAppearance: 12,
    label: 'Emisora de identificación*',
    type: 'text',
    required: true,
    placeholder: 'Emisora de identificación',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La emisora de identificación es obligatoria',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: 'txtEdad>18,chboxGender=Female',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-15',
    idHtml: 'slctBirthCountry',
    name: 'birthCountry',
    orderAppearance: 13,
    label: 'País de nacimiento*',
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
    message: 'El país de nacimiento es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-16',
    idHtml: 'txtCity',
    name: 'city',
    orderAppearance: 14,
    label: 'Ciudad / Población*',
    type: 'text',
    required: true,
    placeholder: 'Ciudad / Población',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La ciudad / población es obligatoria',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-17',
    idHtml: 'slctNationality',
    name: 'nationality',
    orderAppearance: 15,
    label: 'Nacionalidad(es)*',
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
    message: 'La nacionalidad es obligatoria',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  }
];
