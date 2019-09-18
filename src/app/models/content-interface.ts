import {ProcessInterface} from './process-interface';
import {FieldInterface} from './field-interface';
import {OperationsInterface} from './operations-interface';

export interface ContentInterface {
  fields?: Array<FieldInterface>;
  process?: ProcessInterface;
  operations?: Array<OperationsInterface>;
  renderConditions: string;
}
