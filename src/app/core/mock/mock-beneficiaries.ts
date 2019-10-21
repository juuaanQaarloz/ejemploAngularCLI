import {Beneficiary} from '../../models/beneficiary-model';
import {Field} from '../../models';

export const Beneficiarios: Field[] = [
  {
    id: '42',
    idHtml: 'radioBeneficiaryType',
    name: 'beneficiaryType',
    orderAppearance: 42,
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
    id: '43',
    idHtml: 'txtBeneficiaryName',
    name: 'beneficiaryName',
    orderAppearance: 43,
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
    renderConditions: '',
    enableConditions: 'radioBeneficiaryType=phyPerson',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '44',
    idHtml: 'txtBeneficiaryFaLastName',
    name: 'beneficiaryFaLastName',
    orderAppearance: 44,
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
    renderConditions: '',
    enableConditions: 'radioBeneficiaryType=phyPerson',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '45',
    idHtml: 'txtBeneficiaryMoLastName',
    name: 'beneficiaryMoLastName',
    orderAppearance: 45,
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
    renderConditions: '',
    enableConditions: 'radioBeneficiaryType=phyPerson',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '46',
    idHtml: 'radioSuspensiveCondition',
    name: 'suspensiveCodition',
    orderAppearance: 46,
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
    renderConditions: '',
    enableConditions: 'radioBeneficiaryType=morPerson',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '47',
    idHtml: 'txtContractNumber',
    name: 'contractNumber',
    orderAppearance: 47,
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
    renderConditions: '',
    enableConditions: 'radioBeneficiaryType=morPerson',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '48',
    idHtml: 'txtInstructionLetterNumber',
    name: 'instructionLetterNumber',
    orderAppearance: 48,
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
    renderConditions: '',
    enableConditions: 'radioBeneficiaryType=morPerson',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '49',
    idHtml: 'slctBeneficiaryRelationship',
    name: 'beneficiaryRelationship',
    orderAppearance: 49,
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
    id: '50',
    idHtml: 'dateBeneficiaryBirthDate',
    name: 'beneficiaryBirthDate',
    orderAppearance: 50,
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
    enableConditions: 'radioBeneficiaryType=phyPerson',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '51',
    idHtml: 'txtParticipationPercentage',
    name: 'participationPercentage',
    orderAppearance: 51,
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
    id: '52',
    idHtml: 'radioSameAsTitular',
    name: 'sameAsTitular',
    orderAppearance: 52,
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
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '53',
    idHtml: 'txtBeneficiaryStreet',
    name: 'beneficiaryStreet',
    orderAppearance: 53,
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
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '54',
    idHtml: 'txtBeneficiaryExteriorNumber',
    name: 'beneficiaryExteriorNumber',
    orderAppearance: 54,
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
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '55',
    idHtml: 'txtBeneficiaryInteriorNumber',
    name: 'beneficiaryInteriorNumber',
    orderAppearance: 55,
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
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '56',
    idHtml: 'txtBeneficiaryZipCode',
    name: 'beneficiaryZipCode',
    orderAppearance: 56,
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
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '57',
    idHtml: 'txtBeneficiarySuburb',
    name: 'beneficiarySuburb',
    orderAppearance: 57,
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
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '58',
    idHtml: 'txtBeneficiaryMunicipality',
    name: 'beneficiaryMunicipality',
    orderAppearance: 58,
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
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '59',
    idHtml: 'txtBeneficiaryState',
    name: 'beneficiaryState',
    orderAppearance: 59,
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
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '60',
    idHtml: 'txtBeneficiaryCity',
    name: 'beneficiaryCity',
    orderAppearance: 60,
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
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '61',
    idHtml: 'slctBeneficiaryCountry',
    name: 'beneficiaryCountry',
    orderAppearance: 61,
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
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  }
];

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

export const beneficiaryFields: Field[] = [
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
