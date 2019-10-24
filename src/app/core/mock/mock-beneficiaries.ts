import {Beneficiary} from '../../models/beneficiary-model';
import {Field} from '../../models';

export const Beneficiarios: Field[] = [
  {
    id: 'field-86',
    idHtml: 'radioBeneficiaryType',
    name: 'beneficiaryType',
    orderAppearance: 1,
    label: 'Tipo de beneficiario',
    type: 'radio',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'CUSTOM',
    sourceID: 'typeBeneficiary',
    sourceStructure: ['id', 'name', 'value'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El tipo de beneficiario es requerido',
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
    id: 'field-87',
    idHtml: 'txtBeneficiaryName',
    name: 'beneficiaryName',
    orderAppearance: 2,
    label: 'Nombres(s)*',
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
    message: 'El nombre es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'beneficiaryType=phyPerson',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: 'field-88',
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
    value: '',
  },
  {
    id: 'field-89',
    idHtml: 'txtBeneficiaryFaLastName',
    name: 'beneficiaryFaLastName',
    orderAppearance: 3,
    label: 'Apellido paterno*',
    type: 'text',
    required: true,
    placeholder: 'Apellido paterno*',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El apellido paterno es obligatorio es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'beneficiaryType=phyPerson',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: 'field-90',
    idHtml: 'txtBeneficiaryMoLastName',
    name: 'beneficiaryMoLastName',
    orderAppearance: 4,
    label: 'Apellido materno*',
    type: 'text',
    required: true,
    placeholder: 'Apellido materno*',
    length: '',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El apellido materno es obligatorio es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'beneficiaryType=phyPerson',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: 'field-91',
    idHtml: 'radioSuspensiveCondition',
    name: 'suspensiveCodition',
    orderAppearance: 5,
    label: 'Condición suspensiva',
    type: 'radio',
    required: true,
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
    message: 'La condición suspensiva es obligatoria',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'beneficiaryType=fidPerson',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: 'field-92',
    idHtml: 'txtContractNumber',
    name: 'contractNumber',
    orderAppearance: 6,
    label: 'Folio de contrato',
    type: 'text',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
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
    renderConditions: 'beneficiaryType=fidPerson',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: 'field-93',
    idHtml: 'txtInstructionLetterNumber',
    name: 'instructionLetterNumber',
    orderAppearance: 7,
    label: 'Folio de carta instrucción',
    type: 'text',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
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
    renderConditions: 'beneficiaryType=fidPerson',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: 'field-94',
    idHtml: 'slctBeneficiaryRelationship',
    name: 'beneficiaryRelationship',
    orderAppearance: 8,
    label: 'Parentesco*',
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
    message: 'El parentesco es obligatorio',
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
    id: 'field-95',
    idHtml: 'dateBeneficiaryBirthDate',
    name: 'beneficiaryBirthDate',
    orderAppearance: 9,
    label: 'Fecha de nacimiento*',
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
    message: 'La fecha de nacimiento es obligatoria',
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
    id: 'field-96',
    idHtml: 'txtParticipationPercentage',
    name: 'participationPercentage',
    orderAppearance: 10,
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
    message: 'El porcentaje de participación es obligatorio',
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
    id: 'field-97',
    idHtml: 'radioSameAsTitular',
    name: 'sameAsTitular',
    orderAppearance: 11,
    label: 'Es el mismo domicilio que el titular: ',
    type: 'radio',
    required: true,
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
    renderConditions: 'beneficiaryType=phyPerson',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: 'field-98',
    idHtml: 'txtBeneficiaryStreet',
    name: 'beneficiaryStreet',
    orderAppearance: 12,
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
    message: 'La calle / avenida es obligatoria',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'sameAsTitular=false',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-99',
    idHtml: 'txtBeneficiaryExteriorNumber',
    name: 'beneficiaryExteriorNumber',
    orderAppearance: 13,
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
    message: 'El número exterior es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'sameAsTitular=false',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-100',
    idHtml: 'txtBeneficiaryInteriorNumber',
    name: 'beneficiaryInteriorNumber',
    orderAppearance: 14,
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
    message: 'El número exterior es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'sameAsTitular=false',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-101',
    idHtml: 'txtBeneficiaryZipCode',
    name: 'beneficiaryZipCode',
    orderAppearance: 15,
    label: 'Código postar*',
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
    message: 'El código postal es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'sameAsTitular=false',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-102',
    idHtml: 'txtBeneficiarySuburb',
    name: 'beneficiarySuburb',
    orderAppearance: 16,
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
    message: 'La colonia / barrio es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'sameAsTitular=false',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-103',
    idHtml: 'txtBeneficiaryMunicipality',
    name: 'beneficiaryMunicipality',
    orderAppearance: 17,
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
    message: 'El municipio / alcadía es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'sameAsTitular=false',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-104',
    idHtml: 'txtBeneficiaryState',
    name: 'beneficiaryState',
    orderAppearance: 18,
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
    message: 'El estado / provincia es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'sameAsTitular=false',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-105',
    idHtml: 'txtBeneficiaryCity',
    name: 'beneficiaryCity',
    orderAppearance: 19,
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
    message: 'La ciudad / población es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'sameAsTitular=false',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-106',
    idHtml: 'slctBeneficiaryCountry',
    name: 'beneficiaryCountry',
    orderAppearance: 20,
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
    message: 'El país es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'sameAsTitular=false',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  }
];

export const BENEFICIARIES: Beneficiary[] =  [
  {
    beneficiaryId: '1',
    beneficiaryType: 'phyPerson',
    name: 'ODALYS', // if typeBeneficiary is Physic person
    fatherLastName: 'MARRON', // if typeBeneficiary is Physic person
    motherLastName: 'SANCHEZ', // if typeBeneficiary is Physic person
    relationship: 'Hermana',
    birthDateOrConstitution: '1993/01/06',
    address: {
      street: 'Aluminio',
      exteriorNumber: '145',
      interiorNumber: 'D-7',
      zipCode: '15220',
      neighborhood: 'Nicolas Bravo',
      municipality: 'Venustiano Carranza',
      state: 'CDMX',
      city: 'CDMX',
      country: 'México'
    },
    participationPercentage: '50'
  },
  {
    beneficiaryId: '5',
    beneficiaryType: 'morPerson',
    relationship: ' ',
    businessName: 'Empresa',
    birthDateOrConstitution: '2001/03/08',
    address: {
      street: 'CALLE',
      exteriorNumber: '123',
      zipCode: '07840',
      neighborhood: 'BECINDARIO',
      municipality: 'MUNICIPIO',
      state: 'ESTADO',
      city: 'CIUDAD',
      country: 'PAIS'
    },
    participationPercentage: '10',
    suspensiveCondition: 'NO', // if typeBeneficiary is Moral person
    contractNumber: '12345678', // if typeBeneficiary is Moral person
    instructionLetterNumber: 'string' // if typeBeneficiary is Moral person
  }
];

export const beneficiaryFields: Field[] = [
  {
    id: 'field-93',
    idHtml: 'slctBeneficiaryRelationshipI',
    name: 'beneficiaryRelationshipI',
    orderAppearance: 1,
    label: '',
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
    message: 'El parentesco es obligatorio',
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
    id: 'field-95',
    idHtml: 'txtParticipationPercentageI',
    name: 'participationPercentageI',
    orderAppearance: 2,
    label: '',
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
    message: 'El porcentaje de participación es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  }
];
