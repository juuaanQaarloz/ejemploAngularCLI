import {Field} from '../../../models';

export const DatosGeneralesPersonaMoral: Field[] = [
  {
    id: 'field-40',
    idHtml: 'txtBusinessName',
    name: 'businessName',
    orderAppearance: 1,
    label: 'Denominación/ Razón social*',
    type: 'text',
    required: true,
    placeholder: 'Denomicación/ Razón social*',
    length: '40',
    minValue: 0,
    maxValue: 60,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'La razón social es obligatorio. No se permiten caracteres especiales ni 3 letras consecutivas iguales.',
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
    id: 'field-41',
    idHtml: 'txtComercialName',
    name: 'comercialName',
    orderAppearance: 2,
    label: 'Nombre comercial*',
    type: 'text',
    required: true,
    placeholder: 'Nombre comercial',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^[A-ZÑ0-9]*$/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El nombre comercial es obligatorio. No se permiten caracteres especiales ni 3 letras consecutivas iguales.',
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
    id: 'field-42',
    idHtml: 'txtRFCmoral',
    name: 'RFCmoral',
    orderAppearance: 3,
    label: 'RFC*',
    type: 'text',
    required: true,
    placeholder: '12 posiciones',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '/^[A-Z&]{3,3}[0-9]{6,6}[A-Z0-9]{3,3}$/',
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
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-43',
    idHtml: 'dteConstitutionDate',
    name: 'constitutionDate',
    orderAppearance: 4,
    label: 'Fecha de constitución*',
    type: 'date',
    required: true,
    placeholder: 'YYYY/MM/DD',
    length: '10',
    minValue: 0,
    maxValue: 10,
    pattern: '/^([0-2][0-9]|[3][0-1])\\/([0][1-9]|[1][0-2])\\/([1-2][0-9]{3,3})$/',
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
    entity: '',
    entityField: '',
    value: ''
  },
  {
    id: 'field-44',
    idHtml: 'slctNationalityMoral',
    name: 'nationalityMoral',
    orderAppearance: 5,
    label: 'Nacionalidad*',
    type: 'select',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'countries',
    sourceStructure: ['id', 'name', 'code'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'Nacionalidad(s) es obligatorio. Nacionalidad(s) debe contener un valor alfanumérico.',
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
    id: 'field-45',
    idHtml: 'txtMercantilNumber',
    name: 'mercantilNumber',
    orderAppearance: 6,
    label: 'Folio mercantil (empresas de nacionalidad mexicana)*',
    type: 'text',
    required: true,
    placeholder: 'Folio mercantil',
    length: '40',
    minValue: 0,
    maxValue: 40,
    pattern: '',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El folio mercantil es obligatorio y no puede contener mas de 3 letras y/o 3 números iguales consecutivos.' +
      ' No se permiten caracteres especiales.',
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
    id: 'field-46',
    idHtml: 'slctEconomicSector',
    name: 'economicSector',
    orderAppearance: 7,
    label: 'Sector económico*',
    type: 'select',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'sector',
    sourceStructure: ['id', 'name', 'code'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El Sector económico es obligatorio y no puede ser vacío.',
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
    id: 'field-47',
    idHtml: 'txtSpecificSector',
    name: 'specificSector',
    orderAppearance: 8,
    label: 'Especificar*',
    type: 'text',
    required: false,
    placeholder: 'Especificar otro',
    length: '200',
    minValue: 0,
    maxValue: 200,
    pattern: '/^[A-ZÑ0-9\\s]*$/',
    source: '',
    sourceID: '',
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El Sector económico es obligatorio y no puede contener mas de 3 letras y/o 3 números iguales consecutivos. ' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '',
    messageErrorClass: '',
    renderConditions: '',
    enableConditions: '(economicSector=OTRO)',
    entity: '',
    entityField: '',
    value: ''
  }
];
