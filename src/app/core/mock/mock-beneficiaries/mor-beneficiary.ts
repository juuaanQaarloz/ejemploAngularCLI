import {Field} from '../../../models';

export const BeneficiaryFieldsM: Field[] = [
  {
    id: 'field-110',
    idHtml: 'txtBeneficiaryBusinessName',
    name: 'beneficiaryBusinessName',
    orderAppearance: 2,
    label: 'Denominación / Razón social*',
    type: 'text',
    required: true,
    placeholder: 'Denominación / Razón social',
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La denominación / razón social es obligatoria',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'beneficiaryType=morPerson',
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
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'relationships',
    sourceStructure: ['relationshipId', 'relationship', 'relationshipCode'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Relación es un campo obligatorio.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'beneficiaryType=morPerson',
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
    required: true,
    placeholder: 'YYYY/MM/DD',
    length: '',
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
    renderConditions: 'beneficiaryType=morPerson',
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
    required: true,
    placeholder: '%',
    length: '',
    minValue: 0,
    maxValue: 6,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El % de participación es un campo obligatorio.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'beneficiaryType=morPerson',
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
    message: 'Calle / Avenida es obligatoria. Puede contener más de 3 letras y/o 3 números iguales consecutivos.' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'beneficiaryType=morPerson',
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
    renderConditions: 'beneficiaryType=morPerson',
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
    renderConditions: 'beneficiaryType=morPerson',
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
    required: true,
    placeholder: 'Código postal',
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
    renderConditions: 'beneficiaryType=morPerson',
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
    message: 'Colonia / Barrio es obligatorio. No puede contener más de 3 letras y/o 3 números iguales consecutivos.' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'beneficiaryType=morPerson',
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
    message: 'Municipio / Alcaldía. No puede contener más de 3 letras y/o 3 números iguales consecutivos.' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'beneficiaryType=morPerson',
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
    message:  'Estado / Provincia no existente.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'beneficiaryType=morPerson',
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
    message: 'Ciudad / Población es un campo obligatorio y no puede estar vacío.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'beneficiaryType=morPerson',
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
    message: 'País es un campo obligatorio y no puede estar vacío.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'beneficiaryType=morPerson',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  }
];
