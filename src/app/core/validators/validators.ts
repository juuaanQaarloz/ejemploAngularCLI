import {AbstractControl, Form, FormControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import * as moment from 'moment';
import {addSlashesToDate} from '../utilities';

export const dateTitPattern = /(((19|20)([2468][048]|[13579][26]|0[48])|2000)\/02\/29|((19|20)[0-9]{2}\/(0[469]|11)\/(0[1-9]|[12][0-9]|30)|(19|20)[0-9]{2}\/(0[13578]|1[02])\/(0[1-9]|[12][0-9]|3[01])|(19|20)[0-9]{2}\/02\/(0[1-9]|1[0-9]|2[0-8])))/;
export const datePattern = /(((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([/])(0[469]|11)([/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([/])(02)([/])(\d{4}))|((29)(\.|-|\/)(02)([/])([02468][048]00))|((29)([/])(02)([/])([13579][26]00))|((29)([/])(02)([/])([0-9][0-9][0][48]))|((29)([/])(02)([/])([0-9][0-9][2468][048]))|((29)([/])(02)([/])([0-9][0-9][13579][26])))/;
export const rfcPattern = /^(((([ÑA-Z|&amp;]{3}|[A-Z]{4})\d{2}((0[1-9]|1[012])(0[1-9]|1\d|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31)(([ÑA-Z0-9]){2})([A-Z|0-9]{1}))$|^(([ÑA-Z|&amp;]{3}|[A-Z]{4})([02468][048]|[13579][26])0229)(\w{2})([A-Z|0-9]{1}))|([ÑA-Z|&amp;]{3}|[A-Z]{4})\d{2}((0[1-9]|1[012])(0[1-9]|1\d|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31))$/;
export const rfcMoralPattern = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
export const curpPattern = /^([A-Z]{4}([0-9]{2})((0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31)[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[A-Z]{3}[0-9A-Z][0-9])$/;
export const mailPattern = /^([A-Z|a-z|0-9](\.|_|-){0,1})+[A-Z|a-z|0-9]\@(?!([a-zA-Z0-9]*\.[a-zA-Z0-9]*\.[a-zA-Z0-9]*\.))(?:[A-Za-z0-9](?:[a-zA-Z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;

/**@param (any) obj object or value to be validated
 * @return (boolean) true if the value of the object is null, undefined or an empty string, false otherwise
 */
export function nullUndefinedOrEmptyValidation(obj: any): boolean {

  if (obj === null || obj === undefined || obj === '') {
    return true;
  }
  return false;
}

/**
 * @param (string) word The word to be validated
 * @returns (boolean) returns false if the value is not a alphanumeric
 */
export function validateAlphanumericValue(control: AbstractControl, apply?): { [key: string]: any } | null {
  // this line was commented by rmunozto because have conflicts with
  //               if (word == null || word == undefined || word == "" || /[^a-zA-Z0-9ÑÜ ]/.test(word)) {
  if (apply === null || apply === undefined || apply === '') {
    // jirineoc Si contiene un valor nulo, vacío o indefinido, debe mandar error, por que es un campo requerido
    if (nullUndefinedOrEmptyValidation(control.value)) {
      return {invalidValue: {valid: false, value: control.value}};
      // return false;
    }
  }

  // added empty space becasu it was not allowing sentences -- if (/[^a-zA-Z0-9 ÑÜ\-.,\(\)\/]/.test(word))
  if (/[^a-zA-Z0-9. ÑÜ\-\(\)\/]/.test(control.value)) {
    return {invalidValue: {valid: false, value: control.value}};
    // return false;
  }

  if (/([a-zA-Z0-9 ÑÜ]).*?\1\1\1/.test(control.value)) {
    return {invalidValue: {valid: false, value: control.value}};
    // return false;
  }

  return null;
  // return true;

  // return valid ? null : {invalidName: { valid: false, value: control.value}};
}

export function validateAlphanumericValueNotRequired(control: AbstractControl): { [key: string]: any } | null {
  if (control.value) {
    return validateAlphanumericValue(control);
  } else {
    return null;
  }
}

export function validateAlphanumericValueFormat3(control: AbstractControl): { [key: string]: any } | null {
  // jirineoc Si contiene un valor nulo, vacío o indefinido, debe mandar error, por que es un campo requerido
  if (nullUndefinedOrEmptyValidation(control.value)) {
    return {invalidValue: {valid: false, value: control.value}};
    // return false;
  }
  // added empty space becasu it was not allowing sentences
  if (/[^a-zA-Z0-9 ÑÜ\-.]/.test(control.value)) {
    return {invalidValue: {valid: false, value: control.value}};
    // return false;
  }

  if (/(.)\1{3,}/g.test(control.value)) {
    return {invalidValue: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return true;
}

/**@param (string) name the given name to be checked
 * @returns (boolean) returns false if the name contains no valid characters or more than 3 of the same letter consecutive
 */
export function validateName(control: AbstractControl): { [key: string]: any } | null {

  if (nullUndefinedOrEmptyValidation(control.value)) {
    return {invalidName: {valid: false, value: control.value}};
    // return false;
  }

  if (/(.)\1{3,}/g.test(control.value)) {
    return {invalidName: {valid: false, value: control.value}};
    // return false;
  }
  if (!/^(([A-Z0-9 Ñ.\-'])(?![A-Z0-9 Ñ.-](([A-Z0-9 Ñ.-]){})\3))+$/.test(control.value)) {
    return {invalidName: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return true;
}

/**@param (string) name the given name to be checked
 * @returns (boolean) returns false if the name contains no valid alphanumeric characters
 */
export function validateAlphanumericName(control: AbstractControl): { [key: string]: any } | null {

  if (nullUndefinedOrEmptyValidation(control.value)) {
    return {invalidName: {valid: false, value: control.value}};
    // return false;
  }

  if (!validateAlphanumericValueFormat3(control.value)) {
    return {invalidName: {valid: false, value: control.value}};
    // return false;
  }

  if (/(.)\1{3,}/g.test(control.value)) {
    return {invalidName: {valid: false, value: control.value}};
    // return false;
  }

  return null;
  // return true;
}

/**@param (string) name the given name to be checked
 * @returns (boolean) returns false if the name contains no valid characters or more than 3 of the same letter consecutive
 */
export function validateNameNotMandatory(control: AbstractControl): { [key: string]: any } | null {
  if (nullUndefinedOrEmptyValidation(control.value)) {
    return null;
    // return true;
  }
  if (/(.)\1{3,}/g.test(control.value)) {
    return {invalidName: {valid: false, value: control.value}};
    // return false;
  }
  if (!/^(([A-Z Ñ.-])(?![A-Z Ñ.-](([A-Z Ñ.-]){})\3))+$/.test(control.value)) {
    return {invalidName: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return true;
}

/**
 * @param (string) date the given date to be validated
 * @returns (boolean) false if the given date is not in format DD/MM/YYYY, true otherwise
 */
export function validateDateFormat(control: AbstractControl): { [key: string]: any } | null {
  /*if (nullUndefinedOrEmptyValidation(control.value)) {
    return {invalidDate: { valid: false, value: control.value}};
    // return false;
  }*/
  // console.log('onValidateFormat: ', control.value);
  if (!datePattern.test(control.value)) {
    return {invalidDate: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return true;
}

export function AgeValidator(minAge = 18, maxAge = 70): any {
  // console.log('on AgeValidator');
  return (control: FormControl): { [key: string]: any } => {
    const val = control.value;

    console.log('val: ', val);

    if (val < minAge || val > maxAge) {
      return {invalidAge: true};
    }

    return null;
  };
}

/*export function DateValidator(format = 'YYYY/MM/DD'): any {
  // console.log('onDateValidator...');
  return (control: FormControl): { [key: string]: any } => {
    const currentDate = moment().format(format);
    const val = moment(control.value, format, true);

    if (!val.isValid()) {
      return {invalidDate: true};
    }

    if (val.isAfter(currentDate)) {
      return {invalidDate: true};
    }

    return null;
  };
}*/

export function DateValidator(control: AbstractControl): { [key: string]: any } | null {
  const format = 'YYYY/MM/DD';
  const currentDate = moment();
  const val = moment(control.value, format, true);

  if (!val.isValid()) {
    return {invalidDate: true};
  }

  if (val.isAfter(currentDate)) {
    return {invalidDate: true};
  }

  return null;
}

/**
 * @param (string) date the given date to be validated, but this case date it is not mandatory
 * @returns (boolean) false if the given date is not in format DD/MM/YYYY, true otherwise
 */
export function validateDateFormatNotMandatory(control: AbstractControl): { [key: string]: any } | null {
  if (nullUndefinedOrEmptyValidation(control.value)) {
    return null;
    // return true;
  }
  if (!datePattern.test(control.value)) {
    return {invalidDate: {valid: false, value: control.value}};
    // return false;
  }

  return null;
  // return true;
}

/**
 * @param (string) date the given date to be validated
 * @returns (boolean) false if the given date is not in format YYYY/MM/DD, true otherwise
 */
export function validateTitularDateFormat(control: AbstractControl): { [key: string]: any } | null {
  if (nullUndefinedOrEmptyValidation(control.value)) {
    return {invalidDate: {valid: false, value: control.value}};
    // return false;
  }
  if (!dateTitPattern.test(control.value)) {
    return {invalidDate: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return true;
}

/**
 * @params (number, number, number) age the age to be validated in the  permitted range, the minimum age permitted, the maximum age permitted
 * @returns (boolean) returns false if the given age is out of the rage permitted
 */
export function validateAge(control: AbstractControl): { [key: string]: any } | null {
  if (control.value < 18 || control.value > 70) {
    return {invalidAge: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return true;
}

/**@param (string) rfc RFC to be checked
 * @returns (boolean) false if the given RFC is not valid or empty
 */
export function validateRFC(control: AbstractControl): { [key: string]: any } | null {
  if (!rfcPattern.test(control.value)) {
    return {invalidRFC: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return true;
}

/**@param (string) rfc RFC to be checked for moral person
 * @returns (boolean) false if the given RFC is not valid or empty
 */
export function validateRFCMoral(control: AbstractControl): { [key: string]: any } | null {
  if (!rfcMoralPattern.test(control.value)) {
    return {invalidRFC: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return true;
}

/**@param (string) rfc RFC to be checked
 * @returns (boolean) false if the given RFC is not valid or empty, but in this case the RFC is not mandatory
 */
export function validateRFCNotMandatory(control: AbstractControl): { [key: string]: any } | null {
  if (nullUndefinedOrEmptyValidation(control.value)) {
    return null;
    // return true;
  }
  if (!rfcPattern.test(control.value)) {
    return {invalidRFC: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return true;
}

/** @param (string) curp the curp to be validated
 *  @returns (boolean) returns false if there is a value in the curp that doesn´t match a valid curp
 */
export function validateCURP(control: AbstractControl): { [key: string]: any } | null {
  if (!curpPattern.test(control.value) && !nullUndefinedOrEmptyValidation(control.value)) { // review to allow empty curp
    return {invalidCurp: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return true;
}

export function validateCURPNotRequired(control: AbstractControl): { [key: string]: any } | null {
  if (control.value) {
    if (!curpPattern.test(control.value) && !nullUndefinedOrEmptyValidation(control.value)) { // review to allow empty curp
      return {invalidCurp: {valid: false, value: control.value}};
      // return false;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

// TODO: make validation against catalog
/**
 * @param (string) nationality The nationality to be validated
 * @returns (boolean) false if the given nationality doesn't was found in the countries catalog, true otherwise
 */
export function validateNationality(control: AbstractControl): { [key: string]: any } | null {
  return validateAlphanumericValue(control.value, '');
}

export function validateNationalityFormat3(control: AbstractControl): { [key: string]: any } | null {

  if (/[^a-zA-Z0-9 ÑÜ ]/.test(control.value)) { // added empty space because it was not allowing sentences
    return {invalidNationality: {valid: false, value: control.value}};
    // return false;
  }

  if (/([a-zA-Z0-9 ÑÜ ]).*?\1\1\1/.test(control.value)) {
    return {invalidNationality: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return true;
}

// TODO: make validation against catalog
export function validateNationalityFormat4(control: AbstractControl): { [key: string]: any } | null {
  if (nullUndefinedOrEmptyValidation(control.value)) {
    return null;
    // return true;
  }

  if (/[^a-zA-Z0-9 ÑÜ\-.,\(\)\/]/.test(control.value)) { // added empty space because it was not allowing sentences
    return {invalidNationality: {valid: false, value: control.value}};
    // return false;
  }

  if (/([a-zA-Z0-9 ÑÜ]).*?\1\1\1/.test(control.value)) {
    return {invalidNationality: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return true;
}

/*validateInputDateBeforeOrEqualActualDate(dateSelected) {

  const value = dateSelected;

  let today = new Date();

  let dd = today.getDate();

  let mm = today.getMonth() + 1; // January is 0!

  const yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  today = new Date(yyyy + '/' + mm + '/' + dd);

  if (value !== '') {
    if (value > today) {
      return false;
    }
  }

  return true;
}*/

/**
 * @param (string) phone the phone number to validate the right format
 * @returns (boolean) returns false if the given phone contain more tha 6 times the same number consecutive or any invalid character
 */
export function validatePhone(control: AbstractControl): { [key: string]: any } | null {
  // const phoneString = phone.toString();
  if (!nullUndefinedOrEmptyValidation(control.value)) {
    if (/(.)\1{6,}/g.test(control.value)) {
      return {invalidPhoneNumber: {valid: false, value: control.value}};
      // return false;
    }
    if (/\D/g.test(control.value)) {
      return {invalidPhoneNumber: {valid: false, value: control.value}};
      // return false;
    }
    if ((control.value.length > 0 && control.value.length < 10) || control.value.length > 10) {
      return {invalidPhoneNumber: {valid: false, value: control.value}};
      // return false;
    }
  }
  return null;
  // return true;
}

export function validatePhoneNotRequired(control: AbstractControl): { [key: string]: any } | null {
  if (control.value) {
    return validatePhone(control);
  } else {
    return null;
  }
}

/**
 * @param (string) cellphone the cellphone number to validate the right format
 * @returns (boolean) returns false if the given cellphone contain more tha 6 times the same number consecutive or any invalid character
 */
export function validateCellPhoneMandatory(control: AbstractControl): { [key: string]: any } | null {
  if (nullUndefinedOrEmptyValidation(control.value)) {
    return {invalidValue: {valid: false, value: control.value}};
    // return false;
  }
  if (/(.)\1{6,}/g.test(control.value)) {
    return {invalidValue: {valid: false, value: control.value}};
    // return false;
  }
  if (/\D/g.test(control.value)) {
    return {invalidValue: {valid: false, value: control.value}};
    // return false;
  }
  if ((control.value.length > 0 && control.value.length < 10) || control.value.length > 10) {
    return {invalidValue: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return true;
}

/**
 * @param (string) mail The given e-mail to be validated
 * @returns (boolean) returns false if the given e-mail doesnt´s match the format usuario&#64;servidor.extension(.extension(s)) or contains any invalid
 * character.
 *
 * can view of valid and invalid e-mail here https://regexr.com/3bcrb
 */
export function validateMail(control: AbstractControl): { [key: string]: any } | null {
  if (!mailPattern.test(control.value) && !nullUndefinedOrEmptyValidation(control.value)) {
    return {invalidEmail: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return true;
}

/**
 * @param (string) mailConfirmation The captured mail confirmation
 * @param (string) mail  the original mail captured
 * @returns (boolean) returns false if the e-mail confirmation is not the same than the original e-mail
 */
export function validateMailConfirmation(email: string, confirmationEmail: string): boolean {
  if (nullUndefinedOrEmptyValidation(email)) {
    // return null;
    return true;
  }
  if (!mailPattern.test(email)) {
    // return {invalidEmail: { valid: false, value: controlEmail.value}};
    return false;
  }
  if (confirmationEmail !== email) {
    // return {invalidEmail: { valid: false, value: controlConfirmationEmail.value}};
    return false;
  }
  // return null;
  return true;
}

/**
 * @param (string) names Name captured
 * @param (string) lastName LastName captured
 * @param (string) firstName FirstName captured
 * @returns (boolean) returns false if the e-mail confirmation is not the same than the original e-mail
 */
export function validateNameLasNameFisrtName(names: string, lastName: string, firstName: string): boolean {
  if (nullUndefinedOrEmptyValidation(names)) {
    // return null;
    return true;
  }
  if (nullUndefinedOrEmptyValidation(lastName)) {
    // return null;
    return true;
  }
  if (nullUndefinedOrEmptyValidation(firstName)) {
    // return null;
    return true;
  }
  if ((names === lastName  &&  names=== firstName) ||
        (lastName === names &&  lastName=== firstName) ||
        (firstName === names &&  firstName=== lastName)) {
    // return {invalidEmail: { valid: false, value: controlConfirmationEmail.value}};
    return false;
  }
  // return null;
  return true;
}


/**
 * @param (string) token to validate
 * @returns (boolean) returns false if the token doesn't match a correct format
 */
export function validateKeyToken(control: AbstractControl): { [key: string]: any } | null {
  const regexp = /^\d*$/;

  if (control.value.length !== 16 && control.value.length !== 18) {
    return {invalidToken: {valid: false, value: control.value}};
    // return false;
  }
  if (!regexp.test(control.value)) {
    return {invalidToken: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return regexp.test(token);
}

/**
 * @param (string)tokenConfirmation The captured token confirmation
 * @param (string) token  the original token captured
 * @returns (boolean) returns false if the token confirmation is not the same than the original token
 */
export function validateTokenConfirmation(tokenConfirmation: string, token: string) {
  if (tokenConfirmation !== token) {
    return false;
  }
  return true;
}

/**
 * @param (string) street the given street string to be validated
 * @returns (boolean) returns false if the street contains invalid characters
 */
export function validateStreet(control: AbstractControl): { [key: string]: any } | null {
  if (!/^(([A-Z0-9 Ñ \-'.,_\(\)\[\]\/'\+&#])(?![A-Z0-9 Ñ\-'.,_\(\)\[\]\/\+&#](([A-Z0-9 Ñ\-'.,_\(\)\[\]\/\+&#]){})\3))+$/.test(control.value)) {
    return {invalidStreet: {valid: false, value: control.value}};
    // return false;
  }
  if (/(.)\1{3,}/g.test(control.value)) {
    return {invalidStreet: {valid: false, value: control.value}};
    // return false;
  }
  return null;
  // return true;
}

/**
 * @param (string) num The street number to be validated
 * @returns (boolean) returns false if the street number contains invaid characters
 */
export function validateStreetNum(control: AbstractControl): { [key: string]: any } | null {
  if (nullUndefinedOrEmptyValidation(control.value)) {
    return {invalidStreetNumber: {valid: false, value: control.value}};
    // return false;
  }

  const regexpZero = /^(?!.*(.)\1{3})/;

  if (!regexpZero.test(control.value)) {
    return {invalidStreetNUmber: {valid: false, value: control.value}};
    // return false;
  }
  const regexpAdmisibleCharacter = /^[a-zA-Z0-9ñÑ\#\-\.]*$/;

  if (regexpAdmisibleCharacter.test(control.value)) {
    return null;
    // return true;
  }

  return {invalidStreetNumber: {valid: false, value: control.value}};
  // return false;
}

export function validateStreetNumberNotRequired(control: AbstractControl): { [key: string]: any } | null {
  if (control.value) {
    return validateStreetNum(control);
  } else {
    return null;
  }
}

/** @param (string) cp the zip code to be validated
 *  @returns (boolean) returns false if there is a value in the zipcode that doesn´t match a valid zipcode
 */
export function validateZipCode(control: AbstractControl): { [key: string]: any } | null {
  if (!/^[0-9]{5}$/m.test(control.value)) {
    return {invalidZipCode: {valid: false, value: control.value}};
    /// return false;
  }

  return null;
  // return true;
}

/** @param (number) number to be validated
 *  @returns (boolean) returns false if the given value is  not a number with 2 decimals max
 */
export function validateNumberWith2Decimals(control: AbstractControl): { [key: string]: any } | null {
  /*The next regular expression validates a string conformed by numbers and 2 decimals example:
   * 200.00
   * 2.0
   * 20.00
   * 2000.00
   * 0.0
   * .0
   * .00
   *  Invalid strings:
   * 20.000
   * aaaa
   * qwerty
   * */
  const regexp = /\d+(\.\d{1,2})?/;

  if (!regexp.test(control.value)) {
    return {invalidZipCode: {valid: false, value: control.value}};
    // return false;
  }
  // return true;
  return null;
}

/** @param (number) number to be validated
 *  @returns (boolean) returns false if the given value is  not a number with 2 decimals max
 */
export function validateNumberWith2DecimalsNotRequired(control: AbstractControl): { [key: string]: any } | null {
  if (control.value) {
    /*The next regular expression validates a string conformed by numbers and 2 decimals example:
   * 200.00
   * 2.0
   * 20.00
   * 2000.00
   * 0.0
   * .0
   * .00
   *  Invalid strings:
   * 20.000
   * aaaa
   * qwerty
   * */
    const regexp = /\d+(\.\d{1,2})?/;

    if (!regexp.test(control.value)) {
      return {invalidZipCode: {valid: false, value: control.value}};
      // return false;
    }
    // return true;
    return null;
  } else {
    return null;
  }
}

export function validateEmailConfirmation(targetKey: string, toMatchKey: string): ValidatorFn {
  return (group: FormGroup): {[key: string]: any} => {
    const email = group.controls[targetKey].value;
    const emailConfirmation = group.controls[toMatchKey].value;
    if (email !== emailConfirmation) {
      // console.log('not valid email confirmation');
      return {invalidEmailConfirmation: {valid: false, value: emailConfirmation.value}};
    }
    console.log('valid email conformation');
    return null;
  };
}

export const equalEmailsValidator: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
  // console.log('on EqualEmailsValidator');
  const email = group.controls.email.value;
  const confirmationEmail = group.controls.emailConfirmation.value;

  if (email !== confirmationEmail) {
    // console.log('not equals emails');
    return { invalidEmailConfirmation: true };
  } else {
    // console.log('equal emails valid');
    return null;
  }
};

/*export const hasRequiredField = (abstractControl: AbstractControl): boolean => {
  if (abstractControl.validator) {
    const validator = abstractControl.validator({}as AbstractControl);
    console.log('validator: ', validator);
    if (validator && validator.required) {
      return true;
    }
  }
  if (abstractControl['controls']) {
    for (const controlName in abstractControl['controls']) {
      if (abstractControl['controls'][controlName]) {
        if (hasRequiredField(abstractControl['controls'][controlName])) {
          return true;
        }
      }
    }
  }
  return false;
};*/

export function rangeValidator(min: number, max: number) {
  return (control: AbstractControl): { [key: string]: boolean} | null => {
    if (control.value !== null && (isNaN(control.value) || control.value < min  || control.value > max)) {
      return { rangeValidator: true};
    }
    return null;
  };
}

export const higherAssuredImport: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
  const currency = group.controls.currency.value;
  const assuredImport = group.controls.assuredImport.value;
  if (currency === 'mxn') {
    if (Number(assuredImport) > Number(0.00)){
      if (Number(assuredImport) < Number(400000.00)) {
      // console.log('invalidAssuredImportMxn', false);
        return { invalidAssuredImportMxn: true};
      } else {
        return null;
      }
    } else {
      return null;
    }
  } else if (currency === 'usd') {
    if (Number(assuredImport) > Number(0.00)) {
      if (Number(assuredImport) < Number(40000.00)) {
        return {invalidAssuredImportUsd: true};
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
};

export const validateFunds: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
  let fixedFunds = group.controls.fixedFunds.value;
  let variableFunds = group.controls.variableFunds.value;
  let fixedRetirement = group.controls.fixedRetirement.value;
  let variableRetirement = group.controls.variableRetirement.value;
  let  fixedSaving = group.controls.fixedSaving.value;
  let variableSaving = group.controls.variableSaving.value;
  let total = 0;
  const currency = group.controls.currency.value;
  const packing =  group.controls.packing.value;

  if (currency === 'usd') {
    variableFunds = 0;
    variableSaving = 0;
  }
  if (packing !== '4') {
     fixedRetirement = 0;
     fixedSaving = 0;
     variableRetirement = 0;
     variableSaving = 0;
  }
  if (currency === 'usd' || currency === 'mxn') {
    total = Number(fixedFunds) + Number(variableFunds) + Number(fixedRetirement) +
      Number(variableRetirement) + Number(fixedSaving) + Number(variableSaving);
    // console.log('total', Number(total));
    if (total !== 100) {
      return {invalidPlanImport: true};
    } else {
      return null;
    }
  } else { return null; }
};


