export class Field<T> {
  value: T;
  id: string;
  name: string;
  label: string;
  orderAppearance: number;
  controlType: string;
  required: boolean;
  placeHolder: string;
  length: number;
  minValue: number;
  maxValue: number;
  pattern: string;
  source: string;
  sourceId: number;
  style: string;
  styleClass: string;
  message: string;
  messageClass: string;
  renderConditions: string;
  enableConditions: string;
  entity: string;
  entityFile: string;

  constructor(options: {
    value?: T,
    id?: string,
    name?: string,
    label?: string,
    orderAppearance?: number,
    controlType?: string,
    required?: boolean,
    placeHolder?: string,
    length?: number,
    minValue?: number,
    maxValue?: number,
    pattern?: string,
    source?: string,
    sourceId?: number,
    style?: string,
    styleClass?: string,
    message?: string,
    messageClass?: string,
    renderConditions?: string,
    enableConditions?: string,
    entity?: string,
    entityFile?: string
  } = {}) {
    this.value = options.value;
    this.id = options.id || '';
    this.name = options.name || '';
    this.label = options.label || '';
    this.orderAppearance = options.orderAppearance === undefined ? 1 : options.orderAppearance;
    this.controlType = options.controlType || '';
    this.required = !!options.required;
    this.placeHolder = options.placeHolder || '';
    this.length = options.length === undefined ? 1 : options.length;
    this.minValue = options.minValue === undefined ? 1 : options.minValue;
    this.maxValue = options.minValue === undefined ? 1 : options.maxValue;
    this.pattern = options.pattern || '';
    this.source = options.source || '';
    this.sourceId = options.sourceId === undefined ? 1 : options.sourceId;
    this.style =  options.style || '';
    this.styleClass = options.styleClass || '';
    this.message = options.message || '';
    this.messageClass = options.messageClass || '';
    this.renderConditions = options.renderConditions || '';
    this.enableConditions = options.enableConditions || '';
    this.entity = options.entity || '';
    this.entityFile = options.entityFile || '';
  }
}
