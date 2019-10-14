export interface FieldInterface {
  id: string;
  idHtml: string; // new
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
  sourceStructure?: string [];
  style: string;
  styleClass: string;
  styleClassError: string; // new
  message: string;
  messageClass: string;
  messageError: string; // new
  messageErrorClass: string; // new
  renderConditions: string;
  enableConditions: string;
  entity: string;
  entityField: string;
  value?: any;
  canChangeType?: boolean;
}
