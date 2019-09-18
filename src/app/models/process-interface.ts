import {StepInterface} from './step-interface';

export interface ProcessInterface {
  title: string;
  steps: Array<StepInterface>;
  renderConditions: string;
}
