import {
  DateValidator, rangeValidator
} from './validators';

export const validatorsObjects = [
  {
    nameField: 'birthDate',
    validationFunctions: [DateValidator]
  },
  {
    nameField: 'birthDateS',
    validationFunctions: [DateValidator]
  },
  {
    nameField: 'age',
    validationFunctions: [rangeValidator(18, 70)]
  },
  {
    nameField: 'constitutionDate',
    validationFunctions: [DateValidator]
  },
  {
    nameField: 'ageS',
    validationFunctions: [rangeValidator(18, 70)]
  },
  {
    nameField: 'beneficiaryBirthDate',
    validationFunctions: [DateValidator]
  },
  {
    nameField: 'beneficiaryConstitutionDate',
    validationFunctions: [DateValidator]
  },
  {
    nameField: 'weight',
    validationFunctions: [rangeValidator(2.00, 400.00)]
  },
  {
    nameField: 'height',
    validationFunctions: [rangeValidator(0.4, 2.5)]
  },
  {
    nameField: 'formatwoBirthDate',
    validationFunctions: [DateValidator]
  },
  {
    nameField: 'years',
    validationFunctions: [rangeValidator(1, 99)]
  },
  {
    nameField: 'diagnosticDate',
    validationFunctions: [DateValidator]
  },
  {
    nameField: 'diagnosticDateD',
    validationFunctions: [DateValidator]
  }
];
