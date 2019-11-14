import {Content, Field} from '../../models';
import {DatosGeneralesPersonaFisica} from './mock-general-data/mock-datos-persona-fisica';
import {DatosDomicilio} from './mock-general-data/mock-domicilio';
import {MockOperations, SearchOccupationOperations, SearchOccupationOperationsS} from './mock-operations';
import {InformaciolLaboral1, InformacionLaboral} from './mock-laboral-data/mock-informacion-laboral';
import {DatosGeneralesPersonaMoral} from './mock-general-data/mock-datos-pesona-moral';
import {DatosDomicilioContactoMoral} from './mock-general-data/mock-domicilio-contacto-moral';
import {DatosRepresentanteLegal, DatosRepresentanteLegal1, DatosRepresentanteLegal2} from './mock-general-data/legal-agent';
import {DatosGeneralesSolicitante} from './mock-general-data/mock-datos-solicitante';
import {DatosDomicilioSolicitante} from './mock-general-data/mock-domicilio-solicitante';
import {InformacionLaboralSolicitante, InformacionLaboralSolicitante1} from './mock-laboral-data/mock-informacion-laboral-solicitante';
import {sportQuestions2, sportsFields1, sportsFields2, sportsQuestions1} from './basic-questionnaires/sports-aviation-hobbies';
import {habitsQuestions} from './basic-questionnaires/habits';
import {weaponsFields, weaponsQuestions} from './basic-questionnaires/weapons-questions';
import {medicalFields, medicalQuestions} from './basic-questionnaires/medical';

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

/*export const MockFieldsContractorTypeM: Field[] = [
  {
    id: 'field-36',
    idHtml: 'rdiotyContractorTypeM',
    name: 'contractorTypeM',
    orderAppearance: 1,
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
];*/

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
    contentType: 'looseFields'
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
    contentType: 'looseFields'
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
    contentType: 'looseFields'
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
    contentType: 'looseFields'
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
    title: '',
    // process?: Process;
    fields: InformaciolLaboral1,
    operations: SearchOccupationOperations,
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.6',
    idParent: 'step-2',
    parentType: 'Step',
    idHtml: 'app-content-form-2.6',
    title: '',
    // process?: Process;
    fields: InformacionLaboral,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.7',
    idParent: 'step-2',
    parentType: 'Step',
    idHtml: 'app-content-form-2.7',
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
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass: 'string',
    // --------------------------
  }
];

export const MockContentStep3Process1ContentSection2: Content[] = [
  /*{
    id: 'content-2.7',
    idParent: 'step-3',
    parentType: 'Step',
    idHtml: 'app-content-form-2.7',
    // title?: 'string',
    // process?: Process;
    fields: MockFieldsContractorTypeM,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass?: 'string';
    // --------------------------
  },*/
  {
    id: 'content-2.8',
    idParent: 'step-3',
    parentType: 'Step',
    idHtml: 'app-content-form-2.8',
    title: 'Datos generales del contratante persona moral',
    // process?: Process;
    fields: DatosGeneralesPersonaMoral,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.9',
    idParent: 'step-3',
    parentType: 'Step',
    idHtml: 'app-content-form-2.9',
    title: 'Domicilio del contratante persona moral',
    // process?: Process;
    fields: DatosDomicilioContactoMoral,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.10',
    idParent: 'step-3',
    parentType: 'Step',
    idHtml: 'app-content-form-2.10',
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
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass: 'string',
    // --------------------------
  }
];

export const MockContentStep4Process1ContentSection2: Content[] = [
  {
    id: 'content-2.11',
    idParent: 'step-4',
    parentType: 'Step',
    idHtml: 'app-content-form-2.11',
    title: 'Apoderado 1',
    // process?: Process;
    fields: DatosRepresentanteLegal,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.12',
    idParent: 'step-4',
    parentType: 'Step',
    idHtml: 'app-content-form-2.12',
    title: 'Apoderado 2',
    // process?: Process;
    fields: DatosRepresentanteLegal1,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.13',
    idParent: 'step-4',
    parentType: 'Step',
    idHtml: 'app-content-form-2.13',
    title: '',
    warningMessage: 'En caso de seleccionar SI, llenar sección de estructura corporativa y accionista del formato 4',
    // process?: Process;
    fields: DatosRepresentanteLegal2,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    contentType: 'looseFields',
    // enableConditions?: 'string';
    styleClass: 'questions-type'
    // --------------------------
  },
  {
    id: 'content-2.14',
    idParent: 'step-4',
    parentType: 'Step',
    idHtml: 'app-content-form-2.14',
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
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass: 'string',
    // --------------------------
  }
];

export const MockContentStep5Process1ContentSection2: Content[] = [
  {
    id: 'content-2.15',
    idParent: 'step-5',
    parentType: 'Step',
    idHtml: 'app-content-form-2.15',
    title: 'Datos generales del solicitante',
    // process?: Process;
    fields: DatosGeneralesSolicitante,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.16',
    idParent: 'step-5',
    parentType: 'Step',
    idHtml: 'app-content-form-2.16',
    title: 'Domicilio y datos de contacto del solicitante',
    // process?: Process;
    fields: DatosDomicilioSolicitante,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.17',
    idParent: 'step-3',
    parentType: 'Step',
    idHtml: 'app-content-form-2.17',
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
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass: 'string',
    // --------------------------
  }
];

