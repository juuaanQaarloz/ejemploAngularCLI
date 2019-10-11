import {phoneNumberValidator, validateAlphaNumericValue} from './validators';
import {Validators} from '@angular/forms';

export const validatorsObjects = [
  {
    nameField: 'nameText',
    validationFunctions: [Validators.required, validateAlphaNumericValue]
  }
];
