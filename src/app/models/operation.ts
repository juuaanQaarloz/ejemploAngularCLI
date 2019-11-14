export interface Operation {
  id: string;
  idHtml: string;
  name: string;
  label: string;
  type: string;
  delegateOperation: string;
  renderConditions: string;
  enableConditions: string;
  style: string;
  styleClass: string;
  message: string;
  messageClass: string;
  /*added extra of original model*/
  delegateOperationParameters?: any;
}
