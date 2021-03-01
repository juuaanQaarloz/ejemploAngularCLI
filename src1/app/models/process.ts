import {Step} from './step';

export interface Process {
  id: string;
  idContent: string;
  idHtml: string;
  title: string;
  steps: Step[];
  render: boolean;
  renderConditions: string;
}
