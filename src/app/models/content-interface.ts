import {ProcessInterface} from './process-interface';
import {FieldInterface} from './field-interface';
import {OperationsInterface} from './operations-interface';

export interface ContentInterface {
  id: string;
  idParent: string;
  parentType: string;
  title?: string;
  contentChildren?: Array<ContentInterface>;
  fields?: Array<FieldInterface>;
  process?: ProcessInterface;
  operations?: Array<OperationsInterface>;
  showContent?: boolean;
  enableConditions?: string;
  renderConditions: string;
  styleClass?: string;
}
