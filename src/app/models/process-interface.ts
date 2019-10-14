import {StepInterface} from './step-interface';

export interface ProcessInterface {
  id: string;
  idContent: string;
  idHtml: string;
  title: string;
  steps: Array<StepInterface>;
  render: boolean;
  renderConditions: string;
}
