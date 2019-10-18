import {Content} from './content';

export interface Section {
  id: string;
  idTemplate: string;
  title: string;
  contents: Array<Content>;
  renderConditions: string;
}
