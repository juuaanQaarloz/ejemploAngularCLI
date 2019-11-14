import {Field} from '../../../models';

export const InformacionLaboralSolicitante1: Field[] = [
  {
    id: 'field-85',
    idHtml: 'txtOccupationS',
    name: 'occupationS',
    orderAppearance: 1,
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
  }
];

export const InformacionLaboralSolicitante: Field[] = [
  {
    id: 'field-86',
    idHtml: 'txtDetailOccupationS',
    name: 'detailOccupationS',
    orderAppearance: 1,
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
    value: ''
  },
  {
    id: 'field-87',
    idHtml: 'txtCompanyNameS',
    name: 'companyNameS',
    orderAppearance: 2,
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
    value: ''
  },
  {
    id: 'field-88',
    idHtml: 'txtCompanyActivityS',
    name: 'companyActivityS',
    orderAppearance: 3,
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
    value: ''
  },
  {
    id: 'field-89',
    idHtml: 'txtSalaryS',
    name: 'salaryS',
    orderAppearance: 4,
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
    value: ''
  },
  {
    id: 'field-90',
    idHtml: 'slctAdditionalOccupation',
    name: 'additionalOccupation',
    orderAppearance: 5,
    label: '¿Tiene alguna otra ocupación o fuente de ingreso adicional?',
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
    message: 'Una respuesta es requerida',
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
    id: 'field-91',
    idHtml: 'txtWhichOne',
    name: 'whichOne',
    orderAppearance: 6,
    label: '¿Cúal?',
    type: 'text',
    required: false,
    placeholder: '',
    length: '200',
    minValue: 0,
    maxValue: 200,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El campo no puede contener más de 3 letras iguales consecutivas ni números.' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'additionalOccupation=true',
    enableConditions: '',
    // requiredConditions: 'additionalOccupation=true',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-92',
    idHtml: 'txtAdditionalSalary',
    name: 'additionalSalary',
    orderAppearance: 7,
    label: 'Monto de ingreso adicional',
    type: 'text',
    required: false,
    placeholder: '',
    length: '12',
    minValue: 0,
    maxValue: 12,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El campo permite solo números',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: 'additionalOccupation=true',
    enableConditions: '',
    // requiredConditions: 'additionalOccupation=true',
    entity: '',
    entityField: '',
    value: ''
  }
];
