import {OperationsInterface} from '../models/operations-interface';
import {FieldInterface} from '../models/field-interface';
import {ApplicationInterface} from '../models/application-interface';

export const MockOperations: OperationsInterface[] = [
  {
    id: '1',
    name: 'btnGuardarCerrar',
    label: 'GUARDAR Y CERRAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'saveApplication',
    renderConditions: '',
    enableConditions: '',
  },
  {
    id: '2',
    name: 'btnValidate',
    label: 'VALIDAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-secondary',
    message: '',
    messageClass: '',
    delegateOperation: 'validateApplication',
    renderConditions: '',
    enableConditions: '',
  },
  {
    id: '3',
    name: 'linkCancelar',
    label: 'Cancelar',
    type: 'link',
    style: '',
    styleClass: 'ml-link',
    message: '',
    messageClass: '',
    delegateOperation: 'cancelApplication',
    renderConditions: '',
    enableConditions: '',
  }
];

export const MockFields: FieldInterface[] = [
  {
    id: '1',
    name: 'nameText',
    orderAppearance: 1,
    label: 'Nombre(s)',
    type: 'text',
    required: false,
    placeholder: 'Nombre(s)',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    message: 'Nombre(s)',
    messageClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '2',
    name: 'lastName1Text',
    orderAppearance: 2,
    label: 'Apellido Materno',
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
    message: 'Apellido Materno',
    messageClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '3',
    name: 'lastName2Text',
    orderAppearance: 3,
    label: 'Apellido Paterno',
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
    message: '',
    messageClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '4',
    name: 'ageText',
    orderAppearance: 4,
    label: 'Age',
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
    message: '',
    messageClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '5',
    name: 'sexSelect',
    orderAppearance: 5,
    label: 'Sexo',
    type: 'select',
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
    message: '',
    messageClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '6',
    name: 'birthDateText',
    orderAppearance: 6,
    label: 'Fecha de Nacimiento',
    type: 'text',
    required: false,
    placeholder: 'DD-MM-AAAA',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    message: '',
    messageClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '7',
    name: 'rfcText',
    orderAppearance: 7,
    label: 'RFC',
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
    message: '',
    messageClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '8',
    name: 'marrigeStatusSelect',
    orderAppearance: 8,
    label: 'Estado Civil',
    type: 'select',
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
    message: '',
    messageClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: '',
  },
  {
    id: '7',
    name: 'yes/noQuestion',
    orderAppearance: 6,
    label: '¿Esta es una pregunta mas larga para hacer una prueba?',
    type: 'radio',
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
    message: '',
    messageClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: '7',
    name: 'termsConditionsCheck',
    orderAppearance: 7,
    label: 'Acepto terminos y condiciones',
    type: 'checkbox',
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
    message: '',
    messageClass: '',
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
      title: 'TIPO PERSONA',
      content: {
        fields: [
          {
            id: '1',
            name: 'personSelect',
            orderAppearance: 1,
            label: 'Tipo de Persona',
            type: 'select',
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
            message: '',
            messageClass: '',
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
              title: 'Información General del Solicitante',
              content: {
                fields: MockFields,
                operations: MockOperations,
                renderConditions: ''
              },
              previousStep: '0',
              nextStep: '2',
              renderConditions: ''
            },
            {
              title: 'Información Laboral del Solicitante',
              content: {
                fields: MockFields,
                operations: MockOperations,
                renderConditions: ''
              },
              previousStep: '1',
              nextStep: '3',
              renderConditions: ''
            },

            {
              title: 'Datos del Plan del Solicitante',
              content: {
                fields: MockFields,
                operations: MockOperations,
                renderConditions: ''
              },
              previousStep: '2',
              nextStep: '0',
              renderConditions: ''
            }
           ],
          renderConditions: ''
        },
        renderConditions: ''
      },
      renderConditions: ''
    }
  ]
};

