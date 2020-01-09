import {Field} from '../../../models';

export const FormasPago: Field[] = [
  {
    id: 'field-63',
    idHtml: 'slctPaymentMethods',
    name: 'paymentMethods',
    orderAppearance: 1,
    label: 'Periodicidad de pago*',
    type: 'select',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    noAllowedCharactersPattern: '',
    source: 'IPRE',
    sourceID: 'paymentMethod',
    sourceStructure: ['key', 'keyValue', 'key'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Periodicidad de pago es un campo obligatorio.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: 'accounts.prfr_py_prdcty_cd',
    value: ''
  },
  {
    id: 'field-63',
    idHtml: 'slctPayMode',
    name: 'payMode',
    orderAppearance: 2,
    label: 'Modo de pago*',
    type: 'select',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    noAllowedCharactersPattern: '',
    source: 'IPRE',
    sourceID: 'paymentType',
    sourceStructure: ['key', 'keyValue', 'key'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Modo de pago es un campo obligatorio.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: 'accounts.clct_mthd_nm',
    value: ''
  },
  {
    id: 'field-55',
    idHtml: 'txtNameS',
    name: 'chargeDay',
    orderAppearance: 3,
    label: 'Día de cargo*',
    type: 'text',
    required: true,
    placeholder: 'Día de cargo',
    length: '2',
    minValue: 0,
    maxValue: 2,
    pattern: '',
    noAllowedCharactersPattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Día de cargo es un campo obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: 'accounts.prfr_py_wk_day_cd',
    value: '',
  },
];

export const FormasPagoAutorizo: Field[] = [
    {
        id: 'field-63',
        idHtml: 'slctContactMedium',
        name: 'contactMedium',
        orderAppearance: 1,
        label: 'Medio de contacto*',
        type: 'select',
        required: true,
        placeholder: '',
        length: '',
        minValue: 0,
        maxValue: 0,
        pattern: '',
        source: 'IPRE',
        sourceID: 'preferredContactType',
        sourceStructure: ['key', 'keyValue', 'key'],
        style: '',
        styleClass: '',
        styleClassError: '',
        message: 'Medio de contacto es un campo obligatorio.',
        messageClass: '',
        messageError: '',
        messageErrorClass: '',
        renderConditions: '',
        enableConditions: '',
        entity: '',
        entityField: 'acccount.prfr_cntct_typ_nm',
        value: ''
    },
    {
        id: 'field-55',
        idHtml: 'txtDayS',
        name: 'contactDay',
        orderAppearance: 3,
        label: 'Día de contacto*',
        type: 'select',
        required: true,
        placeholder: 'Día de contacto',
        length: '200',
        minValue: 0,
        maxValue: 200,
        pattern: '',
        source: 'IPRE',
        sourceID: 'preferredContactDay',
        sourceStructure: ['key', 'value', 'key'],
        style: '',
        styleClass: '',
        styleClassError: '',
        message: 'Día de contacto es un campo obligatorio',
        messageClass: '',
        messageError: '',
        messageErrorClass: '',
        requiredConditions: '(contactMedium=3)',
        renderConditions: '(contactMedium=3)',
        enableConditions: '',
        entity: '',
        entityField: '',
        value: '',
    },
    {
        id: 'field-55',
        idHtml: 'txtScheduleS',
        name: 'contactSchedule',
        orderAppearance: 3,
        label: 'Horario de contacto*',
        type: 'select',
        required: true,
        placeholder: 'Horario de contacto',
        length: '200',
        minValue: 0,
        maxValue: 200,
        pattern: '',
      source: 'IPRE',
      sourceID: 'preferredContactTime',
      sourceStructure: ['key', 'value', 'key'],
        style: '',
        styleClass: '',
        styleClassError: '',
        message: 'Horario de contacto es un campo obligatorio',
        messageClass: '',
        messageError: '',
        messageErrorClass: '',
        requiredConditions: '(contactMedium=3)',
        renderConditions: '(contactMedium=3)',
        enableConditions: '',
        entity: '',
        entityField: '',
        value: '',
    },
];
