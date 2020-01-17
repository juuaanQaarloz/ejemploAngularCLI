import {Field} from '../../../models';

export const DatosDomicilio: Field[] = [
  {
    id: 'field-22',
    idHtml: 'txtStreet',
    name: 'street',
    orderAppearance: 1,
    label: 'Calle / Avenida*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '60',
    minValue: 0,
    maxValue: 60,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9_\'#\\/&\\s\\-\\+\\.\\,]*[A-ZÑ0-9_\'#\\/&\\s\\-\\+\\.\\,])(?:([A-ZÑ0-9_\'#\\/&\\s\\-\\+\\.\\,])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9_\'#&\\s\\.\\-\\+\\/\\,]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Calle / Avenida es obligatoria. Puede contener más de 3 letras y/o 3 números iguales consecutivos.' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=P)',
    entity: '',
    entityField: 'insurer.Address[0].strt_nm',
  },
  {
    id: 'field-23',
    idHtml: 'txtExteriorNumber',
    name: 'exteriorNumber',
    orderAppearance: 2,
    label: 'Número exterior*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '10',
    minValue: 0,
    maxValue: 10,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9#\\s\\-\\.]*[A-ZÑ0-9#\\s\\-\\.])(?:([A-ZÑ0-9#\\s\\-\\.])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9#\\s\\.\\-]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El valor capturado contine caracteres no válidos, valores aceptados ([A-Z], Ñ, 0-9 , #, -, .)',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=P)',
    entity: '',
    entityField: 'insurer.Address[0].ext_num',
  },
  {
    id: 'field-24',
    idHtml: 'txtInteriorNumber',
    name: 'interiorNumber',
    orderAppearance: 3,
    label: 'Número interior',
    type: 'text',
    required: false,
    placeholder: '',
    length: '10',
    minValue: 0,
    maxValue: 10,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9#\\s\\-\\.]*[A-ZÑ0-9#\\s\\-\\.])(?:([A-ZÑ0-9#\\s\\-\\.])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9#\\s\\.\\-]/',
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
    entityField: 'insurer.Address[0].int_num',
  },
  {
    id: 'field-25',
    idHtml: 'txtZipCode',
    name: 'zipCode',
    orderAppearance: 4,
    label: 'Código postal*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '5',
    minValue: 0,
    maxValue: 5,
    pattern: '/^[0-9]{5}(?<!00000)$/',
    noAllowedCharactersPattern: '/\\D/',
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
    requiredConditions: '(typePerson=P)',
    entity: '',
    entityField: 'insurer.Address[0].zip_cod',
  },
  {
    id: 'field-26',
    idHtml: 'txtSuburb',
    name: 'suburb',
    orderAppearance: 5,
    label: 'Colonia / Barrio*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '60',
    minValue: 0,
    maxValue: 60,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s]*[A-ZÑ\\s])(?:([A-ZÑ\\s])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Colonia / Barrio es obligatorio. No puede contener más de 3 letras y/o 3 números iguales consecutivos.' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=P)',
    entity: '',
    entityField: 'insurer.Address[0].subt_nm',
  },
  {
    id: 'field-27',
    idHtml: 'txtMunicipality',
    name: 'municipality',
    orderAppearance: 6,
    label: 'Municipio / Alcaldía*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s]*[A-ZÑ\\s])(?:([A-ZÑ\\s])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Municipio / Alcaldía. No puede contener más de 3 letras y/o 3 números iguales consecutivos.' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=P)',
    entity: '',
    entityField: 'insurer.Address[0].mncplty_nm',
  },
  {
    id: 'field-28',
    idHtml: 'txtState',
    name: 'state',
    orderAppearance: 7,
    label: 'Estado / Provincia*',
    type: 'autocomplete',
    required: true,
    placeholder: '',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: 'IPRE',
    sourceID: 'federalEntityCopy',
    sourceStructure: ['entityId', 'entityName', 'entityId'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Debe elegirse un valor.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=P)',
    entity: '',
    entityField: 'insurer.Address[0].sta_cod',
  },
  {
    id: 'field-29',
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
    noAllowedCharactersPattern: '',
    source: 'IPRE',
    sourceID: 'country',
    sourceStructure: ['countryID', 'description', 'countryID'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El país debe ser un valor alfabético.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=P)',
    entity: '',
    entityField: 'insurer.Address[0].cntry_cod',
  },
  {
    id: 'field-30',
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
    pattern: '/^[0-9]{10,10}$/',
    noAllowedCharactersPattern: '/\\D/',
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
    entityField: 'insurer.Address[0].hom_phon',
  },
  {
    id: 'field-31',
    idHtml: 'txtCellPhone',
    name: 'cellPhone',
    orderAppearance: 10,
    label: 'Teléfono celular* (sin 044/045)',
    type: 'text',
    required: true,
    placeholder: '',
    length: '10',
    minValue: 0,
    maxValue: 10,
    pattern: '/^[0-9]{10,10}$/',
    noAllowedCharactersPattern: '/\\D/',
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
    requiredConditions: '(typePerson=P)',
    entity: '',
    entityField: 'insurer.Address[0].cel_phon',
  },
  {
    id: 'field-33',
    idHtml: 'txtEmail',
    name: 'email',
    orderAppearance: 11,
    label: 'Correo electrónico*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '50',
    minValue: 0,
    maxValue: 50,
    pattern: '/^[A-Z0-9_\\-][A-Z0-9\\.\\-_]*[A-Z0-9_]@[A-Z0-9][A-Z0-9\\.\\-_]+\\.[A-Z]\\w{1,11}$/',
    noAllowedCharactersPattern: '/[^a-zA-Z0-9_@\\-\\.]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El correo electrónico es obligatorio y debe cumplir con el formato correo@servidor.com y solo se aceptan . - _',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=P)',
    entity: '',
    entityField: 'insurer.Address[0].per_mail_nm'
  },
  {
    id: 'field-34',
    idHtml: 'txtEmailConfirmation',
    name: 'emailConfirmation',
    orderAppearance: 12,
    label: 'Confirmación de correo electrónico*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '50',
    minValue: 0,
    maxValue: 50,
    pattern: '/^[A-Z0-9_\\-][A-Z0-9\\.\\-_]*[A-Z0-9_]@[A-Z0-9][A-Z0-9\\.\\-_]+\\.[A-Z]\\w{1,11}$/',
    noAllowedCharactersPattern: '/[^a-zA-Z0-9_@\\-\\.]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La confirmación de correo elecrónico es obligatorio y debe cumplir con el formato correo@servidor.com y' +
      ' solo se aceptan . - _',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=P)',
    entity: '',
    entityField: ''
  }
];
