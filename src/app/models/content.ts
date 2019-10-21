import {Process} from './process';
import {Field} from './field';
import {Operation} from './operation';

export interface Content {
  id: string;
  idParent: string;
  parentType: string;
  idHtml: string;
  title?: string;
  process?: Process;
  fields?: Field[];
  operations?: Operation[];
  renderConditions: string;
  // ---pending---
  contentChildren?: Array<Content>;
  // -------------

  // --added extra from model--
  showContent?: boolean;
  styleClass?: string;
  contentType: string; // loose fields, table, questionary
  // --------------------------
}
