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
import {habitsFields, habitsQuestions} from './basic-questionnaires/habits';
import {weaponsFields, weaponsFields1, weaponsQuestions, weaponsQuestions1} from './basic-questionnaires/weapons-questions';
import {medicalFields, medicalQuestions} from './basic-questionnaires/medical';
import {AgentQuestion, AgentQuestion1} from './mock-agents/mock-agents-questions';
import {AuthorizationFields1, AuthorizationQuestions1, AuthorizationQuestions2} from './authorization/authorization-questions';

import {Plan1, Plan2} from './mock-plan/mock-plan';
import {statements, statements0, statements1, statements2, statements3} from './statements/statements';
import {ifTrue} from 'codelyzer/util/function';

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

export const MockContentStep10Process1ContentSection2: Content[] = [
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
    styleClass: 'modal-type'
    // enableConditions?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.30',
    idParent: 'step-10',
    parentType: 'Step',
    idHtml: 'app-content-form-2.30',
    contentType: 'looseFields',
    // process?: Process;
    fields: weaponsQuestions1,
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
    id: 'content-2.31',
    idParent: 'step-10',
    parentType: 'Step',
    idHtml: 'app-content-form-2.31',
    contentType: 'looseFields',
    // process?: Process;
    fields: weaponsFields1,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    styleClass: 'modal-type'
    // enableConditions?: 'string';
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

export const MockContentStep11Process1ContentSection2: Content[] = [
  {
    id: 'content-2.33',
    idParent: 'step-10',
    parentType: 'Step',
    idHtml: 'app-content-form-2.33',
    title: '',
    description: 'Advertencia: En el caso de que se desee nombrar beneficiarios a menores de edad, ' +
      'no se debe señalar a un mayor de edad como representante de los menores para efecto de que, en su ' +
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
    id: 'content-2.34',
    idParent: 'step-10',
    parentType: 'Step',
    idHtml: 'app-content-form-2.34',
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

export const MockContentStep16Process1ContentSection2: Content[] = [
  {
    id: 'content-16.1',
    idParent: 'step-16',
    parentType: 'Step',
    idHtml: 'app-content-form-16.1',
    title: '',
    // process?: Process;
    fields: Plan1,
    //  operations: SearchOccupationOperationsS,
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
    id: 'content-16.2',
    idParent: 'step-16',
    parentType: 'Step',
    idHtml: 'app-content-form-16.2',
    title: 'Cobertura básica',
    // process?: Process;
    fields: Plan2,
    //  operations: SearchOccupationOperationsS,
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
    id: 'content-16.21',
    idParent: 'step-16',
    parentType: 'Step',
    idHtml: 'app-content-form-2.21',
    title: 'Beneficios adicionales',
    description: '',
    contentType: 'table-coverage',
    // process?: Process;
    // fields: Beneficiarios,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    // enableConditions?: 'publicFunctionQuestion=true',
    styleClass: 'modal-type'
    // --------------------------
  },
  {
    id: 'content-16.2',
    idParent: 'step-16',
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

export const MockContentStep14Process1ContentSection2: Content[] = [
  {
    id: 'content-14.26',
    idParent: 'step-14',
    parentType: 'Step',
    idHtml: 'app-content-form-2.26',
    contentType: 'looseFields',
    // process?: Process;
    fields: statements0,
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
    id: 'content-14.30',
    idParent: 'step-14',
    parentType: 'Step',
    idHtml: 'app-content-form-2.21',
    title: '',
    description: '',
    contentType: 'table-country',
    // process?: Process;
    // fields: Beneficiarios,
    // operations?: Operation[];
    renderConditions: '(taxQuestion=true)',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    // showContent: true,
    // enableConditions?: 'publicFunctionQuestion=true',
    styleClass: 'modal-type'
    // --------------------------
  },
  {
    id: 'content-14.26',
    idParent: 'step-14',
    parentType: 'Step',
    idHtml: 'app-content-form-2.26',
    contentType: 'looseFields',
    // process?: Process;
    fields: statements,
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
    id: 'content-14.21',
    idParent: 'step-14',
    parentType: 'Step',
    idHtml: 'app-content-form-2.21',
    title: '',
    description: '',
    contentType: 'table-formatwo',
    // process?: Process;
    // fields: Beneficiarios,
    // operations?: Operation[];
    renderConditions: '(publicFunctionQuestion=true)',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    // showContent: true,
    // enableConditions?: 'publicFunctionQuestion=true',
    styleClass: 'modal-type'
    // --------------------------
  },
  {
    id: 'content-14.26',
    idParent: 'step-14',
    parentType: 'Step',
    idHtml: 'app-content-form-2.26',
    contentType: 'looseFields',
    // process?: Process;
    fields: statements1,
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
    id: 'content-14.21',
    idParent: 'step-14',
    parentType: 'Step',
    idHtml: 'app-content-form-2.21',
    title: '',
    description: '',
    contentType: 'table-formatfour',
    // process?: Process;
    // fields: Beneficiarios,
    // operations?: Operation[];
    renderConditions: '(associationQuestion=true)',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    // showContent: true,
    // enableConditions?: 'publicFunctionQuestion=true',
    styleClass: 'modal-type'
    // --------------------------
  },
  {
    id: 'content-14.26',
    idParent: 'step-14',
    parentType: 'Step',
    idHtml: 'app-content-form-2.26',
    contentType: 'looseFields',
    // process?: Process;
    fields: statements2,
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
    id: 'content-14.21',
    idParent: 'step-14',
    parentType: 'Step',
    idHtml: 'app-content-form-2.21',
    title: '',
    description: '',
    contentType: 'table-formatwob',
    // process?: Process;
    // fields: Beneficiarios,
    // operations?: Operation[];
    renderConditions: '(thirdPersonQuestion=true)',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    // showContent: true,
    // enableConditions?: 'publicFunctionQuestion=true',
    styleClass: 'modal-type'
    // --------------------------
  },
  {
    id: 'content-14.26',
    idParent: 'step-14',
    parentType: 'Step',
    idHtml: 'app-content-form-2.26',
    contentType: 'looseFields',
    // process?: Process;
    fields: statements3,
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
    id: 'content-14.21',
    idParent: 'step-14',
    parentType: 'Step',
    idHtml: 'app-content-form-2.21',
    title: '',
    description: '',
    contentType: 'table-formathree',
    // process?: Process;
    // fields: Beneficiarios,
    // operations?: Operation[];
    renderConditions: '(supplierQuestion=false)' ,
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    // showContent: true,
    // enableConditions?: 'publicFunctionQuestion=true',
    styleClass: 'modal-type'
    // --------------------------
  },
  {
    id: 'content-14.21',
    idParent: 'step-14',
    parentType: 'Step',
    idHtml: 'app-content-form-2.21',
    title: '',
    description: '',
    contentType: 'table-formathree',
    // process?: Process;
    // fields: Beneficiarios,
    // operations?: Operation[];
    renderConditions: '(typePerson=morPerson,&,supplierQuestion=false)' ,
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    // showContent: true,
    // enableConditions?: 'publicFunctionQuestion=true',
    styleClass: 'modal-type'
    // --------------------------
  },
  {
    id: 'content-14.21',
    idParent: 'step-14',
    parentType: 'Step',
    idHtml: 'app-content-form-2.21',
    title: '',
    description: '',
    contentType: 'table-formatwo',
    // process?: Process;
    // fields: Beneficiarios,
    // operations?: Operation[];
    renderConditions: '(typePerson=morPerson)' ,
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    // showContent: true,
    // enableConditions?: 'publicFunctionQuestion=true',
    styleClass: 'modal-type'
    // --------------------------
  },
  {
    id: 'content-14.2',
    idParent: 'step-14',
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

export const MockContentStep17Process1ContentSection2: Content[] = [
  {
    id: 'content-2.35',
    idParent: 'step-17',
    parentType: 'Step',
    idHtml: 'app-content-form-2.35',
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
    id: 'content-2.36',
    idParent: 'step-17',
    parentType: 'Step',
    idHtml: 'app-content-form-2.36',
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
    id: 'content-2.37',
    idParent: 'step-17',
    parentType: 'Step',
    idHtml: 'app-content-form-2.37',
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
    id: 'content-2.38',
    idParent: 'step-17',
    parentType: 'Step',
    idHtml: 'app-content-form-2.38',
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
  },
  {
    id: 'content-2.39',
    idParent: 'step-10',
    parentType: 'Step',
    idHtml: 'app-content-form-2.39',
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

export const MockContentStep18Process1ContentSection2: Content[] = [
  {
    id: 'content-2.40',
    idParent: 'step-18',
    parentType: 'Step',
    idHtml: 'app-content-form-2.40',
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
  },
  {
    id: 'content-2.53',
    idParent: 'step-18',
    parentType: 'Step',
    idHtml: 'app-content-form-2.53',
    contentType: 'looseFields',
    // process?: Process;
    fields: habitsFields,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    // enableConditions?: 'string';
    styleClass: ''
    // --------------------------
  },
  {
    id: 'content-2.41',
    idParent: 'step-10',
    parentType: 'Step',
    idHtml: 'app-content-form-2.41',
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

export const MockContentStep19Process1ContentSection2: Content[] = [
  {
    id: 'content-2.42',
    idParent: 'step-19',
    parentType: 'Step',
    idHtml: 'app-content-form-2.42',
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
    id: 'content-2.43',
    idParent: 'step-19',
    parentType: 'Step',
    idHtml: 'app-content-form-2.43',
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
  },
  {
    id: 'content-2.44',
    idParent: 'step-10',
    parentType: 'Step',
    idHtml: 'app-content-form-2.44',
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

export const MockContentStep20Process1ContentSection2: Content[] = [
  {
    id: 'content-2.45',
    idParent: 'step-20',
    parentType: 'Step',
    idHtml: 'app-content-form-2.45',
    contentType: 'looseFields',
    // process?: Process;
    fields: AgentQuestion,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    styleClass: 'modal-type'
    // enableConditions?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.46',
    idParent: 'step-20',
    parentType: 'Step',
    idHtml: 'app-content-form-2.46',
    contentType: 'looseFields',
    // process?: Process;
    fields: AgentQuestion1,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    styleClass: 'questions-type'
    // enableConditions?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.47',
    idParent: 'step-20',
    parentType: 'Step',
    idHtml: 'app-content-form-2.47',
    contentType: 'table-agent',
    title: 'Datos del Agente',
    // process?: Process;
    // fields: AgentQuestion1,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    styleClass: 'modal-type'
    // enableConditions?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.48',
    idParent: 'step-20',
    parentType: 'Step',
    idHtml: 'app-content-form-2.48',
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

export const MockContentStep21Process1ContentSection2: Content[] = [
  {
    id: 'content-2.49',
    idParent: 'step-21',
    parentType: 'Step',
    idHtml: 'app-content-form-2.49',
    contentType: 'looseFields',
    description: 'De acuerdo a la Ley Sobre el Contrato de Seguro, el solicitante debe declarar todos los hechos ' +
      'importantes para la apreciación del riesgo a que se refiere esta solicitud, tal como los conozca o deba ' +
      'de conocer en el momento de firmar el mismo, en la inteligencia de que la declaración inexacta o falsa declaración ' +
      'de los hechos importantes que se le pregunten podría originar la pérdida de los derechos del Asegurado o del ' +
      'beneficiario en su caso.',
    // process?: Process;
    fields: AuthorizationQuestions1,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    styleClass: 'questions-type'
    // enableConditions?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.50',
    idParent: 'step-21',
    parentType: 'Step',
    idHtml: 'app-content-form-2.50',
    contentType: 'looseFields',
    // process?: Process;
    fields: AuthorizationFields1,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    styleClass: 'modal-type'
    // enableConditions?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.51',
    idParent: 'step-21',
    parentType: 'Step',
    idHtml: 'app-content-form-2.51',
    contentType: 'looseFields',
    // process?: Process;
    fields: AuthorizationQuestions2,
    // operations?: Operation[];
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>;
    // -------------

    // --added extra from model--
    showContent: true,
    styleClass: 'questions-type'
    // enableConditions?: 'string';
    // --------------------------
  },
  {
    id: 'content-2.52',
    idParent: 'step-21',
    parentType: 'Step',
    idHtml: 'app-content-form-2.52',
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
