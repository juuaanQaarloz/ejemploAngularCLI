import {Field} from './Field';

export class CheckboxField extends Field<string> {
  controlType = 'checkbox';
  options: {key: string, value: string} [] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'];
  }

}
