import {OperationsInterface} from '../models/operations-interface';
import {FieldInterface} from '../models/field-interface';
import {ApplicationInterface} from '../models/application-interface';

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

export const MockFields: FieldInterface[] = [
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
    source: '',
    sourceID: '',
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
  },
];

export const MockApplication: ApplicationInterface = {
  id: '1',
  product: 'MetaLife',
  version: '1.0',
  sections: [
    {
      title: 'TIPO DE PRODUCTO',
      content: {
        fields: [
          {
            id: '1',
            idHtml: '',
            name: 'productTypeSelect',
            orderAppearance: 1,
            label: 'Tipo de Producto',
            type: 'select',
            required: true,
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
            enableConditions: '',
            entity: '',
            entityField: '',
          },
        ],
        renderConditions: ''
      },
      renderConditions: ''
    },
    {
      title: 'SOLICITUD UNICA',
      content: {
        process: {
          title: 'CAPTURA DE DATOS',
          steps: [
            {
              title: 'Información General del Contratante',
              content: {
                fields: MockFields,
                operations: MockOperations,
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
                fields: MockFields,
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
                fields: MockFields,
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

