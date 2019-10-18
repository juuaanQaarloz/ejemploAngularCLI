export interface Field {
  id: string;
  idHtml: string;
  name: string;
  label: string;
  orderAppearance: number;
  type: string;
  required: boolean;
  placeholder: string;
  length: string;
  minValue: number;
  maxValue: number;
  pattern: string;
  source: string;
  sourceID: string;
  // --added extra from model--
  sourceStructure?: string [];
  // --------------------------
  style: string;
  styleClass: string;
  styleClassError: string;
  message: string;
  messageClass: string;
  messageError: string; // new
  messageErrorClass: string; // new
  renderConditions: string;
  enableConditions: string;
  entity: string;
  entityField: string;
  // --added extra from modal--
  value?: any;
  canChangeType?: boolean;
  // --------------------------
}
