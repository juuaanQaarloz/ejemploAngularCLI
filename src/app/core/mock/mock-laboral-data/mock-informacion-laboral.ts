import {Field} from '../../../models';

export const InformaciolLaboral1: Field[] = [
  {
    id: 'field-35',
    idHtml: 'txtOccupation',
    name: 'occupation',
    orderAppearance: 1,
    label: 'Ocupación o profesión*',
    type: 'text',
    required: true,
    placeholder: 'Ocupación o profesión',
    length: '60',
    minValue: 0,
    maxValue: 60,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s]*[A-ZÑ\\s])(?:([A-ZÑ\\s()./])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s()./]/',
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
    entityField: 'insurer.per_job_aka_nm',
    value: ''
  }
];

export const InformacionLaboral: Field[] = [
  {
    id: 'field-36',
    idHtml: 'txtDetailOccupation',
    name: 'detailOccupation',
    orderAppearance: 1,
    label: 'Detalle de la ocupación o profesión',
    type: 'text',
    required: false,
    placeholder: 'Detalle de la ocupación',
    length: '60',
    minValue: 0,
    maxValue: 60,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s]*[A-ZÑ\\s])(?:([A-ZÑ\\s()./])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s()./]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: '',
    messageClass: '',
    messageError: 'El nombre es obligatorio y no puede contener más de 3 letras y/o 3 números iguales consecutivos. No se permiten caracteres especiales.',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: 'insurer.per_job_dtl_txt',
    value: ''
  },
  {
    id: 'field-37',
    idHtml: 'txtCompanyName',
    name: 'companyName',
    orderAppearance: 2,
    label: 'Nombre de la empresa donde laboras*',
    type: 'text',
    required: true,
    placeholder: 'Nombre de la empresa donde laboras',
    length: '60',
    minValue: 0,
    maxValue: 60,
    pattern: '/^(?=.*$)(?=[^A-Z0-9\\s\\.\\-]*[A-Z0-9\\s\\.\\-])(?:([A-Z0-9\\s\\.\\-])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-Z0-9\\s\\.\\-]/',
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
    entityField: 'insurer.per_job_co_nm',
    value: ''
  },
  {
    id: 'field-38',
    idHtml: 'txtCompanyActivity',
    name: 'companyActivity',
    orderAppearance: 3,
    label: 'Actividad o giro de la empresa*',
    type: 'text',
    required: true,
    placeholder: 'Actividad o giro',
    length: '200',
    minValue: 0,
    maxValue: 200,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9\\s\\-\\.\\(\\)]*[A-ZÑ0-9\\s\\-\\.\\(\\)])(?:([A-ZÑ0-9\\s\\-\\.\\(\\)])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9\\s\\.\\-\\(\\)]/',
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
    entityField: 'insurer.per_job_co_actvty',
    value: ''
  },
  {
    id: 'field-39',
    idHtml: 'txtSalary',
    name: 'salary',
    orderAppearance: 4,
    label: 'Ingreso mensual aproximado* (pesos)',
    type: 'text',
    required: true,
    placeholder: 'Ingreso mensual',
    length: '',
    minValue: 0,
    maxValue: null,
    pattern: '/([0-9]{1,10}|[0-9]{1,10}\\.[0-9]{2})$/',
    noAllowedCharactersPattern: '/[^\\d\\.]/',
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
    entityField: 'insurer.per_job_mo_incm_amt',
    value: ''
  }
];
