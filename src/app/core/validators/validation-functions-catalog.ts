import {validateAlphanumericValue} from './validators';

export const validatorsObjects = [
  {
    nameField: 'name',
    validationFunctions: [validateAlphanumericValue]
  }
];
