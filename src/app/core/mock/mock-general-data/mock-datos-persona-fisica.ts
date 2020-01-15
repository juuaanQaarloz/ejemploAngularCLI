import {Field} from '../../../models';

export const DatosGeneralesPersonaFisica: Field[] = [
  {
    id: 'field-3',
    idHtml: 'txtName',
    name: 'name',
    orderAppearance: 1,
    label: 'Nombre(s)*',
    type: 'text',
    required: true,
    placeholder: 'Nombre(s)',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s\\.\\-]*[A-ZÑ\\s\\.\\-])(?:([A-ZÑ\\s\\.\\-])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s\\.\\-]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El nombre es obligatorio y no puede contener más de 3 letras y/o 3 números iguales consecutivos.' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'insurer.per_frst_nm',
    value: ''
  },
  {
    id: 'field-4',
    idHtml: 'txtFatherLastName',
    name: 'fatherLastName',
    orderAppearance: 2,
    label: 'Apellido paterno*',
    type: 'text',
    required: true,
    placeholder: 'Apellido paterno',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s\\.\\-]*[A-ZÑ\\s\\.\\-])(?:([A-ZÑ\\s\\.\\-])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s\\.\\-]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El apellido paterno es obligatorio y no puede contener más de 3 letras y/o 3 números iguales consecutivos.' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'insurer.per_ptrnl_lst_nm',
    value: ''
  },
  {
    id: 'field-5',
    idHtml: 'txtMotherLastName',
    name: 'motherLastName',
    orderAppearance: 3,
    label: 'Apellido materno',
    type: 'text',
    required: false,
    placeholder: 'Apellido materno',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s\\.\\-]*[A-ZÑ\\s\\.\\-])(?:([A-ZÑ\\s\\.\\-])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s\\.\\-]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El apellido materno no puede contener más de 3 letras y/o 3 números iguales consecutivos.' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'insurer.per_mtrnl_lst_nm',
    value: ''
  },
  {
    id: 'field-6',
    idHtml: 'dteBirthDate',
    name: 'birthDate',
    orderAppearance: 4,
    label: 'Fecha de nacimiento*',
    type: 'date',
    required: true,
    placeholder: 'YYYY/MM/DD',
    length: '10',
    minValue: 0,
    maxValue: 10,
    pattern: '/^([1-2][0-9]{3,3})\\/([0][1-9]|[1][0-2])\\/([0-2][0-9]|[3][0-1])$/',
    noAllowedCharactersPattern: '/[\\D\\/]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La fecha no tiene un formato válido.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'insurer.per_brth_dt',
    value: ''
  },
  {
    id: 'field-7',
    idHtml: 'txtAge',
    name: 'age',
    orderAppearance: 5,
    label: 'Edad*',
    type: 'text',
    required: false,
    placeholder: 'Edad',
    length: '3',
    minValue: 0,
    maxValue: 3,
    pattern: '/^([1-9]|[0-9]{2}(?<!00))$/',
    noAllowedCharactersPattern: '/[\\D]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La edad no es válida, el rango de edad es entre 18 y 70 años',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'insurer.per_age',
    disable: true
  },
  {
    id: 'field-8',
    idHtml: 'txtRFC',
    name: 'rfc',
    orderAppearance: 6,
    label: 'RFC*',
    type: 'text',
    required: true,
    placeholder: 'RFC',
    length: '13',
    minValue: 0,
    maxValue: 13,
    pattern: '/^[A-Z&]{4,4}[0-9]{6,6}[A-Z0-9]{0,3}$/',
    noAllowedCharactersPattern: '/[^a-zA-Z0-9&]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El RFC no puede estar vacío o no parece ser válido.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'insurer.party_natl_id',
    value: ''
  },
  {
    id: 'field-9',
    idHtml: 'txtCurp',
    name: 'curp',
    orderAppearance: 7,
    label: 'CURP',
    type: 'text',
    required: false,
    placeholder: 'CURP',
    length: '18',
    minValue: 0,
    maxValue: 18,
    pattern: '/^[A-Z&]{4,4}[0-9]{6,6}[A-Z&]{6,6}[0-9]{2,2}$/',
    noAllowedCharactersPattern: '/[^a-zA-Z0-9&]/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El CURP no cumple con el formato LLLL000000AAALLL00',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'insurer.per_per_id',
    value: ''
  },
  {
    id: 'field-10',
    idHtml: 'slctGender',
    name: 'gender',
    orderAppearance: 8,
    label: 'Sexo*',
    type: 'select',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    noAllowedCharactersPattern: '',
    source: 'IPRE',
    sourceID: 'gender',
    sourceStructure: ['key', 'keyValue', 'key'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Sexo es un campo obligatorio.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'insurer.per_sex_cd',
    value: ''
  },
  {
    id: 'field-11',
    idHtml: 'slctCivilStatus',
    name: 'civilStatus',
    orderAppearance: 9,
    label: 'Estado civil*',
    type: 'select',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    noAllowedCharactersPattern: '',
    source: 'IPRE',
    sourceID: 'maritalStatus',
    sourceStructure: ['key', 'keyValue', 'key'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Estado civil es un campo obligatorio.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'insurer.per_mry_stts_cd',
    value: ''
  },
  {
    id: 'field-12',
    idHtml: 'slctIdType',
    name: 'idType',
    orderAppearance: 10,
    label: 'Tipo de identificación oficial vigente*',
    type: 'select',
    required: true,
    placeholder: '',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    noAllowedCharactersPattern: '',
    source: 'IPRE',
    sourceID: 'subIdentificationType',
    sourceStructure: ['subIdentificationId', 'subIdentificationDescript', 'subIdentificationId'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Tipo de identificación oficial vigente es un campo obligatorio.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'app_own_card_typ_cd_id',
    value: ''
  },
  {
    id: 'field-13',
    idHtml: 'txtIdNumber',
    name: 'idNumber',
    orderAppearance: 11,
    label: 'Número de identificación*',
    type: 'text',
    canChangeType: true,
    required: true,
    placeholder: 'Número de identificación',
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
    message: 'Número de ID es obligatorio.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'insurer.per_card_num',
    value: ''
  },
  {
    id: 'field-14',
    idHtml: 'txtIdEmisor',
    name: 'idEmisor',
    orderAppearance: 12,
    label: 'Emisor de identificación*',
    type: 'select',
    required: true,
    placeholder: 'Emisor de identificación',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9]*[A-ZÑ0-9])(?:([A-ZÑ0-9])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9]/',
    source: 'IPRE',
    sourceID: 'subIdentificationType',
    sourceStructure: ['subIdentificationId', 'subIdentificationDescript', 'subIdentificationId'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Emisora de identificación es un campo obligatorio.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'insurer.per_card_emsr'
  },
  {
    id: 'field-15',
    idHtml: 'slctBirthCountry',
    name: 'birthCountry',
    orderAppearance: 13,
    label: 'País de nacimiento*',
    type: 'select',
    required: true,
    placeholder: '',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    noAllowedCharactersPattern: '',
    source: 'IPRE',
    sourceID: 'country',
    sourceStructure: ['countryID', 'description', 'countryID'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El país de nacimiento es obligatorio.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'insurer.per_brth_cntry_nm',
    value: '151'
  },
  {
    id: 'field-16',
    idHtml: 'txtStateOfBirth',
    name: 'stateOfBirth',
    orderAppearance: 14,
    label: 'Estado / Provincia*',
    type: 'autocomplete',
    required: true,
    placeholder: 'Estado / Provincia',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9\\s\\-\\.\\(\\)]*[A-ZÑ0-9\\s\\-\\.\\(\\)])(?:([A-ZÑ0-9\\s\\-\\.\\(\\)])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9\\s\\.\\-\\(\\)]/',
    source: 'IPRE',
    sourceID: 'federalEntity',
    sourceStructure: ['entityId', 'entityName', 'entityId'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Debe elegirse un valor. No puede contener más de 3 letras y/o 3 números iguales consecutivos.' +
      ' No se permiten caracteres especiales',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'insurer.per_brth_stte_nm',
    value: ''
  },
  {
    id: 'field-17',
    idHtml: 'txtCity',
    name: 'city',
    orderAppearance: 15,
    label: 'Ciudad / Población*',
    type: 'autocomplete',
    required: true,
    placeholder: 'Ciudad / Población',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^(?=.*$)(?=[^A-ZÑ0-9\\s\\-\\.\\(\\)]*[A-ZÑ0-9\\s\\-\\.\\(\\)])(?:([A-ZÑ0-9\\s\\-\\.\\(\\)])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ0-9\\s\\.\\-\\(\\)]/',
    source: 'IPRE',
    sourceID: 'cityTown',
    sourceStructure: ['cityTownId', 'description', 'cityTownId'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Ciudad/Población es obligatorio. No puede contener más de 3 letras y/o 3 números iguales consecutivos.' +
      ' No se permiten caracteres especiales',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'insurer.per_brth_plc_nm'
  },
  {
    id: 'field-18',
    idHtml: 'slctNationality',
    name: 'nationality',
    orderAppearance: 16,
    label: 'Nacionalidad*',
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
    message: 'Nacionalidad es obligatorio. Nacionalidad debe contener un valor alfanumérico.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '(typePerson=phyPerson)',
    entity: '',
    entityField: 'insurer.nationalities[0].natlty_nm'
  },
  {
    id: 'field-19',
    idHtml: 'slctNationality1',
    name: 'nationality1',
    orderAppearance: 17,
    label: 'Nacionalidad 1',
    type: 'select',
    required: false,
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: 'insurer.nationalities[1].natlty_nm'
  },
  {
    id: 'field-20',
    idHtml: 'slctNationality2',
    name: 'nationality2',
    orderAppearance: 18,
    label: 'Nacionalidad 2',
    type: 'select',
    required: false,
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: 'insurer.nationalities[2].natlty_nm'
  },
  {
    id: 'field-21',
    idHtml: 'slctNationality3',
    name: 'nationality3',
    orderAppearance: 19,
    label: 'Nacionalidad 3',
    type: 'select',
    required: false,
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
    message: '',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '',
    entity: '',
    entityField: 'insurer.nationalities[3].natlty_nm'
  }
];
