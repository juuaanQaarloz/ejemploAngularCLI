import {nullUndefinedOrEmptyValidation} from '../validators';
import * as moment from 'moment';
import {formatCurrency, getCurrencySymbol} from '@angular/common';

/**
 * @param (string) value the string who's removing withe spaces
 * @returns (string) value the same string in uppercase and no white spaces
 */
export function removeWhiteSpaces(value: string): string { // disable manually the input with ng-trim="false" to works this
  if (!nullUndefinedOrEmptyValidation(value)) {
    value = value.trim();
    // value = value.replace(/\s+/, ' ');
    value = value.replace(/\s+/g, ' ');
    value = value.toUpperCase();
  }
  return value;
}

/**
 * @param (string) value the string who's removing the first white space
 * @returns (string) value the same string with no first white space
 */
export function removeFirstBlankSpace(value: string): string {
  if (!nullUndefinedOrEmptyValidation(value)) {
    if (value.substring(0, 1) === ' ') {
      value = value.substring(1);
    }
  }
  return value;
}

/**
 * @param (string) date the date to add slashes in the format YYYY/MM/DD
 * @returns (string) date the same date with slashes added in the correct format
 */
export function addSlashesToDate(date: string): string {
  if (date.length === 4 || date.length === 7) {
    return date + '/';
  }
  return date;
}

/**@param (string) txt text to be modified with no accents
 * @return (string) the text with no accents marks
 */
export function removeAccents(txt: string): string {
  if (!nullUndefinedOrEmptyValidation(txt)) {
    // if (type === '' || type === null || type === undefined) {
    txt = txt.toUpperCase();
    // }

    txt = txt.replace(new RegExp(/[ÀÁÂÃÄÅ]/g), 'A');
    txt = txt.replace(new RegExp(/[ÈÉÊË]/g), 'E');
    txt = txt.replace(new RegExp(/[ÌÍÎÏ]/g), 'I');
    txt = txt.replace(new RegExp(/[ÒÓÔÕÖ]/g), 'O');
    txt = txt.replace(new RegExp(/[ÙÚÛ]/g), 'U');
  }
  return txt;
}

/**@param (string) val value to be corrected
 * @return (string) the given value in upper case, trimmed and with only 1 space between words
 */
export function correctFieldValue(val) {
  if (!nullUndefinedOrEmptyValidation(val)) {
    // if (type === '' || type === null || type === undefined) {
    val = val.toUpperCase();
    val = removeAccents(val);
    // } else {
    // val = this.removeAccents(val, type);
    // }

    if (/[ \t]{2,}/.test(val)) {
      //val = val.trim();
      val = val.replace(/\s{2,}/g, ' ');
    }

  } else {
    return null;
  }
  return val;
}


/**@param (string) val value to be corrected
 * @return (string) the given value in upper case, trimmed and with only 1 space between words
 */
export function correctFieldValueLostFocus(val) {
  // console.debug("AQui paso al perder el foco");
  if (!nullUndefinedOrEmptyValidation(val)) {
      val = val.trim();
  } else {
    return null;
  }
  return val;
}

export function transformDate(date: Date, format: string) {
  if (date) {
    const newDate =  moment(date).format(format);
    return newDate;
  } else {
    return null;
  }
}

export function stringToRegExp(str) {
  const match = (/^\/(.*)\/([a-z]*)$/).exec(str);
  const result = new RegExp(match[1], match[2]);
  // console.log('result: ', result);
  return result;
}

export function addCurrencyFormat(formato: string): string {
  let cantidad;
  let val = parseFloat(formato);
  cantidad = formatCurrency(val, 'en-US', getCurrencySymbol('USD', 'wide'));
  return cantidad.toString();
}
