import {Field} from '../../../models';

export const BeneficiaryFieldsP: Field[] = [
  {
    id: 'field-94',
    idHtml: 'txtBeneficiaryName',
    name: 'beneficiaryName',
    orderAppearance: 2,
    label: 'Nombres(s)*',
    type: 'text',
    required: false,
    placeholder: 'Nombre(s)*',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '/^[A-ZÑ\\s]*$/',
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
    renderConditions: '(beneficiaryType=phyPerson)',
    enableConditions: '',
    requiredConditions: '(beneficiaryType=phyPerson)',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-95',
    idHtml: 'txtBeneficiaryFaLastName',
    name: 'beneficiaryFaLastName',
    orderAppearance: 3,
    label: 'Apellido paterno*',
    type: 'text',
    required: false,
    placeholder: 'Apellido paterno*',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '/^[A-ZÑ\\s\\.]*$/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El apellido paterno es obligatorio y no puede contener más de 3 letras y/o 3 números iguales consecutivos.' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(beneficiaryType=phyPerson)',
    requiredConditions: '(beneficiaryType=phyPerson)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-96',
    idHtml: 'txtBeneficiaryMoLastName',
    name: 'beneficiaryMoLastName',
    orderAppearance: 4,
    label: 'Apellido materno*',
    type: 'text',
    required: false,
    placeholder: 'Apellido materno*',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '/^[A-ZÑ\\s\\.]*$/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El apellido materno es obligatorio y no puede contener más de 3 letras y/o 3 números iguales consecutivos.' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(beneficiaryType=phyPerson)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-97',
    idHtml: 'dateBeneficiaryBirthDate',
    name: 'beneficiaryBirthDate',
    orderAppearance: 5,
    label: 'Fecha de nacimiento*',
    type: 'date',
    required: false,
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
    renderConditions: '(beneficiaryType=phyPerson)',
    requiredConditions: '(beneficiaryType=phyPerson)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-98',
    idHtml: 'slctBeneficiaryRelationshipP',
    name: 'beneficiaryRelationshipP',
    orderAppearance: 6,
    label: 'Parentesco*',
    type: 'select',
    required: false,
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
    message: 'Parentesco es un campo obligatorio.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(beneficiaryType=phyPerson)',
    requiredConditions: '(beneficiaryType=phyPerson)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-99',
    idHtml: 'txtParticipationPercentageP',
    name: 'participationPercentageP',
    orderAppearance: 7,
    label: 'Porcentaje de participación*',
    type: 'text',
    required: false,
    placeholder: '%',
    length: '',
    minValue: 0,
    maxValue: 6,
    pattern: '/(^100(\\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\\.[0-9]{1,3})?$)|(^([0-9])(\\.[0-9]{1,4})?$)/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El % de participación es un campo obligatorio.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(beneficiaryType=phyPerson)',
    requiredConditions: '(beneficiaryType=phyPerson)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: 'field-100',
    idHtml: 'radioSameAsTitular',
    name: 'sameAsTitular',
    orderAppearance: 8,
    label: 'Es el mismo domicilio que el titular: ',
    type: 'radio',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'guardBoxOptions',
    sourceStructure: ['id', 'label', 'value'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El tipo de domicilio es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(beneficiaryType=phyPerson)',
    requiredConditions: '(beneficiaryType=phyPerson)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: true
  },
  {
    id: 'field-101',
    idHtml: 'txtBeneficiaryStreet',
    name: 'beneficiaryStreet',
    orderAppearance: 9,
    label: 'Calle / Avenida*',
    type: 'text',
    required: false,
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
    renderConditions: '(sameAsTitular=false)',
    requiredConditions: '(sameAsTitular=false)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-102',
    idHtml: 'txtBeneficiaryExteriorNumber',
    name: 'beneficiaryExteriorNumber',
    orderAppearance: 10,
    label: 'Número exterior*',
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
    renderConditions: '(sameAsTitular=false)',
    requiredConditions: '(sameAsTitular=false)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-103',
    idHtml: 'txtBeneficiaryInteriorNumber',
    name: 'beneficiaryInteriorNumber',
    orderAppearance: 11,
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
    renderConditions: '(sameAsTitular=false)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-104',
    idHtml: 'txtBeneficiaryZipCode',
    name: 'beneficiaryZipCode',
    orderAppearance: 12,
    label: 'Código postal*',
    type: 'text',
    required: false,
    placeholder: 'Código postal',
    length: '',
    minValue: 0,
    maxValue: 5,
    pattern: '/^[0-9]\\d{4,4}$/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El código postal solo puede contener números y tienen que ser 5 dígitos.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(sameAsTitular=false)',
    requiredConditions: '(sameAsTitular=false)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-105',
    idHtml: 'txtBeneficiarySuburb',
    name: 'beneficiarySuburb',
    orderAppearance: 13,
    label: 'Colonia / Barrio*',
    type: 'text',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '/^[A-ZÑ\\s]*$/',
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
    renderConditions: '(sameAsTitular=false)',
    requiredConditions: '(sameAsTitular=false)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-106',
    idHtml: 'txtBeneficiaryMunicipality',
    name: 'beneficiaryMunicipality',
    orderAppearance: 14,
    label: 'Municipio / Alcaldía*',
    type: 'text',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '/^[A-ZÑ\\s]*$/',
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
    renderConditions: '(sameAsTitular=false)',
    requiredConditions: '(sameAsTitular=false)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-107',
    idHtml: 'txtBeneficiaryState',
    name: 'beneficiaryState',
    orderAppearance: 15,
    label: 'Estado / Provincia*',
    type: 'text',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '/^[A-ZÑ\\s\\.\\-]*$/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message:  'Estado / Provincia no existente.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(sameAsTitular=false)',
    requiredConditions: '(sameAsTitular=false)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-108',
    idHtml: 'txtBeneficiaryCity',
    name: 'beneficiaryCity',
    orderAppearance: 16,
    label: 'Ciudad / Población*',
    type: 'text',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '/^[A-ZÑ0-9\\s\\-\\.\\(\\)]*$/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Ciudad / Población es un campo obligatorio y no puede estar vacío.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(sameAsTitular=false)',
    requiredConditions: '(sameAsTitular=false)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-109',
    idHtml: 'slctBeneficiaryCountry',
    name: 'beneficiaryCountry',
    orderAppearance: 17,
    label: 'País*',
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
    message: 'País es un campo obligatorio y no puede estar vacío.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(sameAsTitular=false)',
    requiredConditions: '(sameAsTitular=false)',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  }
];
