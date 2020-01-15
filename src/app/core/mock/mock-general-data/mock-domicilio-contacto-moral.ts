import {Field} from '../../../models';

export const DatosDomicilioContactoMoral: Field[] = [
  {
    id: 'field-43',
    idHtml: 'txtStreetM',
    name: 'streetM',
    orderAppearance: 1,
    label: 'Calle / Avenida*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '60',
    minValue: 0,
    maxValue: 60,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9_\'#\\/&\\s\\-\\+\\.\\,]*[A-ZÑ0-9_\'#\\/&\\s\\-\\+\\.\\,])(?:([A-ZÑ0-9_\'#\\/&\\s\\-\\+\\.\\,])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9_\'#&\\s\\.\\-\\+\\/\\,]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La calle / avenida es obligatoria',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=morPerson)',
    entity: '',
    entityField: 'insurer.Address[0].strt_nm',
  },
  {
    id: 'field-44',
    idHtml: 'txtExteriorNumberM',
    name: 'exteriorNumberM',
    orderAppearance: 2,
    label: 'Número exterior*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '10',
    minValue: 0,
    maxValue: 10,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9#\\s\\-\\.]*[A-ZÑ0-9#\\s\\-\\.])(?:([A-ZÑ0-9#\\s\\-\\.])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9#\\s\\.\\-]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El valor capturado contine caracteres no válidos, valores aceptados ([A-Z], Ñ, 0-9 , #, -, .)',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=morPerson)',
    entity: '',
    entityField: 'insurer.Address[0].ext_num',
  },
  {
    id: 'field-45',
    idHtml: 'txtInteriorNumberM',
    name: 'interiorNumberM',
    orderAppearance: 3,
    label: 'Número interior',
    type: 'text',
    required: false,
    placeholder: '',
    length: '10',
    minValue: 0,
    maxValue: 10,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9#\\s\\-\\.]*[A-ZÑ0-9#\\s\\-\\.])(?:([A-ZÑ0-9#\\s\\-\\.])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9#\\s\\.\\-]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El número exterior es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: 'insurer.Address[0].int_num',
  },
  {
    id: 'field-46',
    idHtml: 'txtZipCodeM',
    name: 'zipCodeM',
    orderAppearance: 4,
    label: 'Código postal*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '5',
    minValue: 0,
    maxValue: 5,
    pattern: '/^[0-9]{5}(?<!00000)$/',
    noAllowedCharactersPattern: '/\\D/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El código postal es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=morPerson)',
    entity: '',
    entityField: '',
  },
  {
    id: 'field-47',
    idHtml: 'txtSuburbM',
    name: 'suburbM',
    orderAppearance: 5,
    label: 'Colonia / Barrio*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '60',
    minValue: 0,
    maxValue: 60,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s]*[A-ZÑ\\s])(?:([A-ZÑ\\s])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La colonia / barrio es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=morPerson)',
    entity: '',
    entityField: 'insurer.Address[0].subt_nm',
  },
  {
    id: 'field-48',
    idHtml: 'txtMunicipalityM',
    name: 'municipalityM',
    orderAppearance: 6,
    label: 'Municipio / Alcaldía*',
    type: 'text',
    required: true,
    placeholder: '',
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
    message: 'El municipio / alcadía es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=morPerson)',
    entity: '',
    entityField: 'insurer.Address[0].mncplty_nm',
  },
  {
    id: 'field-49',
    idHtml: 'txtStateM',
    name: 'stateM',
    orderAppearance: 7,
    label: 'Estado / Provincia*',
    type: 'autocomplete',
    required: true,
    placeholder: '',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: 'IPRE',
    sourceID: 'federalEntityCopy',
    sourceStructure: ['entityId', 'entityName', 'entityId'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Estado / Provincia No puede contener más de 3 letras iguales consecutivas ni números. No se permiten caracteres especiales',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=morPerson)',
    entity: '',
    entityField: 'insurer.Address[0].sta_spec',
  },
  {
    id: 'field-50',
    idHtml: 'slctHomeCountryM',
    name: 'homeCountryM',
    orderAppearance: 8,
    label: 'País*',
    type: 'select',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    noAllowedCharactersPattern: '',
    source: 'IPRE',
    sourceID: 'country',
    sourceStructure: ['countryID', 'description', 'countryID'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El país es obligatorio',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=morPerson)',
    entity: '',
    entityField: 'insurer.Address[0].cntry_spe',
  },
  {
    id: 'field-51',
    idHtml: 'txtContactName',
    name: 'contactName',
    orderAppearance: 9,
    label: 'Nombre del contacto*',
    type: 'text',
    required: true,
    placeholder: 'Nombre del contacto',
    length: '60',
    minValue: 0,
    maxValue: 60,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s\\.\\-]*[A-ZÑ\\s\\.\\-])(?:([A-ZÑ\\s\\.\\-])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s\\.\\-]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: '',
    messageClass: '',
    messageError: 'El nombre del contacto es obligatorio',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=morPerson)',
    entity: '',
    entityField: 'insurer.Address[0].',
  },
  {
    id: 'field-52',
    idHtml: 'txtPosition',
    name: 'position',
    orderAppearance: 10,
    label: 'Posición / Puesto',
    type: 'text',
    required: false,
    placeholder: 'Posición / Puesto',
    length: '60',
    minValue: 0,
    maxValue: 60,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9\\s\\-\\.\\(\\)]*[A-ZÑ0-9\\s\\-\\.\\(\\)])(?:([A-ZÑ0-9\\s\\-\\.\\(\\)])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9\\s\\.\\-\\(\\)]/',
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
  },
  {
    id: 'field-53',
    idHtml: 'txtPhoneM',
    name: 'phoneM',
    orderAppearance: 11,
    label: 'Teléfono fijo*',
    type: 'text',
    required: true,
    placeholder: 'Teléfono fijo',
    length: '10',
    minValue: 0,
    maxValue: 10,
    pattern: '/^[0-9]{10,10}$/',
    noAllowedCharactersPattern: '/\\D/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: '',
    messageClass: '',
    messageError: 'El teléfono fijo es obligatorio',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=morPerson)',
    entity: '',
    entityField: 'insurer.Address[0].hom_phon',
  },
  {
    id: 'field-54',
    idHtml: 'txtWorkPhone',
    name: 'workPhone',
    orderAppearance: 12,
    label: 'Teléfono laboral',
    type: 'text',
    required: false,
    placeholder: 'Teléfono laboral',
    length: '10',
    minValue: 0,
    maxValue: 10,
    pattern: '/^[0-9]{10,10}$/',
    noAllowedCharactersPattern: '/\\D/',
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
    entityField: 'insurer.Address[0].lab_phon',
  },
  {
    id: 'field-55',
    idHtml: 'txtExtentionPhone',
    name: 'extentionPhone',
    orderAppearance: 13,
    label: 'Extensión',
    type: 'text',
    required: false,
    placeholder: 'Extensión',
    length: '10',
    minValue: 0,
    maxValue: 10,
    pattern: '/^[0-9]{0,10}$/',
    noAllowedCharactersPattern: '/\\D/',
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
    entityField: 'insurer.Address[0].extt_num',
  },
  {
    id: 'field-57',
    idHtml: 'txtWorkEmail',
    name: 'workEmail',
    orderAppearance: 15,
    label: 'Correo electrónico laboral*',
    type: 'text',
    required: true,
    placeholder: '',
    length: '50',
    minValue: 0,
    maxValue: 50,
    pattern: '/^[A-Z0-9_\\-][A-Z0-9\\.\\-_]*[A-Z0-9_]@[A-Z0-9][A-Z0-9\\.\\-_]+\\.[A-Z]\\w{1,11}$/',
    noAllowedCharactersPattern: '/[^a-zA-Z0-9_@\\-\\.]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El correo eléctronico laboral es requerido',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=morPerson)',
    entity: '',
    entityField: 'insurer.Address[0].lab_mail_nm',
  }
];
