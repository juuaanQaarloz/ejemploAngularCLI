import { TestBed } from '@angular/core/testing';

import { ValidateService } from './validate.service';
import {not} from 'rxjs/internal-compatibility';

describe('ValidateService', () => {
  let service: ValidateService;
  beforeEach(() => {
    service = new ValidateService();
  });

  it('should returns false if the name contains no valid characters or more than 3 of the same letter consecutive, true otherwise', () => {
    const validName = 'ODALYS';
    const notValidName = 'aaaA';
    expect(service.validateName(validName)).toBe(true);
    expect(service.validateName(notValidName)).toBe(false);
  });

  it('should return true if the name content valid alphanumeric values, ' +
    'returns false if the name contains no valid characters or more than 3 of the same letter consecutive', () => {
    const validAlphaName = '0DALY5';
    const notValidAlphaName = 'aaaa5';
    expect(service.validateAlphanumericName(validAlphaName)).toBe(true);
    expect(service.validateAlphanumericName(notValidAlphaName)).toBe(false);
  });

  it('should return true if the name is empty', () => {
    const empyName = '';
    expect(service.validateNameNotMandatory(empyName)).toBe(true);
  });

  it('should validate date in the format DD/MM/YYYY', () => {
    const validDate = '06/01/1993';
    const notValidDate = '1993/01/06';
    expect(service.validateDateFormat(validDate)).toBe(true);
    expect(service.validateDateFormat(notValidDate)).toBe(false);
  });

  it('should return true id the date is empty', () => {
    const empyDate = '';
    expect(service.validateDateFormatNotMandatory(empyDate)).toBe(true);
  });

  it('should validate date in the format YYYY/MM/DD', () => {
    const validDate = '1993/01/06';
    const notValidDate = '06/01/1993';
    expect(service.validateTitularDateFormat(validDate)).toBe(true);
    expect(service.validateTitularDateFormat(notValidDate)).toBe(false);
  });

  it('should return true if the age is inside the range provided, should return false if the given age is out of the rage provided', () => {
    const validAge = 26;
    const notValidAge = 0;
    const minAge = 1;
    const maxAge = 80;
    expect(service.validateAge(validAge, minAge, maxAge)).toBe(true);
    expect(service.validateAge(notValidAge, minAge, maxAge)).toBe(false);
  });

  it('should return true if the given RFC respect the valid format', () => {
    const validRFC = 'MASO930106PD7';
    const notValidRFC = 'MASO9301';
    expect(service.validateRFC(validRFC)).toBe(true);
    expect(service.validateRFC(notValidRFC)).toBe(false);
  });

  it('should return true if the given RFC is empty', () => {
    const emptyRFC = '';
    expect(service.validateRFCNotMandatory(emptyRFC)).toBe(true);
  });

  it('should return true if the given CURP respect the valid format', () => {
    const validCURP = 'MASO930106MDFRND07';
    const notValidCURP = 'MASO9301';
    expect(service.validateCURP(validCURP)).toBe(true);
    expect(service.validateCURP(notValidCURP)).toBe(false);
  });

  it('should return true if the phone number comply the valid format', () => {
    const validPhone = '5554667638';
    const notValidPhone = '5555555-54-66-76-38';

    expect(service.validatePhone(validPhone)).toBe(true);
    expect(service.validatePhone(notValidPhone)).toBe(false);
  });

  it('should return true if the given cell phone is empty', () => {
    const emptyCellPhone = '';
    expect(service.validateRFCNotMandatory(emptyCellPhone)).toBe(true);
  });

  it('should return true if the given email is valid', () => {
    const validEmail = 'odalys@email.com';
    const notValidEmail = 'odalys.email@com';

    expect(service.validateMail(validEmail)).toBe(true);
    expect(service.validateMail(notValidEmail)).toBe(false);
  });

  it('should return true when both emails are the same', () => {
    const email = 'odalys@email.com';
    const emailConfirmation = 'odalys@email.com';

    expect(service.validateMailConfirmation(emailConfirmation, email)).toBe(true);
  });

  it('should return true if the given token has the correct format', () => {
    const token = '123456789123456789';

    expect(service.validateKeyToken(token)).toBe(true);
  });

  it('should return true when both tokens are the same', () => {
    const token = '123456789123456789';
    const confirmationToken = '123456789123456789';

    expect(service.validateTokenConfirmation(confirmationToken, token)).toBe(true);
  });

  it('should return true if the street does not contains invalid characters', () => {
    const validStreet = 'REFORMA';
    const notValidStreet = 'ReeeeFFORMA';

    expect(service.validateStreet(validStreet)).toBe(true);
    expect(service.validateStreet(notValidStreet)).toBe(false);
  });

  it('should return true when the street number does not contain invalid characters', () => {
    const validNumber = '145';
    const notValidNumber  = '123/';

    expect(service.validateStreetNum(validNumber)).toBe(true);
    expect(service.validateStreetNum(notValidNumber)).toBe(false);
  });

  it('should return true when the zip code comply the given format', () => {
    const validCP = '07840';
    const notValidCP = '07840.1';

    expect(service.validateZipCode(validCP)).toBe(true);
    expect(service.validateZipCode(notValidCP)).toBe(false);
  });
});
