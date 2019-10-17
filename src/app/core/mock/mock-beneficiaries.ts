import {Beneficiary} from '../../models/beneficiary-model';
import {FieldInterface} from '../../models';

export const BENEFICIARIES: Beneficiary[] =  [
  {
    beneficiaryId: '01',
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
    participationPercentage: '40',
  },
  {
    beneficiaryId: '02',
    beneficiaryType: 'phyPerson',
    name: 'MADIAN', // if typeBeneficiary is Physic person
    fatherLastName: 'MARRON', // if typeBeneficiary is Physic person
    motherLastName: 'SANCHEZ', // if typeBeneficiary is Physic person
    relationship: 'Hermana',
    birthDateOrConstitution: '1994/01/01',
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
    participationPercentage: '30',
  },
  {
    beneficiaryId: '03',
    beneficiaryType: 'phyPerson',
    name: 'ANA LUISA', // if typeBeneficiary is Physic person
    fatherLastName: 'BOBADILLA', // if typeBeneficiary is Physic person
    motherLastName: 'MARRON', // if typeBeneficiary is Physic person
    relationship: 'Hermana',
    birthDateOrConstitution: '2005/01/07',
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
    participationPercentage: '30',
  }

  /*{
    beneficiaryId: '02',
    beneficiaryType: 'moralPerson',
    relationship: ' ',
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
    participationPercentage: '50',
    suspensiveCondition: 'NO', // if typeBeneficiary is Moral person
    contractNumber: '12345678', // if typeBeneficiary is Moral person
    instructionLetterNumber: 'string' // if typeBeneficiary is Moral person
  }*/
];

export const beneficiaryFields: FieldInterface[] = [
  {
    id: '1',
    idHtml: 'slctBeneficiaryRelationship',
    name: 'beneficiaryRelationship',
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
    id: '2',
    idHtml: 'txtParticipationPercentage',
    name: 'participationPercentage',
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
  },
];
