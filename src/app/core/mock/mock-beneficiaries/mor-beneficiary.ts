import {Field} from '../../../models';

export const BeneficiaryFieldsM: Field[] = [
  {
    id: 'field-110',
    idHtml: 'txtBeneficiaryBusinessName',
    name: 'beneficiaryBusinessName',
    orderAppearance: 2,
    label: 'Denominación / Razón social*',
    type: 'text',
    required: false,
    placeholder: 'Denominación / Razón social',
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9_\\/&\\s\\-\\.\\,]*[A-ZÑ0-9_\\/&\\s\\-\\.\\,])(?:([A-ZÑ0-9_\\/&\\s\\-\\.\\,])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9_&\\s\\.\\-\\/\\,]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La razón social es obligatorio. No se permiten caracteres especiales ni 3 letras consecutivas iguales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(beneficiaryType=M)',
    requiredConditions: '(beneficiaryType=M)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-111',
    idHtml: 'slctBeneficiaryRelationshipM',
    name: 'beneficiaryRelationshipM',
    orderAppearance: 3,
    label: 'Relación*',
    type: 'select',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'relationship',
    sourceStructure: ['key', 'keyValue', 'key'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Relación es un campo obligatorio.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    // renderConditions: '(beneficiaryType=M,&,beneficiaryRelationshipM=false)',
    renderConditions: '(beneficiaryType=M)',
    requiredConditions: '(beneficiaryType=M)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '29'
  },
  {
    id: 'field-111',
    idHtml: 'txtBeneficiaryRelationshipM',
    name: 'espBeneficiaryRelationshipM',
    orderAppearance: 3,
    label: 'Relación',
    type: 'text',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 30,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Especificar relación.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(beneficiaryRelationshipM=29)',
    requiredConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-112',
    idHtml: 'dateBeneficiaryConstitutionDate',
    name: 'beneficiaryConstitutionDate',
    orderAppearance: 4,
    label: 'Fecha de constitución*',
    type: 'date',
    required: false,
    placeholder: 'YYYY/MM/DD',
    length: '10',
    minValue: 0,
    maxValue: 10,
    pattern: '/^([0-2][0-9]|[3][0-1])\\/([0][1-9]|[1][0-2])\\/([1-2][0-9]{3,3})$/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La fecha no tiene un formato válido.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(beneficiaryType=M)',
    requiredConditions: '(beneficiaryType=M)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-99',
    idHtml: 'txtParticipationPercentageM',
    name: 'participationPercentageM',
    orderAppearance: 5,
    label: 'Porcentaje de participación*',
    type: 'text',
    required: false,
    placeholder: '%',
    length: '6',
    minValue: 0,
    maxValue: 6,
    pattern: '/(^100(\\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\\.[0-9]{1,3})?$)|(^([0-9])(\\.[0-9]{1,4})?$)/',
    noAllowedCharactersPattern: '/[^\\d\\.]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El % de participación es un campo obligatorio y debe ser mayor a 0% y menor o igual a 100%.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(beneficiaryType=M)',
    requiredConditions: '(beneficiaryType=M)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-113',
    idHtml: 'txtBeneficiaryStreetM',
    name: 'beneficiaryStreetM',
    orderAppearance: 6,
    label: 'Calle / Avenida*',
    type: 'text',
    required: false,
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
    renderConditions: '(beneficiaryType=M)',
    requiredConditions: '(beneficiaryType=M)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-114',
    idHtml: 'txtBeneficiaryExteriorNumberM',
    name: 'beneficiaryExteriorNumberM',
    orderAppearance: 7,
    label: 'Número exterior*',
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
    renderConditions: '(beneficiaryType=M)',
    requiredConditions: '(beneficiaryType=M)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-115',
    idHtml: 'txtBeneficiaryInteriorNumberM',
    name: 'beneficiaryInteriorNumberM',
    orderAppearance: 8,
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
    renderConditions: '(beneficiaryType=M)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-116',
    idHtml: 'txtBeneficiaryZipCodeM',
    name: 'beneficiaryZipCodeM',
    orderAppearance: 9,
    label: 'Código postal*',
    type: 'text',
    required: false,
    placeholder: 'Código postal',
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
    renderConditions: '(beneficiaryType=M)',
    requiredConditions: '(beneficiaryType=M)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-117',
    idHtml: 'txtBeneficiarySuburbM',
    name: 'beneficiarySuburbM',
    orderAppearance: 10,
    label: 'Colonia / Barrio*',
    type: 'text',
    required: false,
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
    renderConditions: '(beneficiaryType=M)',
    requiredConditions: '(beneficiaryType=M)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-118',
    idHtml: 'txtBeneficiaryMunicipalityM',
    name: 'beneficiaryMunicipalityM',
    orderAppearance: 11,
    label: 'Municipio / Alcaldía*',
    type: 'text',
    required: false,
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
    renderConditions: '(beneficiaryType=M)',
    requiredConditions: '(beneficiaryType=M)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-119',
    idHtml: 'txtBeneficiaryStateM',
    name: 'beneficiaryStateM',
    orderAppearance: 12,
    label: 'Estado / Provincia*',
    type: 'autocomplete',
    required: false,
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
    message: 'Estado / Provincia No puede contener más de 3 letras iguales consecutivas ni números. No se permiten caracteres especiales',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(beneficiaryType=M)',
    requiredConditions: '(beneficiaryType=M)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-120',
    idHtml: 'txtBeneficiaryCityM',
    name: 'beneficiaryCityM',
    orderAppearance: 13,
    label: 'Ciudad / Población*',
    type: 'autocomplete',
    required: false,
    placeholder: '',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9\\s\\-\\.\\(\\)]*[A-ZÑ0-9\\s\\-\\.\\(\\)])(?:([A-ZÑ0-9\\s\\-\\.\\(\\)])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9\\s\\.\\-\\(\\)]/',
    source: 'IPRE',
    sourceID: 'cityTown',
    sourceStructure: ['cityTownId', 'description', 'cityTownId'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Ciudad / Población es un campo obligatorio y no puede estar vacío.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(beneficiaryType=M)',
    requiredConditions: '(beneficiaryType=M)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-121',
    idHtml: 'slctBeneficiaryCountryM',
    name: 'beneficiaryCountryM',
    orderAppearance: 14,
    label: 'País*',
    type: 'select',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'country',
    sourceStructure: ['countryID', 'description', 'countryID'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'País es un campo obligatorio y no puede estar vacío.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(beneficiaryType=M)',
    requiredConditions: '(beneficiaryType=M)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '151'
  }
];
