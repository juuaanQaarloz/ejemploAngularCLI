import {Step} from '../../models';
import {
  MockContentStep1Process1ContentSection2,
  MockContentStep2Process1ContentSection2,
  MockContentStep3Process1ContentSection2,
  MockContentStep4Process1ContentSection2,
  MockContentStep5Process1ContentSection2,
  MockContentStep6Process1ContentSection2,
  MockContentStep7Process1ContentSection2,
  MockContentStep8Process1ContentSection2,
  MockContentStep9Process1ContentSection2,
  MockContentStep10Process1ContentSection2,
  MockContentStep11Process1ContentSection2,
  MockContentStep12Process1ContentSection2,
  MockContentStep13Process1ContentSection2,
  MockContentStep14Process1ContentSection2,
  MockContentStep15Process1ContentSection2,
  MockContentStep16Process1ContentSection2,
  MockContentStep17Process1ContentSection2,
  MockContentStep18Process1ContentSection2,
  MockContentStep19Process1ContentSection2,
  MockContentStep20Process1ContentSection2,
  MockContentStep21Process1ContentSection2,
  MockContentStep22Process1ContentSection2,
} from './mock-contents';

import {
  ERRORS_DOM_CONT,
  ERROSDATOSPERSONAFISICA,
  ERROSDATOSPLAN,
  ERROSDATOSREPRESENTANTE,
  ERROSDATOSSOLICITANTE
} from './errors/mock-erros-datos-plan';


