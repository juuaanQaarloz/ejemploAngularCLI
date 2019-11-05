import {Field} from '../../../models';

export const DatosGeneralesPersonaFisica: Field[] = [
  {
    id: 'field-3',
    idHtml: 'txtName',
    name: 'name',
    orderAppearance: 1,
    label: 'Nombre(s)*',
    type: 'text',
    required: true,
    placeholder: 'Nombre(s)',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El nombre es obligatorio y no puede contener más de 3 letras iguales consecutivas ni números.' +
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
    message: 'El apellido paterno es obligatorio y no puede contener más de 3 letras iguales consecutivas ni números.' +
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
  {
    id: 'field-5',
    idHtml: 'txtMotherLastName',
    name: 'motherLastName',
    orderAppearance: 3,
    label: 'Apellido materno',
    type: 'text',
    required: false,
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
    message: 'El apellido materno no puede contener más de 3 letras iguales consecutivas ni números.' +
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
    message: 'La fecha no tiene un formato válido.',
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
    required: false,
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
    message: 'La edad no es válida, el rango de edad es entre 15 y 70 años',
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
    message: 'El RFC no puede estart vacío o no parece ser válido.',
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
    id: 'field-9',
    idHtml: 'txtCurp',
    name: 'curp',
    orderAppearance: 7,
    label: 'CURP',
    type: 'text',
    required: false,
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
    message: 'El CURP no cumple con el formato LLLL000000AAALLL00',
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
    message: 'Sexo es un campo obligatorio.',
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
    message: 'Estado civil es un campo obligatorio.',
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
    message: 'Tipo de identificación es un campo obligatorio.',
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
    message: 'Número de ID es obligatorio.',
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
    message: 'Emisora ID es un campo obligatorio.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: 'txtEdad>18,chboxGender=Female',
    entity: '',
    entityField: ''
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
    message: 'El país de nacimiento es obligatorio.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: ''
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
    message: 'Ciudad/Población es obligatorio. No puede contener más de 3 letras iguales consecutivas ni números.' +
      ' No se permiten caracteres especiales',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: ''
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
    message: 'Nacionalidad(es) es obligatorio. Nacionalidad(es) debe contener un valor alfanumérico.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: ''
  },
  {
    id: 'field-110',
    idHtml: 'slctNationality1',
    name: 'nationality1',
    orderAppearance: 15,
    label: 'Nacionalidad 1',
    type: 'select',
    required: false,
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: ''
  },
  {
    id: 'field-111',
    idHtml: 'slctNationality2',
    name: 'nationality2',
    orderAppearance: 15,
    label: 'Nacionalidad 2',
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: ''
  },
  {
    id: 'field-112',
    idHtml: 'slctNationality3',
    name: 'nationality3',
    orderAppearance: 15,
    label: 'Nacionalidad 3',
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: ''
  }
];
