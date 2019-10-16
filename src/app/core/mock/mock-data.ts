import {OperationsInterface} from '../../models/operations-interface';
import {FieldInterface} from '../../models/field-interface';
import {ApplicationInterface} from '../../models/application-interface';
import {ContentInterface} from '../../models/content-interface';

export const MockOperations: OperationsInterface[] = [
  {
    id: '1',
    idHtml: 'btnClose',
    name: 'close',
    label: 'CERRAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'closeStep',
    renderConditions: '',
    enableConditions: '',
  },
  {
    id: '2',
    idHtml: 'btnValidate',
    name: 'validate',
    label: 'VALIDAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'validateStep',
    renderConditions: '',
    enableConditions: '',
  },
  {
    id: '3',
    idHtml: 'btnNext',
    name: 'next',
    label: 'SIGUIENTE',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'nextStep',
    renderConditions: '',
    enableConditions: '',
  }
];

export const InformacionLaboralPersonaFisica: FieldInterface[] = [
  {
    id: '29',
    idHtml: 'txtOccupation',
    name: 'occupation',
    orderAppearance: 29,
    label: 'Ocupación o profesión*',
    type: 'text',
    required: true,
    placeholder: 'Ocupación o profesión',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La Ocupación o profesión es obligatoria',
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
    id: '30',
    idHtml: 'txtDetailOccupation',
    name: 'detailOccupation',
    orderAppearance: 30,
    label: 'Detalle de la ocupación o profesión',
    type: 'text',
    required: false,
    placeholder: 'Detalle de la ocupación',
    length: '',
    minValue: 0,
    maxValue: 60,
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
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '31',
    idHtml: 'txtCompanyName',
    name: 'companyName',
    orderAppearance: 31,
    label: 'Nombre de la empresa*',
    type: 'text',
    required: true,
    placeholder: 'Nombre de la empresa',
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El nombre de la empresa es obligatorio',
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
    id: '32',
    idHtml: 'txtCompanyActivity',
    name: 'companyActivity',
    orderAppearance: 32,
    label: 'Actividad o giro de la empresa*',
    type: 'text',
    required: true,
    placeholder: 'Actividad o giro',
    length: '',
    minValue: 0,
    maxValue: 200,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La actividad o giro de la empresa es obligatoria',
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
    id: '33',
    idHtml: 'txtSalary',
    name: 'salary',
    orderAppearance: 33,
    label: 'Ingreso mensual aproximado* (pesos)',
    type: 'text',
    required: true,
    placeholder: 'Ingreso mensual',
    length: '',
    minValue: 0,
    maxValue: 12,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El ingreso mensual es obligatorio',
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


export const DatosGeneralesPersonaFisica: FieldInterface[] = [
  {
    id: '1',
    idHtml: 'txtName',
    name: 'name',
    orderAppearance: 1,
    label: 'Nombres(s)*',
    type: 'text',
    required: false,
    placeholder: 'Nombres(s)',
    length: '40',
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
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '2',
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
    message: 'El Apellido paterno es obligatorio',
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
    id: '3',
    idHtml: 'txtMotherLastName',
    name: 'motherLastName',
    orderAppearance: 3,
    label: 'Apellido materno*',
    type: 'text',
    required: true,
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
    message: 'El apellido materno es obligatorio',
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
    id: '4',
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
    message: 'La fecha de naciemiento es obligatoria',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
    canChangeType: true
  },
  {
    id: '5',
    idHtml: 'txtAge',
    name: 'age',
    orderAppearance: 5,
    label: 'Edad*',
    type: 'text',
    required: true,
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
    message: 'La edad es obligatoria',
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
    id: '6',
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
    message: 'El rfc es obligatorio',
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
    id: '7',
    idHtml: 'txtCurp',
    name: 'curp',
    orderAppearance: 7,
    label: 'CURP*',
    type: 'text',
    required: true,
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
    message: 'El curp es obligatorio',
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
    id: '8',
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
    message: 'El sexo es obligatorio',
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
    id: '9',
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
    message: 'El estado civil es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '10',
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
    message: 'El tipo de identificación es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '11',
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
    message: 'El número de identificación es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '12',
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
    message: 'La emisora de identificación es obligatoria',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: 'txtEdad>18,chboxGender=Female',
    entity: '',
    entityField: '',
  },
  {
    id: '13',
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
    message: 'El país de nacimiento es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '14',
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
    message: 'La ciudad / población es obligatoria',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '15',
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
    message: 'La nacionalidad es obligatoria',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  }
];

export const DatosDomicilioPersonaFisica: FieldInterface[] = [
  {
    id: '16',
    idHtml: 'txtStreet',
    name: 'street',
    orderAppearance: 16,
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
    id: '17',
    idHtml: 'txtExteriorNumber',
    name: 'exteriorNumber',
    orderAppearance: 17,
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
    id: '18',
    idHtml: 'txtInteriorNumber',
    name: 'interiorNumber',
    orderAppearance: 18,
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
    id: '19',
    idHtml: 'txtZipCode',
    name: 'zipCode',
    orderAppearance: 19,
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
    id: '20',
    idHtml: 'txtSuburb',
    name: 'suburb',
    orderAppearance: 20,
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
    id: '21',
    idHtml: 'txtMunicipality',
    name: 'municipality',
    orderAppearance: 21,
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
    id: '22',
    idHtml: 'txtState',
    name: 'state',
    orderAppearance: 22,
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
    id: '23',
    idHtml: 'slctHomeCountry',
    name: 'homeCountry',
    orderAppearance: 23,
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
  },
  {
    id: '24',
    idHtml: 'txtPhone',
    name: 'phone',
    orderAppearance: 24,
    label: 'Teléfono fijo (incluir lada)',
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '25',
    idHtml: 'txtCellPhone',
    name: 'cellPhone',
    orderAppearance: 25,
    label: 'Teléfono celular* (sin 044/045)',
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '26',
    idHtml: 'chboxEmail',
    name: 'emailCheck',
    orderAppearance: 26,
    label: '',
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
  },
  {
    id: '27',
    idHtml: 'txtEmail',
    name: 'email',
    orderAppearance: 27,
    label: 'Correo electrónico',
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'emailCheckox=true',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '28',
    idHtml: 'txtEmailConfirmation',
    name: 'emailConfirmation',
    orderAppearance: 28,
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'emailCheckox=true',
    enableConditions: '',
    entity: '',
    entityField: '',
  }
];


export const DatosTipoContratante: FieldInterface[] = [
  {
    id: '1',
    idHtml: 'rdioTypePerson',
    name: 'typePerson',
    orderAppearance: 16,
    label: '¿Eres persona física o moral?',
    type: 'radio',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'CUSTOM',
    sourceID: 'typePerson',
    sourceStructure: ['id', 'name', 'value'],
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
    value: 'phyPerson'
  },
  {
    id: '2',
    idHtml: 'rdioTypeContractor',
    name: 'typeContractor',
    orderAppearance: 17,
    label: '¿El solicitante es el mismo que el contratante?',
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: true
  }
  /*{
    id: '17',
    idHtml: '',
    name: 'daysContact',
    orderAppearance: 17,
    label: 'Día preferente de contacto',
    type: 'checkbox',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'weekDays',
    sourceStructure: ['id', 'name', 'value'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La nacionalidad es obligatoria',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },*/
];

export const MockContentChildren: ContentInterface[] = [
  {
    id: '1.1',
    idParent: '1',
    parentType: 'Content',
    fields: DatosTipoContratante,
    renderConditions: '',
    showContent: true,
    styleClass: 'ml-form questions-type'
  },
  {
    id: '1.2',
    idParent: '1',
    parentType: 'Content',
    title: 'Información general del contratante persona física',
    fields: DatosGeneralesPersonaFisica,
    operations: MockOperations,
    showContent: true,
    enableConditions: 'txtEdad>18,chboxGender=Female',
    renderConditions: ''
  },
  {
    id: '1.3',
    idParent: '1',
    parentType: 'Content',
    title: 'Domicilio y datos del contratante persona física',
    fields: DatosDomicilioPersonaFisica,
    operations: MockOperations,
    showContent: false,
    renderConditions: ''
  },
];

export const MockApplication: ApplicationInterface = {
  id: '1',
  product: 'MetaLife',
  version: '1.0',
  sections: [
    {
      id: '1',
      idTemplate: '1',
      title: 'SOLICITUD UNICA',
      content: {
        id: '1',
        idParent: '0',
        parentType: 'Section',
        showContent: true,
        process: {
          id: '1',
          idHtml: 'processDataCaption',
          idContent: '1',
          title: 'CAPTURA DE DATOS',
          render: true,
          steps: [
            {
              id: '1',
              idHtml: 'stepGeneralInfo',
              title: 'Información General del Contratante',
              content: {
                id: '1',
                idParent: '1',
                parentType: 'Step',
                contentChildren: MockContentChildren,
                renderConditions: '',
                operations: MockOperations,
                showContent: true
              },
              previousStep: '0',
              nextStep: '2',
              renderConditions: '',
              isCompleted: false
            },
            {
              id: '2',
              idHtml: 'stepWorkInfo',
              title: 'Información Laboral del Contratante',
              content: {
                id: '2',
                idParent: '1',
                parentType: 'Step',
                fields: InformacionLaboralPersonaFisica,
                operations: MockOperations,
                showContent: true,
                renderConditions: ''
              },
              previousStep: '1',
              nextStep: '3',
              renderConditions: '',
              isCompleted: false
            },
            {
              id: '3',
              idHtml: 'stepBeneficiaries',
              title: 'Beneficiarios del Contratante',
              content: {
                id: '3',
                idParent: '1',
                parentType: 'Step',
                fields: InformacionLaboralPersonaFisica,
                operations: MockOperations,
                showContent: false,
                renderConditions: ''
              },
              previousStep: '3',
              nextStep: '4',
              renderConditions: '',
              isCompleted: false
            },
           ],
          renderConditions: ''
        },
        renderConditions: '',
        operations: MockOperations,
      },
      renderConditions: ''
    }
  ]
};