export const MockContentStep6Process1ContentSection2: Content[] = [
  {
    id: 'content-2.18',
    idParent: 'step-6',
    parentType: 'Step',
    idHtml: 'app-content-form-2.18',
    title: '',
    // process?: Process;
    fields: InformacionLaboralSolicitante1,
    operations: SearchOccupationOperationsS,
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.19',
    idParent: 'step-6',
    parentType: 'Step',
    idHtml: 'app-content-form-2.19',
    title: '',
    // process?: Process;
    fields: InformacionLaboralSolicitante,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.20',
    idParent: 'step-6',
    parentType: 'Step',
    idHtml: 'app-content-form-2.20',
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
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass: 'string',
    // --------------------------
  }
];

export const MockContentStep7Process1ContentSection2: Content[] = [
  {
    id: 'content-2.28',
    idParent: 'step-10',
    parentType: 'Step',
    idHtml: 'app-content-form-2.28',
    contentType: 'looseFields',
    // process?: Process;
    fields: weaponsQuestions,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    // enableConditions?: 'string';
    styleClass: 'questions-type'
    // --------------------------
  },
  {
    id: 'content-2.29',
    idParent: 'step-10',
    parentType: 'Step',
    idHtml: 'app-content-form-2.29',
    contentType: 'looseFields',
    // process?: Process;
    fields: weaponsFields,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    // enableConditions?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.30',
    idParent: 'step-10',
    parentType: 'Step',
    idHtml: 'app-content-form-2.30',
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
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass: 'string',
    // --------------------------
  }
];

export const MockContentStep8Process1ContentSection2: Content[] = [
  {
    id: 'content-2.31',
    idParent: 'step-10',
    parentType: 'Step',
    idHtml: 'app-content-form-2.31',
    title: '',
    description: 'Advertencia: En el caso de que se desee nombrar beneficiarios a menores de edad, ' +
      'no se debe señalar a un mayor de edad como representante de los menores para efecto de que, en su' +
      'representación, cobre la indemnización. ' +
      'Lo anterior porque legislaciones civiles previenen la forma en que debe designarse tutores, albaceas, representantes ' +
      'de herederos u otros cargos similares  y no consideran al contrato de seguro como el instrumento adecuado para tales ' +
      'designaciones. La designación que se hiciera de un mayor de edad como representante de menores beneficiarios, durante ' +
      'la minoría de edad de ellos, legalmente puede implicar que se nombra de beneficiarios en un contrato de seguro le ' +
      'concede el derecho incondicionado de disponer de la Suma Asegurada.',
    contentType: 'table-beneficiary',
    // process?: Process;
    // fields: Beneficiarios,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    // enableConditions?: 'string';
    styleClass: 'modal-type'
    // --------------------------
  },
  {
    id: 'content-2.32',
    idParent: 'step-10',
    parentType: 'Step',
    idHtml: 'app-content-form-2.32',
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
    contentType: 'looseFields'
    // enableConditions?: 'string';
    // styleClass: 'string',
    // --------------------------
  }
];

export const MockContentStep17Process1ContentSection2: Content[] = [
  {
    id: 'content-2.33',
    idParent: 'step-17',
    parentType: 'Step',
    idHtml: 'app-content-form-2.33',
    contentType: 'looseFields',
    // process?: Process;
    fields: sportsQuestions1,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    // enableConditions?: 'string';
    styleClass: 'questions-type'
    // --------------------------
  },
  {
    id: 'content-2.34',
    idParent: 'step-17',
    parentType: 'Step',
    idHtml: 'app-content-form-2.34',
    contentType: 'looseFields',
    // process?: Process;
    fields: sportsFields1,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    // enableConditions?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.35',
    idParent: 'step-17',
    parentType: 'Step',
    idHtml: 'app-content-form-2.35',
    contentType: 'looseFields',
    // process?: Process;
    fields: sportQuestions2,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    // enableConditions?: 'string';
    styleClass: 'questions-type'
    // --------------------------
  },
  {
    id: 'content-2.26',
    idParent: 'step-17',
    parentType: 'Step',
    idHtml: 'app-content-form-2.26',
    contentType: 'looseFields',
    // process?: Process;
    fields: sportsFields2,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true
    // enableConditions?: 'string';
    // --------------------------
  }
];

export const MockContentStep18Process1ContentSection2: Content[] = [
  {
    id: 'content-2.36',
    idParent: 'step-18',
    parentType: 'Step',
    idHtml: 'app-content-form-2.36',
    contentType: 'looseFields',
    // process?: Process;
    fields: habitsQuestions,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    // enableConditions?: 'string';
    styleClass: 'questions-type'
    // --------------------------
  }
];

export const MockContentStep19Process1ContentSection2: Content[] = [
  {
    id: 'content-2.37',
    idParent: 'step-19',
    parentType: 'Step',
    idHtml: 'app-content-form-2.37',
    contentType: 'looseFields',
    // process?: Process;
    fields: medicalQuestions,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    // enableConditions?: 'string';
    styleClass: 'questions-type'
    // --------------------------
  },
  {
    id: 'content-2.28',
    idParent: 'step-17',
    parentType: 'Step',
    idHtml: 'app-content-form-2.28',
    contentType: 'looseFields',
    // process?: Process;
    fields: medicalFields,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true
    // enableConditions?: 'string';
    // --------------------------
  }
];
