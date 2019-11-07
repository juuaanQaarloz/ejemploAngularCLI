import {
  AgeValidator,
  DateValidator, validateAlphanumericName,
  validateAlphanumericValue, validateAlphanumericValueNotRequired, validateCURPNotRequired, validateMail,
  validateName, validateNumberWith2Decimals, validatePhone, validatePhoneNotRequired,
  validateRFC, validateRFCMoral,
  validateStreet, validateStreetNum, validateStreetNumberNotRequired, validateZipCode
} from './validators';

export const validatorsObjects = [
  {
    nameField: 'name',
    validationFunctions: [validateAlphanumericValue, validateName]
  },
  {
    nameField: 'fatherLastName',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'motherLastName',
    validationFunctions: [validateAlphanumericValueNotRequired]
  },
  {
    nameField: 'birthDate',
    validationFunctions: [DateValidator]
  },
  {
    nameField: 'age',
    validationFunctions: [AgeValidator]
  },
  {
    nameField: 'rfc',
    validationFunctions: [validateRFC]
  },
  {
    nameField: 'curp',
    validationFunctions: [validateCURPNotRequired]
  },
  {
    nameField: 'idNumber',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'idEmisor',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'city',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'street',
    validationFunctions: [validateStreet]
  },
  {
    nameField: 'exteriorNumber',
    validationFunctions: [validateStreetNum]
  },
  {
    nameField: 'interiorNumber',
    validationFunctions: [validateStreetNumberNotRequired]
  },
  {
    nameField: 'zipCode',
    validationFunctions: [validateZipCode]
  },
  {
    nameField: 'suburb',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'municipality',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'state',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'phone',
    validationFunctions: [validatePhone]
  },
  {
    nameField: 'cellPhone',
    validationFunctions: [validatePhone]
  },
  {
    nameField: 'email',
    validationFunctions: [validateMail]
  },
  {
    nameField: 'emailConfirmation',
    validationFunctions: [validateMail]
  },
  {
    nameField: 'businessName',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'businessName',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'comercialName',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'RFCmoral',
    validationFunctions: [validateRFCMoral]
  },
  {
    nameField: 'constitutionDate',
    validationFunctions: [DateValidator]
  },
  {
    nameField: 'mercantilNumber',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'specificSector',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'streetM',
    validationFunctions: [validateStreet]
  },
  {
    nameField: 'exteriorNumberM',
    validationFunctions: [validateStreetNum]
  },
  {
    nameField: 'interiorNumberM',
    validationFunctions: [validateStreetNum]
  },
  {
    nameField: 'zipCodeM',
    validationFunctions: [validateZipCode]
  },
  {
    nameField: 'suburbM',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'municipalityM',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'stateM',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'contactName',
    validationFunctions: [validateAlphanumericValue, validateAlphanumericName]
  },
  {
    nameField: 'position',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'phoneM',
    validationFunctions: [validatePhone]
  },
  {
    nameField: 'workPhone',
    validationFunctions: [validatePhone]
  },
  {
    nameField: 'workEmail',
    validationFunctions: [validateMail]
  },
  {
    nameField: 'nameS',
    validationFunctions: [validateAlphanumericValue, validateName]
  },
  {
    nameField: 'fatherLastNameS',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'motherLastNameS',
    validationFunctions: [validateAlphanumericValueNotRequired]
  },
  {
    nameField: 'birthDateS',
    validationFunctions: [DateValidator]
  },
  /*{
    nameField: 'ageS',
    validationFunctions: [AgeValidator]
  },*/
  {
    nameField: 'rfcS',
    validationFunctions: [validateRFC]
  },
  {
    nameField: 'curpS',
    validationFunctions: [validateCURPNotRequired]
  },
  {
    nameField: 'idNumberS',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'idEmisorS',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'streetS',
    validationFunctions: [validateStreet]
  },
  {
    nameField: 'exteriorNumberS',
    validationFunctions: [validateStreetNum]
  },
  {
    nameField: 'interiorNumberS',
    validationFunctions: [validateStreetNum]
  },
  {
    nameField: 'zipCodeS',
    validationFunctions: [validateZipCode]
  },
  {
    nameField: 'suburbS',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'municipalityS',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'stateS',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'phoneS',
    validationFunctions: [validatePhoneNotRequired]
  },
  {
    nameField: 'cellPhoneS',
    validationFunctions: [validatePhone]
  },
  {
    nameField: 'emailS',
    validationFunctions: [validateMail]
  },
  {
    nameField: 'emailS',
    validationFunctions: [validateMail]
  },
  {
    nameField: 'occupation',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'detailOccupation',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'companyName',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'companyActivity',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'salary',
    validationFunctions: [validateNumberWith2Decimals]
  },
  {
    nameField: 'occupationS',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'detailOccupationS',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'companyNameS',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'companyActivityS',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'salaryS',
    validationFunctions: [validateNumberWith2Decimals]
  },
  {
    nameField: 'additionalOccupation',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'whichOne',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'additionalSalary',
    validationFunctions: [validateNumberWith2Decimals]
  },
  {
    nameField: 'beneficiaryName',
    validationFunctions: [validateAlphanumericValue, validateName]
  },
  {
    nameField: 'participationPercentageI',
    validationFunctions: [validateNumberWith2Decimals]
  },
  {
    nameField: 'beneficiaryBusinessName',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'beneficiaryFaLastName',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'beneficiaryMoLastName',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'beneficiaryMoLastName',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'beneficiaryBirthDate',
    validationFunctions: [DateValidator]
  },
  {
    nameField: 'participationPercentage',
    validationFunctions: [validateNumberWith2Decimals]
  },
  {
    nameField: 'participationPercentage',
    validationFunctions: [validateNumberWith2Decimals]
  },
  {
    nameField: 'beneficiaryStreet',
    validationFunctions: [validateStreet]
  },
  {
    nameField: 'beneficiaryExteriorNumber',
    validationFunctions: [validateStreetNum]
  },
  {
    nameField: 'beneficiaryInteriorNumber',
    validationFunctions: [validateStreetNum]
  },
  {
    nameField: 'beneficiaryZipCode',
    validationFunctions: [validateZipCode]
  },
  {
    nameField: 'beneficiarySuburb',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'beneficiaryMunicipality',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'beneficiaryState',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'beneficiaryCity',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'frequency',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'nameLegalAgent1',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'fatherLastNameLegalAgent1',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'motherLastNameLegalAgent1',
    validationFunctions: [validateAlphanumericValueNotRequired]
  },
  {
    nameField: 'nameLegalAgent2',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'fatherLastNameLegalAgent2',
    validationFunctions: [validateAlphanumericValue]
  },
  {
    nameField: 'motherLastNameLegalAgent2',
    validationFunctions: [validateAlphanumericValueNotRequired]
  }
];
