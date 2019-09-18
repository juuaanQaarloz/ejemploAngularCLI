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
    required: '',
    placeholder: 'Nombre(s)',
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
    id: '2',
    name: 'sexSelect',
    orderAppearance: 2,
    label: 'Sexo',
    type: 'select',
    required: '',
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
    id: '3',
    name: 'yes/noQuestion',
    orderAppearance: 2,
    label: '¿Usted fuma?',
    type: 'radio',
    required: '',
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
    id: '4',
    name: 'termsConditionsCheck',
    orderAppearance: 4,
    label: 'Acepto terminos y condiciones',
    type: 'checkbox',
    required: '',
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
            required: '',
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

