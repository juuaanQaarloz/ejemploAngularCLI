import {Field} from '../../../models';

export const PerfilTransaccionalNumero: Field[] = [
    {
        id: 'field-25',
        idHtml: 'txtNumeroAportaciones',
        name: 'numeroAportaciones',
        orderAppearance: 1,
        label: 'Aportaciones*',
        type: 'text',
        required: true,
        placeholder: '',
        length: '40',
        minValue: 0,
        maxValue: 40,
        pattern: '/^[0-9]*$/',
        noAllowedCharactersPattern: '/[\\D]/',
        source: '',
        sourceID: '',
        style: '',
        styleClass: '',
        styleClassError: '',
        message: 'Número de aportaciones solo puede contener números.',
        messageClass: '',
        messageError: '',
        messageErrorClass: '',
        renderConditions: '',
        enableConditions: '',
        entity: '',
        entityField: '',
    },
    {
        id: 'field-25',
        idHtml: 'txtNumeroRetiros',
        name: 'numeroRetiros',
        orderAppearance: 2,
        label: 'Retiros*',
        type: 'text',
        required: true,
        placeholder: '',
        length: '40',
        minValue: 0,
        maxValue: 40,
        pattern: '/^[0-9]*$/',
        noAllowedCharactersPattern: '/[\\D]/',
        source: '',
        sourceID: '',
        style: '',
        styleClass: '',
        styleClassError: '',
        message: 'Número de retiros solo puede contener números.',
        messageClass: '',
        messageError: '',
        messageErrorClass: '',
        renderConditions: '',
        enableConditions: '',
        entity: '',
        entityField: '',
    },
];

export const PerfilTransaccionalMonto: Field[] = [
    {
        id: 'field-25',
        idHtml: 'txtMontoAportaciones',
        name: 'montoAportaciones',
        orderAppearance: 3,
        label: 'Aportaciones*',
        type: 'text',
        required: true,
        placeholder: '',
        length: '40',
        minValue: 0,
        maxValue: 40,
        pattern: '/^[0-9]{0,10}\\.[0-9]{1,2}$/',
        noAllowedCharactersPattern: '/[\\D\\.]/',
        source: '',
        sourceID: '',
        style: '',
        styleClass: '',
        styleClassError: '',
        message: 'Monto de aportaciones solo puede contener números.',
        messageClass: '',
        messageError: '',
        messageErrorClass: '',
        renderConditions: '',
        enableConditions: '',
        entity: '',
        entityField: '',
    },
    {
        id: 'field-25',
        idHtml: 'txtMontoRetiros',
        name: 'montoRetiros',
        orderAppearance: 4,
        label: 'Retiros*',
        type: 'text',
        required: true,
        placeholder: '',
        length: '40',
        minValue: 0,
        maxValue: 40,
        pattern: '/^[0-9]{0,10}\\.[0-9]{1,2}$/',
        noAllowedCharactersPattern: '/[\\D\\.]/',
        source: '',
        sourceID: '',
        style: '',
        styleClass: '',
        styleClassError: '',
        message: 'Monto de retiros solo puede contener números.',
        messageClass: '',
        messageError: '',
        messageErrorClass: '',
        renderConditions: '',
        enableConditions: '',
        entity: '',
        entityField: '',
    },
];