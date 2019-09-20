export interface FieldInterface {
  id: string;
  name: string;
  orderAppearance: number;
  label: string;
  type: string;
  required: boolean;
  placeholder: string;
  length: string;
  minValue: number;
  maxValue: number;
  pattern: string;
  source: string;
  sourceID: string;
  style: string;
  styleClass: string;
  message: string;
  messageClass: string;
  renderConditions: string;
  enableConditions: string;
  entity: string;
  entityField: string;
  value?: string;
}
