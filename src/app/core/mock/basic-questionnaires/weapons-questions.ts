import {Field} from '../../../models';

export const weaponsQuestions: Field[] = [
  {
    id: 'field-139',
    idHtml: 'radioWeaponsQuestion',
    name: 'weaponsQuestion',
    orderAppearance: 1,
    label: '1. ¿Usas o portas armas de fuego, punzocortantes o herramientas peligrosas y/o maquinarias pesadas?',
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
    style: 'margin:0 auto',
    styleClass: 'radio-options',
    styleClassError: '',
    message: 'Debe elegirse un valor',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  }
];

export const weaponsFields: Field[] = [
  {
    id: 'field-140',
    idHtml: 'textWeaponDescription',
    name: 'weaponDescription',
    orderAppearance: 1,
    label: '¿Cuál?*',
    type: 'text',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 300,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El campo es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(weaponsQuestion=true)',
    enableConditions: '',
    requiredConditions: '(weaponsQuestion=true)',
    entity: '',
    entityField: '',
    value: ''
  }
];

export const weaponsQuestions1: Field[] = [
  {
    id: 'field-141',
    idHtml: 'radioDangerWorkQuestion',
    name: 'radioDangerWorkQuestion',
    orderAppearance: 2,
    label: '2. ¿Trabajas en lugares, subterráneos, plataformas, petroleras o en lugares donde se maneja fuego, alta tensión, ' +
      'productos químicos, radioactivos, inflamables, explosivos​tóxicos o peligrosos?',
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
    style: 'margin:0 auto',
    styleClass: 'radio-options',
    styleClassError: '',
    message: 'Debe elegirse un valor',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: '',
    value: ''
  }
];

export const weaponsFields1: Field[] = [
  {
    id: 'field-142',
    idHtml: 'textDangerWorkName',
    name: 'dangerWorkName',
    orderAppearance: 1,
    label: '¿Cuál?*',
    type: 'text',
    required: false,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 300,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El campo es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '(radioDangerWorkQuestion=true)',
    enableConditions: '',
    requiredConditions: '(radioDangerWorkQuestion=true)',
    entity: '',
    entityField: '',
    value: ''
  }
];
