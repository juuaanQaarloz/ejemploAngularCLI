import {Step} from '../../models';
import {
  MockContentStep17Process1ContentSection2,
  MockContentStep16Process1ContentSection2,
  MockContentStep1Process1ContentSection2,
  MockContentStep2Process1ContentSection2,
  MockContentStep3Process1ContentSection2,
  MockContentStep4Process1ContentSection2,
  MockContentStep5Process1ContentSection2,
  MockContentStep6Process1ContentSection2,
  MockContentStep7Process1ContentSection2
} from './mock-contents';
import {templateJitUrl} from '@angular/compiler';

export const MockStepsProcessContentSection2: Step[] = [
  {
    id: '1',
    idProcess: 'process-1',
    idHtml: 'app-step-form-1',
    title: 'Infomación general del contratante persona física',
    contents: MockContentStep1Process1ContentSection2,
    renderConditions: 'typePerson=phyPerson',
    // renderConditions: 'A=B&C!=D|E>F&',
    previousStep: '0',
    nextStep: '2',
    /*added extra from model*/
    isCompleted: false,
    show: true
  },
  {
    id: '2',
    idProcess: 'process-1',
    idHtml: 'app-step-form-2',
    title: 'Ocupación del contratante persona física',
    contents: MockContentStep2Process1ContentSection2,
    renderConditions: 'typePerson=phyPerson',
    previousStep: '1',
    nextStep: '7',
    /*added extra from model*/
    isCompleted: false,
    show: true
  },
  {
    id: '3',
    idProcess: 'process-1',
    idHtml: 'app-step-form-3',
    title: 'Información general del contratante persona moral',
    contents: MockContentStep3Process1ContentSection2,
    renderConditions: 'typePerson=morPerson',
    previousStep: '0',
    nextStep: '4',
    /*added extra from model*/
    isCompleted: false,
    show: false
  },
  {
    id: '4',
    idProcess: 'process-1',
    idHtml: 'app-step-form-4',
    title: ' Apoderado o representante legal (llenar para empresas nacionales)',
    contents: MockContentStep4Process1ContentSection2,
    renderConditions: 'typePerson=morPerson',
    previousStep: '3',
    nextStep: '7',
    /*added extra from model*/
    isCompleted: false,
    show: false
  },
  {
    id: '5',
    idProcess: 'process-1',
    idHtml: 'app-step-form-5',
    title: 'Datos generales del solicitante',
    contents: MockContentStep5Process1ContentSection2,
    renderConditions: 'contractorType=false',
    previousStep: '2',
    nextStep: '6',
    /*added extra from model*/
    isCompleted: false,
    show: false
  },
  {
    id: '6',
    idProcess: 'process-1',
    idHtml: 'app-step-form-6',
    title: 'Ocupación del solicitante',
    contents: MockContentStep6Process1ContentSection2,
    renderConditions: 'contractorType=false',
    previousStep: '5',
    nextStep: '7',
    /*added extra from model*/
    isCompleted: false,
    show: false
  },
  {
    id: '7',
    idProcess: 'process-1',
    idHtml: 'app-step-form-7',
    title: 'Beneficiarios del solicitante',
    contents: MockContentStep7Process1ContentSection2,
    renderConditions: '',
    previousStep: '6',
    nextStep: '1',
    /*added extra from model*/
    isCompleted: false,
    show: true
  },
  {
    id: '16',
    idProcess: 'process-1',
    idHtml: 'app-step-form-16',
    title: 'Datos de Plan',
    contents: MockContentStep16Process1ContentSection2,
    renderConditions: '',
    previousStep: '7',
    nextStep: '17',
    /*added extra from model*/
    isCompleted: false,
    show: true
  },
  {
    id: '17',
    idProcess: 'process-1',
    idHtml: 'app-step-form-17',
    title: 'Cuestionario de aviación deportes y / o aficiones del solicitante',
    contents: MockContentStep17Process1ContentSection2,
    renderConditions: '',
    previousStep: '16',
    nextStep: '18',
    /*added extra from model*/
    isCompleted: false,
    show: true
  }
];
