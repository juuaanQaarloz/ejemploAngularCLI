import {Field} from '../../../models';
export const statements0: Field[] = [
  {
    id: 'field-1601',
    idHtml: 'radioTaxQuestion',
    name: 'taxQuestion',
    orderAppearance: 1,
    label: '¿Está sujeto al pago de impuestos en el extranjero?*',
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
    entityField: 'app_own_py_frgn_tax_ind',
    value: ''
  }
];
export const statements: Field[] = [
  {
    id: 'field-1602',
    idHtml: 'radioPublicFunctionQuestion',
    name: 'publicFunctionQuestion',
    orderAppearance: 4,
    label: '¿Desempeñas o has desempeñado tú, tu cónyuge o un familiar (padres, hermanos, abuelos, hijos, nietos tuyos o de tu cónyuge) funciones públicas destacadas? (persona políticamente expuesta)*',
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
    entityField: 'app_own_pltcl_dclr_ind',
    value: ''
  }
];


export const statements1: Field[] = [
  {
    id: 'field-1603',
    idHtml: 'radioForeignQuestion',
    name: 'foreignQuestion',
    orderAppearance: 5,
    label: '¿Eres extranjero?*',
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
    entityField: 'app_own_frng_ind',
    value: ''
  },
  {
    id: 'field-1610',
    idHtml: 'txtEspecificar',
    name: 'especificar',
    orderAppearance: 6,
    label: 'Especificar*',
    type: 'text',
    required: false,
    placeholder: '',
    length: '360',
    minValue: 0,
    maxValue: 360,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9\\s]*[A-ZÑ0-9\\s])(?:([A-ZÑ0-9\\s])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9\\s]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    requiredConditions: '(foreignQuestion=true)',
    renderConditions: '(foreignQuestion=true)',
    enableConditions: '',
    entity: '',
    entityField: 'app_own_frng_spec',
    value: '',
    legend: 'En caso de ser extranjero, o tener residencia en el extranjero, especifica las razones para contratar un ' +
      'seguro en territorio nacional.'
  }
  /*,
  {
    id: 'field-1603',
    idHtml: 'radioAssociationQuestion',
    name: 'associationQuestion',
    orderAppearance: 7,
    label: '¿Eres accionista (vínculo patrimonial) de alguna sociedad o asociación?*',
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
    renderConditions: '(associationQuestion=1)',
    enableConditions: '',
    entity: '',
    entityField: 'app_own_shre_ind',
    value: ''
  }*/
];

export const statements2: Field[] = [
  {
    id: 'field-1604',
    idHtml: 'radioThirdPersonQuestion',
    name: 'thirdPersonQuestion',
    orderAppearance: 8,
    label: '¿Actúas por cuenta de un tercero?*',
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
    renderConditions: '(thirdPersonQuestion=1)',
    enableConditions: '',
    entity: '',
    entityField: 'app_own_thrd_prty_ind',
    value: ''
  }
];


export const statements3: Field[] = [
  {
    id: 'field-1605',
    idHtml: 'radioSuppliersQuestion',
    name: 'supplierQuestion',
    orderAppearance: 9,
    label: '¿Eres el proveedor de recursos con los que se financiarán las obligaciones, pago o aportaciones contraídas con MetLife?*',
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
    renderConditions: '(supplierQuestion=1)',
    enableConditions: '',
    entity: '',
    entityField: 'app_own_pymnt_rsrc_ind',
    value: ''
  }
];
