import {ContentInterface} from './content-interface';

export interface StepInterface {
  title: string;
  content: ContentInterface;
  previousStep: string;
  nextStep: string;
  renderConditions: string;
}
