export interface RowItem<T> {
  rowId: string;
  rowName: string;
  rowObject: T;
  rowOperations?: any[];
}
