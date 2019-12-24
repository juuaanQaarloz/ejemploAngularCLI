import {Content} from './content';
import {Error} from './error';

export interface Step {
  id: string;
  idProcess: string;
  idHtml: string;
  title: string;
  contents: Array<Content>;
  renderConditions: string;
  previousStep: string;
  nextStep: string;
  /*added extra from model*/
  isCompleted: boolean;
  show: boolean;
  errors?: Array<Error>;
  requiredConditions?: string;
}
