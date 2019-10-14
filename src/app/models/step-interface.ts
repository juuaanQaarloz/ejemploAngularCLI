import {ContentInterface} from './content-interface';

export interface StepInterface {
  id: string;
  idHtml: string;
  title: string;
  content: ContentInterface;
  previousStep: string;
  nextStep: string;
  renderConditions: string;
  isCompleted: boolean;
}
