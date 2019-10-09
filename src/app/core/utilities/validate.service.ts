import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
  dateTitPattern = /(((19|20)([2468][048]|[13579][26]|0[48])|2000)\/02\/29|((19|20)[0-9]{2}\/(0[469]|11)\/(0[1-9]|[12][0-9]|30)|(19|20)[0-9]{2}\/(0[13578]|1[02])\/(0[1-9]|[12][0-9]|3[01])|(19|20)[0-9]{2}\/02\/(0[1-9]|1[0-9]|2[0-8])))/;
  datePattern = /(((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([/])(0[469]|11)([/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([/])(02)([/])(\d{4}))|((29)(\.|-|\/)(02)([/])([02468][048]00))|((29)([/])(02)([/])([13579][26]00))|((29)([/])(02)([/])([0-9][0-9][0][48]))|((29)([/])(02)([/])([0-9][0-9][2468][048]))|((29)([/])(02)([/])([0-9][0-9][13579][26])))/;
  rfcPattern = /^(((([ÑA-Z|&amp;]{3}|[A-Z]{4})\d{2}((0[1-9]|1[012])(0[1-9]|1\d|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31)(([ÑA-Z0-9]){2})([A-Z|0-9]{1}))$|^(([ÑA-Z|&amp;]{3}|[A-Z]{4})([02468][048]|[13579][26])0229)(\w{2})([A-Z|0-9]{1}))|([ÑA-Z|&amp;]{3}|[A-Z]{4})\d{2}((0[1-9]|1[012])(0[1-9]|1\d|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31))$/;
  rfcMoralPattern = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
  curpPattern = /^([A-Z]{4}([0-9]{2})((0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31)[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[A-Z]{3}[0-9A-Z][0-9])$/;
  mailPattern = /^([A-Z|a-z|0-9](\.|_|-){0,1})+[A-Z|a-z|0-9]\@(?!([a-zA-Z0-9]*\.[a-zA-Z0-9]*\.[a-zA-Z0-9]*\.))(?:[A-Za-z0-9](?:[a-zA-Z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;

  constructor() { }

  /**@param (any) obj object or value to be validated
   * @return (boolean) true if the value of the object is null, undefined or an empty string, false otherwise
   */
  nullUndefinedOrEmptyValidation(obj: any): boolean {

    if (obj === null || obj === undefined || obj === '') {
      return true;
    }
    return false;
  }

  /**
   * @param (string) word The word to be validated
   * @returns (boolean) returns false if the value is not a alphanumeric
   */
  validateAlphanumericValue(word: string, apply: string): boolean {
    // this line was commented by rmunozto because have conflicts with
    //               if (word == null || word == undefined || word == "" || /[^a-zA-Z0-9ÑÜ ]/.test(word)) {
    if (apply === null || apply === undefined || apply === '') {
      // jirineoc Si contiene un valor nulo, vacío o indefinido, debe mandar error, por que es un campo requerido
      if (this.nullUndefinedOrEmptyValidation(word)) {
        return false;
      }
    }

    // added empty space becasu it was not allowing sentences -- if (/[^a-zA-Z0-9 ÑÜ\-.,\(\)\/]/.test(word))
    if (/[^a-zA-Z0-9. ÑÜ\-\(\)\/]/.test(word)) {
      return false;
    }

    if (/([a-zA-Z0-9 ÑÜ]).*?\1\1\1/.test(word)) {
      return false;
    }
    return true;
  }

  validateAlphanumericValueFormat3(word) {
    // jirineoc Si contiene un valor nulo, vacío o indefinido, debe mandar error, por que es un campo requerido
    if (this.nullUndefinedOrEmptyValidation(word)) {
      return false;
    }
    // added empty space becasu it was not allowing sentences
    if (/[^a-zA-Z0-9 ÑÜ\-.]/.test(word)) {
      return false;
    }

    if (/(.)\1{3,}/g.test(word)) {
      return false;
    }
    return true;
  }

  /**@param (string) name the given name to be checked
   * @returns (boolean) returns false if the name contains no valid characters or more than 3 of the same letter consecutive
   */
  validateName(name: string): boolean {

    if (this.nullUndefinedOrEmptyValidation(name)) {
      return false;
    }

    if (/(.)\1{3,}/g.test(name)) {
      return false;
    }
    if (!/^(([A-Z0-9 Ñ.\-'])(?![A-Z0-9 Ñ.-](([A-Z0-9 Ñ.-]){})\3))+$/.test(name)) {
      return false;
    }
    return true;
  }

  /**@param (string) name the given name to be checked
   * @returns (boolean) returns false if the name contains no valid alphanumeric characters
   */
  validateAlphanumericName(name: string): boolean {

    if (this.nullUndefinedOrEmptyValidation(name)) {
      return false;
    }

    if (!this.validateAlphanumericValueFormat3(name)) {
      return false;
    }

    if (/(.)\1{3,}/g.test(name)) {
      return false;
    }

    return true;
  }

  /**@param (string) name the given name to be checked
   * @returns (boolean) returns false if the name contains no valid characters or more than 3 of the same letter consecutive
   */
  validateNameNotMandatory(name: string): boolean {
    if (this.nullUndefinedOrEmptyValidation(name)) {
      return true;
    }
    if (/(.)\1{3,}/g.test(name)) {
      return false;
    }
    if (!/^(([A-Z Ñ.-])(?![A-Z Ñ.-](([A-Z Ñ.-]){})\3))+$/.test(name)) {
      return false;
    }
    return true;
  }

  /**
   * @param (string) date the given date to be validated
   * @returns (boolean) false if the given date is not in format DD/MM/YYYY, true otherwise
   */
  validateDateFormat(date: string): boolean {
    if (this.nullUndefinedOrEmptyValidation(date)) {
      return false;
    }
    if (!this.datePattern.test(date)) {
      return false;
    }
    return true;
  }

  /**
   * @param (string) date the given date to be validated, but this case date it is not mandatory
   * @returns (boolean) false if the given date is not in format DD/MM/YYYY, true otherwise
   */
  validateDateFormatNotMandatory(date: string): boolean {
    if (this.nullUndefinedOrEmptyValidation(date)) {
      return true;
    }
    if (!this.datePattern.test(date)) {
      return false;
    }
    return true;
  }

  /**
   * @param (string) date the given date to be validated
   * @returns (boolean) false if the given date is not in format YYYY/MM/DD, true otherwise
   */
  validateTitularDateFormat(date: string): boolean {
    if (this.nullUndefinedOrEmptyValidation(date)) {
      return false;
    }
    if (!this.dateTitPattern.test(date)) {
      return false;
    }
    return true;
  }

  /**
   * @params (number, number, number) age the age to be validated in the  permitted range, the minimum age permitted, the maximum age permitted
   * @returns (boolean) returns false if the given age is out of the rage permitted
   */
  validateAge(age: number, minAge: number, maxAge: number): boolean {
    if (age < minAge || age > maxAge) {
      return false;
    }
    return true;
  }

  /**@param (string) rfc RFC to be checked
   * @returns (boolean) false if the given RFC is not valid or empty
   */
  validateRFC(rfc: string): boolean {
    if (!this.rfcPattern.test(rfc)) {
      return false;
    }
    return true;
  }

  /**@param (string) rfc RFC to be checked
   * @returns (boolean) false if the given RFC is not valid or empty, but in this case the RFC is not mandatory
   */
  validateRFCNotMandatory(rfc: string): boolean {
    if (this.nullUndefinedOrEmptyValidation(rfc)) {
      return true;
    }
    if (!this.rfcPattern.test(rfc)) {
      return false;
    }
    return true;
  }

  /** @param (string) curp the curp to be validated
   *  @returns (boolean) returns false if there is a value in the curp that doesn´t match a valid curp
   */
  validateCURP(curp: string): boolean {
    if (!this.curpPattern.test(curp) && !this.nullUndefinedOrEmptyValidation(curp)) { // review to allow empty curp
      return false;
    }
    return true;
  }

  // TODO: make validation against catalog
  /**
   * @param (string) nationality The nationality to be validated
   * @returns (boolean) false if the given nationality doesn't was found in the countries catalog, true otherwise
   */
  validateNationality(nationality: string): boolean {
    return this.validateAlphanumericValue(nationality, nationality);
  }

  validateNationalityFormat3(nationality: string): boolean {

    if (/[^a-zA-Z0-9 ÑÜ ]/.test(nationality)) { // added empty space because it was not allowing sentences
      return false;
    }

    if (/([a-zA-Z0-9 ÑÜ ]).*?\1\1\1/.test(nationality)) {
      return false;
    }
    return true;
  }

  validateNationalityFormat4(nationality: string): boolean {
    if (this.nullUndefinedOrEmptyValidation(nationality)) {
      return true;
    }

    if (/[^a-zA-Z0-9 ÑÜ\-.,\(\)\/]/.test(nationality)) { // added empty space because it was not allowing sentences
      return false;
    }

    if (/([a-zA-Z0-9 ÑÜ]).*?\1\1\1/.test(nationality)) {
      return false;
    }
    return true;
  }

  validateInputDateBeforeOrEqualActualDate(dateSelected: string) {

    /*var value = dateSelected;

    var today = new Date();

    var dd = today.getDate();

    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    //today = mm+'/'+dd+'/'+yyyy;
    today = yyyy + '/' + mm + '/' + dd;

    if (value != '') {
      if (value > today) {
        return false;
      }
    }

    return true;*/
  }

  /**
   * @param (string) phone the phone number to validate the right format
   * @returns (boolean) returns false if the given phone contain more tha 6 times the same number consecutive or any invalid character
   */
  validatePhone(phone: string): boolean {
    // const phoneString = phone.toString();
    if (!this.nullUndefinedOrEmptyValidation(phone)) {
      if (/(.)\1{6,}/g.test(phone)) {
        return false;
      }
      if (/\D/g.test(phone)) {
        return false;
      }
      if ((phone.length > 0 && phone.length < 10) || phone.length > 10) {
        return false;
      }
    }
    return true;
  }

  /**
   * @param (string) cellphone the cellphone number to validate the right format
   * @returns (boolean) returns false if the given cellphone contain more tha 6 times the same number consecutive or any invalid character
   */
  validateCellPhone(cellphone: string): boolean {

    if (!this.nullUndefinedOrEmptyValidation(cellphone)) {
      if (/(.)\1{6,}/g.test(cellphone)) {
        return false;
      }
      if (/\D/g.test(cellphone)) {
        return false;
      }
      if ((cellphone.length > 0 && cellphone.length < 10) || cellphone.length > 10) {
        return false;
      }
    }
    return true;
  }

  /**
   * @param (string) cellphone the cellphone number to validate the right format
   * @returns (boolean) returns false if the given cellphone contain more tha 6 times the same number consecutive or any invalid character
   */
  validateCellPhoneMandatory(cellphone: string): boolean {
    if (this.nullUndefinedOrEmptyValidation(cellphone)) {
      return false;
    }
    if (/(.)\1{6,}/g.test(cellphone)) {
      return false;
    }
    if (/\D/g.test(cellphone)) {
      return false;
    }
    if ((cellphone.length > 0 && cellphone.length < 10) || cellphone.length > 10) {
      return false;
    }

    return true;
  }

}