export const MockStepsProcessContentSection2: Step[] = [
  {
    id: '1',
    idProcess: 'process-1',
    idHtml: 'app-step-form-1',
    title: 'Información general del contratante persona física',
    contents: MockContentStep1Process1ContentSection2,
    renderConditions: '(typePerson=phyPerson)',
    requiredConditions: '(typePerson=phyPerson)',
    previousStep: '0',
    nextStep: '2',
    /*added extra from model*/
    isCompleted: false,
    show: true,
    errors: ERROSDATOSPERSONAFISICA
  },
  {
    id: '2',
    idProcess: 'process-1',
    idHtml: 'app-step-form-2',
    title: 'Domicilio y datos del Contratante persona física',
    contents: MockContentStep2Process1ContentSection2,
    renderConditions: '(typePerson=phyPerson)',
    requiredConditions: '(typePerson=phyPerson)',
    previousStep: '1',
    nextStep: '3',
    /*added extra from model*/
    isCompleted: false,
    show: true,
    errors: ERRORS_DOM_CONT
  },
  {
    id: '3',
    idProcess: 'process-1',
    idHtml: 'app-step-form-3',
    title: 'Ocupación del Contratante persona física',
    contents: MockContentStep3Process1ContentSection2,
    renderConditions: '(typePerson=phyPerson)',
    requiredConditions: '(typePerson=phyPerson)',
    previousStep: '2',
    nextStep: '10',
    /*added extra from model*/
    isCompleted: false,
    show: false
  },
  {
    id: '4',
    idProcess: 'process-1',
    idHtml: 'app-step-form-4',
    title: ' Datos generales del Contratante persona moral',
    contents: MockContentStep4Process1ContentSection2,
    renderConditions: '(typePerson=morPerson)',
    requiredConditions: '(typePerson=morPerson)',
    previousStep: '0',
    nextStep: '5',
    /*added extra from model*/
    isCompleted: false,
    show: false
  },
  {
    id: '5',
    idProcess: 'process-1',
    idHtml: 'app-step-form-5',
    title: 'Domicilio y datos de contacto del Contratante persona moral',
    contents: MockContentStep5Process1ContentSection2,
    renderConditions: '(typePerson=morPerson)',
    requiredConditions: '(typePerson=morPerson)',
    previousStep: '4',
    nextStep: '6',
    /*added extra from model*/
    isCompleted: false,
    show: false
  },
  {
    id: '6',
    idProcess: 'process-1',
    idHtml: 'app-step-form-6',
    title: ' Apoderado o representante legal (llenar para empresas nacionales)',
    contents: MockContentStep6Process1ContentSection2,
    renderConditions: '(typePerson=morPerson)',
    requiredConditions: '(typePerson=morPerson)',
    previousStep: '5',
    nextStep: '7',
    /*added extra from model*/
    isCompleted: false,
    show: false,
    errors: ERROSDATOSREPRESENTANTE
  },
  {
    id: '7',
    idProcess: 'process-1',
    idHtml: 'app-step-form-7',
    title: 'Datos generales del solicitante',
    contents: MockContentStep7Process1ContentSection2,
    renderConditions: '(contractorType=false,|,typePerson=morPerson)',
    requiredConditions: '(contractorType=false,|,typePerson=morPerson)',
    previousStep: '6',
    nextStep: '8',
    /*added extra from model*/
    isCompleted: false,
    show: false,
    errors: ERROSDATOSSOLICITANTE
  },
  {
    id: '8',
    idProcess: 'process-1',
    idHtml: 'app-step-form-8',
    title: 'Domicilio y datos de contacto del solicitante',
    contents: MockContentStep8Process1ContentSection2,
    renderConditions: '(contractorType=false,|,typePerson=morPerson)',
    requiredConditions: '(contractorType=false,|,typePerson=morPerson)',
    previousStep: '6',
    nextStep: '9',
    /*added extra from model*/
    isCompleted: false,
    show: false
  },
  {
    id: '9',
    idProcess: 'process-1',
    idHtml: 'app-step-form-9',
    title: 'Ocupación del solicitante',
    contents: MockContentStep9Process1ContentSection2,
    renderConditions: '(contractorType=false,|,typePerson=morPerson)',
    requiredConditions: '(contractorType=false,|,typePerson=morPerson)',
    previousStep: '5',
    nextStep: '10',
    /*added extra from model*/
    isCompleted: false,
    show: false
  },
  {
    id: '10',
    idProcess: 'process-1',
    idHtml: 'app-step-form-10',
    title: 'Favor de contestar el siguiente cuestionario',
    contents: MockContentStep10Process1ContentSection2,
    renderConditions: '',
    previousStep: '6',
    nextStep: '11',
    /*added extra from model*/
    isCompleted: false,
    show: true
  },
  {
    id: '11',
    idProcess: 'process-1',
    idHtml: 'app-step-form-11',
    title: 'Beneficiarios del solicitante',
    contents: MockContentStep11Process1ContentSection2,
    renderConditions: '',
    previousStep: '10',
    nextStep: '12',
    /*added extra from model*/
    isCompleted: false,
    show: true
  },
  {
    id: '12',
    idProcess: 'process-1',
    idHtml: 'app-step-form-12',
    title: 'Formas de pago',
    contents: MockContentStep12Process1ContentSection2,
    renderConditions: '',
    previousStep: '11',
    nextStep: '13',
    /*added extra from model*/
    isCompleted: false,
    show: true
  },
  {
    id: '13',
    idProcess: 'process-1',
    idHtml: 'app-step-form-13',
    title: 'Perfil transaccional',
    contents: MockContentStep13Process1ContentSection2,
    renderConditions: '',
    previousStep: '12',
    nextStep: '14',
    /*added extra from model*/
    isCompleted: false,
    show: true
  },
  {
    id: '14',
    idProcess: 'process-1',
    idHtml: 'app-step-form-14',
    title: 'Declaraciones',
    contents: MockContentStep14Process1ContentSection2,
    renderConditions: '',
    previousStep: '13',
    nextStep: '15',
    /*added extra from model*/
    isCompleted: false,
    show: true
  },
  {
    id: '15',
    idProcess: 'process-1',
    idHtml: 'app-step-form-15',
    title: 'Otros seguros de vida del solicitante',
    contents: MockContentStep15Process1ContentSection2,
    renderConditions: '',
    previousStep: '14',
    nextStep: '16',
    /*added extra from model*/
    isCompleted: false,
    show: true
  },
  {
    id: '16',
    idProcess: 'process-1',
    idHtml: 'app-step-form-16',
    title: 'Datos del Plan',
    contents: MockContentStep16Process1ContentSection2,
    renderConditions: '',
    previousStep: '15',
    nextStep: '17',
    /*added extra from model*/
    isCompleted: false,
    show: true,
    errors: ERROSDATOSPLAN
  },
  {
    id: '17',
    idProcess: 'process-1',
    idHtml: 'app-step-form-17',
    title: 'Aviación, deportes y/o aficiones del solicitante',
    contents: MockContentStep17Process1ContentSection2,
    renderConditions: '',
    previousStep: '16',
    nextStep: '18',
    isCompleted: false,
    show: true
  },
  {
    id: '18',
    idProcess: 'process-1',
    idHtml: 'app-step-form-18',
    title: 'Cuestionario de hábitos del solicitante',
    contents: MockContentStep18Process1ContentSection2,
    renderConditions: '',
    previousStep: '17',
    nextStep: '19',
    isCompleted: false,
    show: true
  },
  {
    id: '19',
    idProcess: 'process-1',
    idHtml: 'app-step-form-19',
    title: 'Cuestionario médico del solicitante',
    contents: MockContentStep19Process1ContentSection2,
    renderConditions: '',
    previousStep: '18',
    nextStep: '20',
    isCompleted: false,
    show: true
  },
  {
    id: '20',
    idProcess: 'process-1',
    idHtml: 'app-step-form-20',
    title: 'Información del agente (para aspectos internos de MetLife México, S. A.)',
    contents: MockContentStep20Process1ContentSection2,
    renderConditions: '',
    previousStep: '19',
    nextStep: '21',
    isCompleted: false,
    show: true
  },
  {
    id: '21',
    idProcess: 'process-1',
    idHtml: 'app-step-form-21',
    title: 'Autorizaciones',
    contents: MockContentStep21Process1ContentSection2,
    renderConditions: '',
    previousStep: '20',
    nextStep: '1',
    isCompleted: false,
    show: true
  },
  {
    id: '22',
    idProcess: 'process-1',
    idHtml: 'app-step-form-22',
    title: 'Carga de Documentos',
    contents: MockContentStep22Process1ContentSection2,
    renderConditions: '',
    previousStep: '20',
    nextStep: '1',
    isCompleted: false,
    show: true
  }
];
