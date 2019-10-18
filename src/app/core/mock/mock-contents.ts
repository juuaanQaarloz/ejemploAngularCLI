import {Content, Field, Operation, Process} from '../../models';
import {DatosGeneralesPersonaFisica} from './mock-general-data/mock-datos-persona-fisica';
import {DatosDomicilio} from './mock-general-data/mock-domicilio';
import {MockOperations} from './mock-operations';
import {InformacionLaboral} from './mock-laboral-data/mock-informacion-laboral';

export const MockFieldsContractorType: Field[] = [
  {
    id: 'field-2',
    idHtml: 'rdiotyContractorType',
    name: 'contractorType',
    orderAppearance: 2,
    label: '¿El solicitante es el mismo que el contratante?',
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
    value: true
  }
];

export const MockContentStep1Process1ContentSection2: Content[] = [
  {
    id: 'content-2.1',
    idParent: 'step-1',
    parentType: 'Step',
    idHtml: 'app-content-form-2.1',
    // title?: 'string',
    // process?: Process;
    fields: MockFieldsContractorType,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    // enableConditions?: 'string';
    // styleClass?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.2',
    idParent: 'step-1',
    parentType: 'Step',
    idHtml: 'app-content-form-2.2',
    title: 'Datos generales del contratante persona física',
    // process?: Process;
    fields: DatosGeneralesPersonaFisica,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    // enableConditions?: 'string';
    // styleClass?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.3',
    idParent: 'step-1',
    parentType: 'Step',
    idHtml: 'app-content-form-2.3',
    title: 'Domicilio del contratante persona física',
    // process?: Process;
    fields: DatosDomicilio,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    // enableConditions?: 'string';
    // styleClass?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.4',
    idParent: 'step-1',
    parentType: 'Step',
    idHtml: 'app-content-form-2.4',
    title: '',
    // process?: Process;
    // fields: DatosDomicilio,
    operations: MockOperations,
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    // enableConditions?: 'string';
    // styleClass: 'string',
    // --------------------------
  }
];

export const MockContentStep2Process1ContentSection2: Content[] = [
  {
    id: 'content-2.5',
    idParent: 'step-2',
    parentType: 'Step',
    idHtml: 'app-content-form-2.5',
    title: 'Información laboral del contratante persona física',
    // process?: Process;
    fields: InformacionLaboral,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    // enableConditions?: 'string';
    // styleClass?: 'string';
    // --------------------------
  }
];
