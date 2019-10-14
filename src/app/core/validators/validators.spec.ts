import {
  validateAge,
  validateAlphanumericName,
  validateCURP,
  validateDateFormat,
  validateDateFormatNotMandatory,
  validateKeyToken,
  validateMail,
  validateMailConfirmation,
  validateName,
  validateNameNotMandatory,
  validatePhone,
  validateRFC,
  validateRFCNotMandatory,
  validateStreet, validateStreetNum,
  validateTitularDateFormat,
  validateTokenConfirmation, validateZipCode
} from './validators';

describe('ValidateService', () => {
  beforeEach(() => {
  });

  it('should returns false if the name contains no valid characters or more than 3 of the same letter consecutive, true otherwise', () => {
    const validName = 'ODALYS';
    const notValidName = 'aaaA';
    expect(validateName(validName)).toBe(true);
    expect(validateName(notValidName)).toBe(false);
  });

  it('should return true if the name content valid alphanumeric values, ' +
    'returns false if the name contains no valid characters or more than 3 of the same letter consecutive', () => {
    const validAlphaName = '0DALY5';
    const notValidAlphaName = 'aaaa5';
    expect(validateAlphanumericName(validAlphaName)).toBe(true);
    expect(validateAlphanumericName(notValidAlphaName)).toBe(false);
  });

  it('should return true if the name is empty', () => {
    const empyName = '';
    expect(validateNameNotMandatory(empyName)).toBe(true);
  });

  it('should validate date in the format DD/MM/YYYY', () => {
    const validDate = '06/01/1993';
    const notValidDate = '1993/01/06';
    expect(validateDateFormat(validDate)).toBe(true);
    expect(validateDateFormat(notValidDate)).toBe(false);
  });

  it('should return true id the date is empty', () => {
    const empyDate = '';
    expect(validateDateFormatNotMandatory(empyDate)).toBe(true);
  });

  it('should validate date in the format YYYY/MM/DD', () => {
    const validDate = '1993/01/06';
    const notValidDate = '06/01/1993';
    expect(validateTitularDateFormat(validDate)).toBe(true);
    expect(validateTitularDateFormat(notValidDate)).toBe(false);
  });

  it('should return true if the age is inside the range provided, should return false if the given age is out of the rage provided', () => {
    const validAge = 26;
    const notValidAge = 0;
    const minAge = 1;
    const maxAge = 80;
    expect(validateAge(validAge, minAge, maxAge)).toBe(true);
    expect(validateAge(notValidAge, minAge, maxAge)).toBe(false);
  });

  it('should return true if the given RFC respect the valid format', () => {
    const validRFC = 'MASO930106PD7';
    const notValidRFC = 'MASO9301';
    expect(validateRFC(validRFC)).toBe(true);
    expect(validateRFC(notValidRFC)).toBe(false);
  });

  it('should return true if the given RFC is empty', () => {
    const emptyRFC = '';
    expect(validateRFCNotMandatory(emptyRFC)).toBe(true);
  });

  it('should return true if the given CURP respect the valid format', () => {
    const validCURP = 'MASO930106MDFRND07';
    const notValidCURP = 'MASO9301';
    expect(validateCURP(validCURP)).toBe(true);
    expect(validateCURP(notValidCURP)).toBe(false);
  });

  it('should return true if the phone number comply the valid format', () => {
    const validPhone = '5554667638';
    const notValidPhone = '5555555-54-66-76-38';

    expect(validatePhone(validPhone)).toBe(true);
    expect(validatePhone(notValidPhone)).toBe(false);
  });

  it('should return true if the given cell phone is empty', () => {
    const emptyCellPhone = '';
    expect(validateRFCNotMandatory(emptyCellPhone)).toBe(true);
  });

  it('should return true if the given email is valid', () => {
    const validEmail = 'odalys@email.com';
    const notValidEmail = 'odalys.email@com';

    expect(validateMail(validEmail)).toBe(true);
    expect(validateMail(notValidEmail)).toBe(false);
  });

  it('should return true when both emails are the same', () => {
    const email = 'odalys@email.com';
    const emailConfirmation = 'odalys@email.com';

    expect(validateMailConfirmation(emailConfirmation, email)).toBe(true);
  });

  it('should return true if the given token has the correct format', () => {
    const token = '123456789123456789';

    expect(validateKeyToken(token)).toBe(true);
  });

  it('should return true when both tokens are the same', () => {
    const token = '123456789123456789';
    const confirmationToken = '123456789123456789';

    expect(validateTokenConfirmation(confirmationToken, token)).toBe(true);
  });

  it('should return true if the street does not contains invalid characters', () => {
    const validStreet = 'REFORMA';
    const notValidStreet = 'ReeeeFFORMA';

    expect(validateStreet(validStreet)).toBe(true);
    expect(validateStreet(notValidStreet)).toBe(false);
  });

  it('should return true when the street number does not contain invalid characters', () => {
    const validNumber = '145';
    const notValidNumber  = '123/';

    expect(validateStreetNum(validNumber)).toBe(true);
    expect(validateStreetNum(notValidNumber)).toBe(false);
  });

  it('should return true when the zip code comply the given format', () => {
    const validCP = '07840';
    const notValidCP = '07840.1';

    expect(validateZipCode(validCP)).toBe(true);
    expect(validateZipCode(notValidCP)).toBe(false);
  });
});
