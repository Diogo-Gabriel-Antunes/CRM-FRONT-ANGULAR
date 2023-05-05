export interface ITableSchema {
  labelOptions: LabelOptions[];
  optionsTable: OptionsTable;
}

interface LabelOptions {
  label: string;
  objectName: string;
  type?: 'string' | 'currency' | 'date';
}

interface OptionsTable {
  pagination: boolean;
  length: string;
  pageSize: string;
}

export interface PaginationOptions {
  length: number;
  pageSize: number;
  pageIndex: number;
}

enum Type {
  String = 'string',
  Number = 'number',
  Date = 'date',
}
