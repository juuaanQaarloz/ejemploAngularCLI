import {Beneficiary} from '../../../models/beneficiary-model';
import {Field} from '../../../models';

export const NewBeneficiaryFields: Field[] = [
  {
    id: 'field-93',
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
    value: 'phyPerson'
  }
];

export const BENEFICIARIES: Beneficiary[] =  [
  {
    beneficiaryId: '1',
    beneficiaryType: 'phyPerson',
    name: 'ODALYS', // if typeBeneficiary is Physic person
    fatherLastName: 'MARRON', // if typeBeneficiary is Physic person
    motherLastName: 'SANCHEZ', // if typeBeneficiary is Physic person
    relationship: 'HA',
    birthDateOrConstitution: '1993/01/06',
    addressSameAsTitular: false,
    address: {
      street: 'Aluminio',
      exteriorNumber: '145',
      interiorNumber: 'D-7',
      zipCode: '15220',
      neighborhood: 'Nicolas Bravo',
      municipality: 'Venustiano Carranza',
      state: 'CDMX',
      city: 'CDMX',
      country: 'MX'
    },
    participationPercentage: '50'
  },
  {
    beneficiaryId: '5',
    beneficiaryType: 'morPerson',
    relationship: 'OT',
    businessName: 'Empresa',
    birthDateOrConstitution: '2001/03/08',
    addressSameAsTitular: false,
    address: {
      street: 'CALLE',
      exteriorNumber: '123',
      zipCode: '07840',
      neighborhood: 'BECINDARIO',
      municipality: 'MUNICIPIO',
      state: 'ESTADO',
      city: 'CIUDAD',
      country: 'MX'
    },
    participationPercentage: '10',
    suspensiveCondition: 'NO', // if typeBeneficiary is Moral person
    contractNumber: '12345678', // if typeBeneficiary is Moral person
    instructionLetterNumber: 'string' // if typeBeneficiary is Moral person
  }
  /*{
    beneficiaryId: '6',
    beneficiaryType: 'fidPerson',
    relationship: 'OT',
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
      country: 'MX'
    },
    participationPercentage: '10',
    suspensiveCondition: 'NO', // if typeBeneficiary is Moral person
    contractNumber: '12345678', // if typeBeneficiary is Moral person
    instructionLetterNumber: 'string' // if typeBeneficiary is Moral person
  }*/
];

export const beneficiaryFields: Field[] = [
  {
    id: 'field-115',
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
    sourceID: 'relationship',
    sourceStructure: ['number', 'description', 'value'],
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
    id: 'field-116',
    idHtml: 'txtParticipationPercentageI',
    name: 'participationPercentageI',
    orderAppearance: 2,
    label: '',
    type: 'text',
    required: true,
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
    message: 'El porcentaje de participación es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
    detonateFunction: 'updateItem'
  }
];
