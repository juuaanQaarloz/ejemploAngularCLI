import {Content, Step} from '../../models';
import {MockContentStep1Process1ContentSection2, MockContentStep2Process1ContentSection2} from './mock-contents';

export const MockStepsProcessContentSection2: Step[] = [
  {
    id: 'step-1',
    idProcess: 'process-1',
    idHtml: 'app-step-form-1',
    title: 'Infomación general del contratante persona física',
    contents: MockContentStep1Process1ContentSection2,
    renderConditions: 'typePerson=phyPerson',
    previousStep: '',
    nextStep: '2',
    /*added extra from model*/
    isCompleted: false
  },
  {
    id: 'step-2',
    idProcess: 'process-1',
    idHtml: 'app-step-form-2',
    title: 'Infomación laboral del contratante persona física',
    contents: MockContentStep2Process1ContentSection2,
    renderConditions: 'typePerson=morPerson',
    previousStep: '1',
    nextStep: '3',
    /*added extra from model*/
    isCompleted: false
  }
];
