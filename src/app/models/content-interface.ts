import {ProcessInterface} from './process-interface';

export interface ContentInterface {
  fields?: Array<any>;
  process?: ProcessInterface;
  operations?: Array<any>;
  renderConditions: string;
}
