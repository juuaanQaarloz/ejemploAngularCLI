import {OperationsInterface} from '../../models/operations-interface';
import {FieldInterface} from '../../models/field-interface';
import {ApplicationInterface} from '../../models/application-interface';
import {ContentInterface} from '../../models/content-interface';

export const MockOperations: OperationsInterface[] = [
  {
    id: '1',
    name: 'btnClose',
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
    name: 'btnValidate',
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
    name: 'btnNext',
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

export const DatosGeneralesPersonaFisica: FieldInterface[] = [
  {
    id: '1',
    idHtml: '',
    name: 'namesText',
    orderAppearance: 1,
    label: 'Nombres(s)*',
    type: 'text',
    required: true,
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
    idHtml: '',
    name: 'lastName1Text',
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
    idHtml: '',
    name: 'lastName2Text',
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
    idHtml: '',
    name: 'birthDateText',
    orderAppearance: 4,
    label: 'Fecha de nacimiento*',
    type: 'text',
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
  },
  {
    id: '5',
    idHtml: '',
    name: 'ageText',
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
    idHtml: '',
    name: 'rfcText',
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
    idHtml: '',
    name: 'curpText',
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
    idHtml: '',
    name: 'sexSelect',
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
    idHtml: '',
    name: 'civilStatusSelect',
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
    idHtml: '',
    name: 'idTypeSelect',
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
    idHtml: '',
    name: 'idNumberText',
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
    idHtml: '',
    name: 'idEmisorText',
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
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '13',
    idHtml: '',
    name: 'birthCountrySelect',
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
    idHtml: '',
    name: 'cityText',
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
    idHtml: '',
    name: 'nationalitiesSelect',
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
    idHtml: '',
    name: 'streatText',
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
    idHtml: '',
    name: 'exteriorNumberText',
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
    idHtml: '',
    name: 'interiorNumberText',
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
    idHtml: '',
    name: 'zipCodeText',
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
    idHtml: '',
    name: 'suburbText',
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
    idHtml: '',
    name: 'municipalityText',
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
    idHtml: '',
    name: 'stateText',
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
    idHtml: '',
    name: 'homeCountrySelect',
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
    idHtml: '',
    name: 'phoneText',
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
    idHtml: '',
    name: 'cellPhhoneText',
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
    idHtml: '',
    name: 'emailCheckox',
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
    idHtml: '',
    name: 'emailText',
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
    idHtml: '',
    name: 'emailConfirmationText',
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
  },
];


export const DatosTipoContratante: FieldInterface[] = [
  {
    id: '1',
    idHtml: '',
    name: 'typePerson',
    orderAppearance: 16,
    label: '¿Eres persona física o moral?',
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
  },
  {
    id: '2',
    idHtml: '',
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
    fields: DatosTipoContratante,
    renderConditions: ''
  },
  {
    title: 'Información general del contratante persona física',
    fields: DatosGeneralesPersonaFisica,
    operations: MockOperations,
    renderConditions: ''
  },
  {
    title: 'Domicilio y datos del contratante persona física',
    fields: DatosDomicilioPersonaFisica,
    operations: MockOperations,
    renderConditions: ''
  },
];

export const MockApplication: ApplicationInterface = {
  id: '1',
  product: 'MetaLife',
  version: '1.0',
  sections: [
    {
      title: 'SOLICITUD UNICA',
      content: {
        process: {
          title: 'CAPTURA DE DATOS',
          steps: [
            {
              title: 'Información General del Contratante',
              content: {
                contentChildren: MockContentChildren,
                renderConditions: ''
              },
              previousStep: '0',
              nextStep: '2',
              renderConditions: '',
              isCompleted: false
            },
            {
              title: 'Información Laboral del Contratante',
              content: {
                fields: DatosGeneralesPersonaFisica,
                operations: MockOperations,
                renderConditions: ''
              },
              previousStep: '1',
              nextStep: '3',
              renderConditions: '',
              isCompleted: false
            },

            {
              title: 'Datos del Plan del Contratante',
              content: {
                fields: DatosGeneralesPersonaFisica,
                operations: MockOperations,
                renderConditions: ''
              },
              previousStep: '2',
              nextStep: '0',
              renderConditions: '',
              isCompleted: false
            }
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

