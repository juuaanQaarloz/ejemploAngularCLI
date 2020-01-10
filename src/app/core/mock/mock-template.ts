import {Template} from '../../models/template';
import {Content, Field, Process, Section} from '../../models';
import {MockStepsProcessContentSection2} from './mock-steps';

export const MockFieldsContentSection1: Field[] = [
  {
    id: 'field-1',
    idHtml: 'rdioTypePerson',
    name: 'typePerson',
    orderAppearance: 1,
    label: '¿Eres persona física o moral?',
    type: 'radio',
    required: true,
    placeholder: '',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'CUSTOM',
    sourceID: 'typePerson',
    sourceStructure: ['id', 'name', 'value'],
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
    entityField: 'insurer.party_typ_cd',
    value: 'phyPerson',
    disable: false
  }
];

export const MockContentSection1: Content[] = [
  {
    id: 'content-1',
    idParent: 'section-1',
    parentType: 'Section',
    idHtml: 'app-content-form1',
    // title?: '',
    // process?: Process,
    fields: MockFieldsContentSection1,
    // operations?: Operation[],
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>,
    // -------------

    // --added extra from model--
    showContent: true,
    contentType: 'looseFields'
    // enableConditions?: string,
    // styleClass?: string
  }
];

export const MockProcessContentSection2: Process = {
  id: 'process-1',
  idContent: 'content-2',
  idHtml: 'app-process-from-1',
  title: '',
  steps: MockStepsProcessContentSection2,
  render: true,
  renderConditions: ''
};

export const MockContentSection2: Content[] = [
  {
    id: 'content-2',
    idParent: 'section-2',
    parentType: 'Section',
    idHtml: 'app-content-form2',
    // title?: '',
    process: MockProcessContentSection2,
    // fields: MockFieldsContentSection1,
    // operations?: Operation[],
    renderConditions: '',
    // ---pending---
    // contentChildren?: Array<Content>,
    // -------------

    // --added extra from model--
    showContent: true,
    contentType: ''
    // enableConditions?: string,
    // styleClass?: string
  }
];

export const MockSections: Section[] = [
  {
    id: 'section-1',
    idTemplate: 'template-1',
    title: 'Sección tipo de persona',
    contents: MockContentSection1,
    renderConditions: ''
  },
  {
    id: 'section-2',
    idTemplate: 'template-1',
    title: 'Sección procesos',
    contents: MockContentSection2,
    renderConditions: ''
  }
];

export const MockTemplate: Template = {
  id: 'template-1',
  product: 'MetaLife',
  version: '1.0',
  sections: MockSections
};
