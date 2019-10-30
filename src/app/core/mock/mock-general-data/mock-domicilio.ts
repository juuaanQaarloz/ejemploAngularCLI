import {Field} from '../../../models';

export const DatosDomicilio: Field[] = [
  {
    id: 'field-18',
    idHtml: 'txtStreet',
    name: 'street',
    orderAppearance: 1,
    label: 'Calle / Avenida*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Calle / Avenida es obligatoria. Puede contener más de 3 letras iguales consecutivas ni números.' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-19',
    idHtml: 'txtExteriorNumber',
    name: 'exteriorNumber',
    orderAppearance: 2,
    label: 'Número exterior*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 10,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El valor capturado contine caracteres no válidos, valores aceptados ([A-Z], Ñ, 0-9\'. , _ / + # & -)',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-20',
    idHtml: 'txtInteriorNumber',
    name: 'interiorNumber',
    orderAppearance: 3,
    label: 'Número interior',
    type: 'text',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 10,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El valor capturado contine caracteres no válidos, valores aceptados ([A-Z], Ñ, 0-9\'. , _ / + # & -)',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-21',
    idHtml: 'txtZipCode',
    name: 'zipCode',
    orderAppearance: 4,
    label: 'Código postal*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 5,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El código postal solo puede contener números y tienen que ser 5 dígitos.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-22',
    idHtml: 'txtSuburb',
    name: 'suburb',
    orderAppearance: 5,
    label: 'Colonia / Barrio*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Colonia / Barrio es obligatorio. No puede contener más de 3 letras iguales consecutivas ni números.' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-23',
    idHtml: 'txtMunicipality',
    name: 'municipality',
    orderAppearance: 6,
    label: 'Municipio / Alcaldía*',
    type: 'text',
    required: true,
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
    message: 'Municipio / Alcaldía. No puede contener más de 3 letras iguales consecutivas ni números.' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-24',
    idHtml: 'txtState',
    name: 'state',
    orderAppearance: 7,
    label: 'Estado / Provincia*',
    type: 'text',
    required: true,
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
    message: 'Estado / Provincia no existente.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-25',
    idHtml: 'slctHomeCountry',
    name: 'homeCountry',
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
    id: 'field-26',
    idHtml: 'txtPhone',
    name: 'phone',
    orderAppearance: 9,
    label: 'Teléfono fijo (incluir lada)',
    type: 'text',
    required: false,
    placeholder: '',
    length: '10',
    minValue: 0,
    maxValue: 10,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El valor capturado contiene caracteres no válidos, valores aceptados (0-9)',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-27',
    idHtml: 'txtCellPhone',
    name: 'cellPhone',
    orderAppearance: 10,
    label: 'Teléfono celular* (sin 044/045)',
    type: 'text',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 10,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El número de teléfono no puede contener mas de 6 números iguales consecutivos ni letras.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-28',
    idHtml: 'chboxEmail',
    name: 'emailCheck',
    orderAppearance: 11,
    label: '¿El cliente requiere copia de su solicitud vía correo?',
    type: 'checkbox',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'CUSTOM',
    sourceID: 'emailCheckbox',
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
    id: 'field-29',
    idHtml: 'txtEmail',
    name: 'email',
    orderAppearance: 12,
    label: 'Correo electrónico',
    type: 'text',
    required: false,
    placeholder: '',
    length: '50',
    minValue: 0,
    maxValue: 50,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El correo capturado debe cumplir con el formato correp@servidor.com y solo se aceptan . - _',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: 'emailCheck=true',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-30',
    idHtml: 'txtEmailConfirmation',
    name: 'emailConfirmation',
    orderAppearance: 13,
    label: 'Confirmación de correo electrónico',
    type: 'text',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 50,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El correo capturado debe cumplir con el formato correp@servidor.com y solo se aceptan . - _',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: 'emailCheck=true',
    entity: '',
    entityField: '',
  }
];
