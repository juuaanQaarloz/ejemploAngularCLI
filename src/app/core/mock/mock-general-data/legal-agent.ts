import {Field} from '../../../models';

export const DatosRepresentanteLegal: Field[] = [
  {
    id: 'field-48',
    idHtml: 'txtNameLegalAgent1',
    name: 'nameLegalAgent1',
    orderAppearance: 1,
    label: 'Nombre(s)*',
    type: 'text',
    required: true,
    placeholder: 'Nombre(s)',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s]*[A-ZÑ\\s])(?:([A-ZÑ\\s])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s]/',
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
  },
  {
    id: 'field-49',
    idHtml: 'txtFatherLastNameLegalAgent1',
    name: 'fatherLastNameLegalAgent1',
    orderAppearance: 2,
    label: 'Apellido paterno*',
    type: 'text',
    required: true,
    placeholder: 'Apellido paterno',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s\\.]*[A-ZÑ\\s\\.])(?:([A-ZÑ\\s\\.])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s\\.]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El apellido paterno es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-50',
    idHtml: 'txtMotherLastNameLegalAgent1',
    name: 'motherLastNameLegalAgent1',
    orderAppearance: 3,
    label: 'Apellido materno',
    type: 'text',
    required: false,
    placeholder: 'Apellido materno',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s\\.]*[A-ZÑ\\s\\.])(?:([A-ZÑ\\s\\.])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s\\.]/',
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
  }
];

export const DatosRepresentanteLegal1: Field[] = [
  {
    id: 'field-51',
    idHtml: 'txtNameLegalAgent2',
    name: 'nameLegalAgent2',
    orderAppearance: 4,
    label: 'Nombre (s)*',
    type: 'text',
    required: true,
    placeholder: 'Nombre (s)',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s]*[A-ZÑ\\s])(?:([A-ZÑ\\s])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s]/',
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
  },
  {
    id: 'field-52',
    idHtml: 'txtFatherLastNameLegalAgent2',
    name: 'fatherLastNameLegalAgent2',
    orderAppearance: 5,
    label: 'Apellido paterno*',
    type: 'text',
    required: true,
    placeholder: 'Apellido paterno',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s\\.]*[A-ZÑ\\s\\.])(?:([A-ZÑ\\s\\.])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s\\.]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El apellido paterno es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-53',
    idHtml: 'txtMotherLastNameLegalAgent2',
    name: 'motherLastNameLegalAgent2',
    orderAppearance: 6,
    label: 'Apellido materno',
    type: 'text',
    required: false,
    placeholder: 'Apellido materno',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s\\.]*[A-ZÑ\\s\\.])(?:([A-ZÑ\\s\\.])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s\\.]/',
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
  }
];

export const DatosRepresentanteLegal2: Field[] = [
  {
    id: 'field-54',
    idHtml: 'radioDeclarationM',
    name: 'declarationM',
    orderAppearance: 7,
    label: 'Dentro de la composición accionaria de la persona moral, ¿Algún accionista(s) extranjero(s), su(s) cónyuge(s) o\n' +
      'familiar(es)  (tales como padres, hermanos, abuelos, hijos, nietos del accionista o del cónyuge), desempeña o ha desempeñado ' +
      'funciones públicas destacadas en territorio nacional o en el extranjero?',
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
    message: 'En caso de seleccionar SI, llenar sección de estructura corporativa y accionista del formato 4',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: ''
    // value: true
  }
];
