import {Field} from '../../../models';

export const medicalQuestions: Field[] = [
  {
    id: 'field-154',
    idHtml: 'radioDiseasesQuestion',
    name: 'diseasesQuestion',
    orderAppearance: 1,
    label: '1. ¿Te ha sido diagnosticado o estas bajo seguimiento médico o en tratamiento de alguno de los siguientes ' +
      'padecimientos: presión alta, hipertensión, diabetes, cardiovasculares, infarto al miocardio, insuficiencia renal, ' +
      'cáncer o tumor, SIDA, parálisis, paraplejia, enfisema, asma o cualquier enfermedad del pulmón (salvo bronquitis aguda),' +
      ' hígado, riñones, digestivo, próstata o matriz o consumes algún medicamento?',
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
    entityField: '',
    value: ''
  },
  {
    id: 'field-155',
    idHtml: 'radioMedicalTestQuestion',
    name: 'medicalTestQuestion',
    orderAppearance: 2,
    label: '2. En los últimos 10 años, ¿Haz estado hospitalizado o en urgencias por una operación, ' +
      'tratamiento o te han practicado estudios de laboratorio y/o gabinete como electrocardiogramas, ' +
      'ultrasonido, radiografías, tomografías, resonancias, etc. (excepto check up o chequeos de rutina)',
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
    entityField: '',
    value: ''
  },
  {
    id: 'field-156',
    idHtml: 'radioExtraDiseasesQuestion',
    name: 'extraDiseasesQuestion',
    orderAppearance: 3,
    label: '3. ¿Tienes o has tenido algún padecimiento, condición, afección, cirugía y/o molestia física y/o enfermedad a parte ' +
      'de las ya mencionadas, así mismo has solicitado o percibido alguna indemnización por incapacidad de cualquier tipo?',
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
    entityField: '',
    value: ''
  }
];

export const medicalFields: Field[] = [
  {
    id: 'field-157',
    idHtml: 'txtDescribeDiseases',
    name: 'describeDiseases',
    orderAppearance: 1,
    label: '',
    type: 'text',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Nombre es un campo obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-177',
    idHtml: 'dteDiagnosticDate',
    name: 'diagnosticDate',
    orderAppearance: 2,
    label: '',
    type: 'date',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 10,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Fecha es un campo obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-158',
    idHtml: 'txtDurationDiseases',
    name: 'durationDiseases',
    orderAppearance: 3,
    label: '',
    type: 'text',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Duración es un campo obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-159',
    idHtml: 'txtActualMedicalCondition',
    name: 'actualMedicalCondition',
    orderAppearance: 4,
    label: '',
    type: 'text',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Condición física actual es un campo obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '',
    entity: '',
    entityField: '',
    value: ''
  }
];

export const medicalFieldsDialog: Field[] = [
  {
    id: 'field-157',
    idHtml: 'txtDescribeDiseasesD',
    name: 'describeDiseasesD',
    orderAppearance: 1,
    label: 'Nombre de la enfermedad, lesión, estudio o tratamiento',
    type: 'autocomplete',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '',
    source: 'IPRE',
    sourceID: 'countries',
    sourceStructure: ['id', 'name', 'code'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Nombre es un campo obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-177',
    idHtml: 'dteDiagnosticDateD',
    name: 'diagnosticDateD',
    orderAppearance: 2,
    label: 'Fecha en la que se sufrió o practicaron',
    type: 'date',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 10,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Fecha es un campo obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-158',
    idHtml: 'txtDurationDiseasesD',
    name: 'durationDiseasesD',
    orderAppearance: 3,
    label: 'Duración',
    type: 'text',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Duración es un campo obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '',
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-159',
    idHtml: 'txtActualMedicalConditionD',
    name: 'actualMedicalConditionD',
    orderAppearance: 4,
    label: 'Condición física actual',
    type: 'text',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 60,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Condición física actual es un campo obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '',
    entity: '',
    entityField: '',
    value: ''
  }
];
