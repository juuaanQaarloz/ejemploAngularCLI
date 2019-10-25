import {validateAlphanumericValue, validateName} from './validators';

export const validatorsObjects = [
  {
    nameField: 'name',
    validationFunctions: [validateAlphanumericValue, validateName]
  }
];
