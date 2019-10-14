import {nullUndefinedOrEmptyValidation} from '../validators';


/**
 * @param (any) birthDate the date of birth
 * @return (number) the age calculated given the date of birth
 */
export function calculateAge(birthDate: any): number {

  const today = new Date();
  const dateOfBirth = new Date(birthDate);
  let age = today.getFullYear() - dateOfBirth.getFullYear();
  const m = today.getMonth() - dateOfBirth.getMonth();

  // add or rest a year based on the moth of birth
  if (m < 0 || (m === 0 && today.getDate() < dateOfBirth.getDate())) {
    age--;
  }
  age = age < 0 ? 0 : age;
  return age;
}

/**
 * Method to calculate RFC (Follows SAT rules)
 * All fields should be strings
 * Birthday should be in format DD/MM/YYYY
 */
export function calculateRFC(apellidoPaterno: string, apellidoMaterno: string, nombre: string, fechaNacimiento: string) {

  if ((apellidoPaterno === null && apellidoMaterno === null)) {

    return null;
  }

  if (typeof (apellidoPaterno) !== 'undefined' && typeof (apellidoMaterno) !== 'undefined' && typeof (nombre) === 'string' && typeof (fechaNacimiento) === 'string') {

    let RFC = '';
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const grammarRules = ['el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'lo', 'a', 'ante', 'bajo', 'con', 'de',
      'desde', 'durante', 'en', 'entre', 'excepto', 'hacia', 'hasta', 'mediante', 'para', 'por', 'salvo', 'según', 'sin',
      'sobre', 'tras', 'al', 'del', 'y', 'e', 'o'];
    const badWords = ['BUEI', 'BUEY', 'CACA', 'CACO', 'CAGA', 'CAGO', 'CAKA', 'COGE', 'COJA', 'COJE', 'COJI', 'COJO',
      'CULO', 'FETO', 'GUEY', 'JOTO', 'KACA', 'KACO', 'KAGA', 'KAGO', 'KOGE', 'KOJO', 'KAKA', 'KULO', 'MAME', 'MAMO',
      'MEAR', 'MEON', 'MION', 'MOCO', 'MULA', 'PEDA', 'PEDO', 'PENE', 'PUTA', 'PUTO', 'QULO', 'RATA', 'RUIN'];

    let mainLastName = '';
    let mainMotherLastName = '';
    let mainName = '';

    if (apellidoPaterno === null || apellidoPaterno === '') {
      mainLastName = null;
    } else if (apellidoPaterno.indexOf(' ') !== -1 && apellidoPaterno.split(' ').length > 1) {

      const lastNameArray = apellidoPaterno.split(' ');
      let grammarFound = false;

      for (const lastNameArrayItem of lastNameArray) {
        grammarFound = false;
        const lastName = lastNameArrayItem;

        for (const grammarRulesItem of grammarRules) {
          const grammar = grammarRulesItem;

          if (lastName.toUpperCase() === grammar.toUpperCase()) {

            grammarFound = true;
            break;
          }
        }

        if (grammarFound === false) {

          mainLastName = lastName;
          break;
        }
      }

    } else {

      mainLastName = apellidoPaterno.trim();
    }

    if (apellidoMaterno === null || apellidoMaterno === '') {

      mainMotherLastName = null;
    } else if (apellidoMaterno.indexOf(' ') !== -1 && apellidoMaterno.split(' ').length > 1) {

      const motherLastNameArray = apellidoMaterno.split(' ');
      let grammarFound = false;

      for (const motherLastNameArrayItem of motherLastNameArray) {

        grammarFound = false;
        const motherLastName = motherLastNameArrayItem;

        for (const grammarRulesItem of grammarRules) {

          const grammar = grammarRulesItem;

          if (motherLastName.toUpperCase() === grammar.toUpperCase()) {

            grammarFound = true;
            break;
          }
        }

        if (grammarFound === false) {

          mainMotherLastName = motherLastName;
          break;
        }
      }

    } else {

      mainMotherLastName = apellidoMaterno.trim();
    }

    if (nombre.indexOf(' ') !== -1 && nombre.split(' ').length > 1) {

      const nameArray = nombre.split(' ');
      let grammarFound = false;

      for (const nameArrayItem of nameArray) {

        grammarFound = false;
        const name = nameArrayItem;

        for (const grammarRulesItem of grammarRules) {

          const grammar = grammarRulesItem;

          if (name.toUpperCase() === grammar.toUpperCase()) {

            grammarFound = true;
            break;
          }
        }

        if (grammarFound === false && name.toUpperCase() !== 'MARIA' && name.toUpperCase() !== 'JOSE') {

          mainName = name;
          break;
        }
      }
    } else {

      mainName = nombre.trim();
    }

    if (mainLastName === null) {

      RFC = RFC + mainMotherLastName.charAt(0);
      RFC = RFC + mainMotherLastName.charAt(1);
      RFC = RFC + mainName.charAt(0);
      RFC = RFC + mainName.charAt(1);
    } else if (mainMotherLastName === null) {

      RFC = RFC + mainLastName.charAt(0);
      RFC = RFC + mainLastName.charAt(1);
      RFC = RFC + mainName.charAt(0);
      RFC = RFC + mainName.charAt(1);
    } else {

      RFC = RFC + mainLastName.charAt(0);

      if (mainLastName.length < 3) {

        RFC = RFC + mainMotherLastName.charAt(0);
        RFC = RFC + mainName.charAt(0);
        RFC = RFC + mainName.charAt(1);
      } else {

        let vowelFound = false;

        for (const mainLastNameItem of mainLastName) {

          const letter = mainLastNameItem.toUpperCase();

          for (const vowelsItem of vowels) {

            const vowel = vowelsItem;

            if (letter === vowel) {

              vowelFound = true;
              RFC = RFC + vowel;
              break;
            }
          }

          if (vowelFound) {

            break;
          }
        }

        RFC = RFC + mainMotherLastName.charAt(0);
        RFC = RFC + mainName.charAt(0);
      }
    }

    // Remove bad words
    for (const badWord of badWords) {

      if (RFC === badWord) {

        RFC = RFC.substring(0, RFC.length - 1) + 'X';
        break;
      }
    }

    const dateFormat2 = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/i;

    if (!nullUndefinedOrEmptyValidation(fechaNacimiento.match(dateFormat2))) {

      const invertDate = fechaNacimiento.split('/');
      let invert = '';

      for (let x = invertDate.length - 1; x >= 0; x--) {

        if (x === 0) {
          invert = invert + invertDate[x];
        } else {
          invert = invert + invertDate[x] + '/';
        }
      }

      fechaNacimiento = invert;
    }

    const birthdayArray = fechaNacimiento.split('/');

    // Appends birthday values
    RFC = RFC + birthdayArray[0].charAt(2);
    RFC = RFC + birthdayArray[0].charAt(3);
    RFC = RFC + birthdayArray[1];
    RFC = RFC + birthdayArray[2];


    // Calculate Homoclave
    const anexx1 = {
      espacio: '00',
      cero: '00',
      one: '01',
      two: '02',
      three: '03',
      four: '04',
      five: '05',
      six: '06',
      seven: '07',
      eight: '08',
      nine: '09',
      AMP: '10',
      A: '11',
      B: '12',
      C: '13',
      D: '14',
      E: '15',
      F: '16',
      G: '17',
      H: '18',
      I: '19',
      J: '21',
      K: '22',
      L: '23',
      M: '24',
      N: '25',
      O: '26',
      P: '27',
      Q: '28',
      R: '29',
      S: '32',
      T: '33',
      U: '34',
      V: '35',
      W: '36',
      X: '37',
      Y: '38',
      Z: '39',
      Ñ: '40'
    };

    const fullName = apellidoPaterno + ' ' + apellidoMaterno + ' ' + nombre;
    let letterSum = 0;
    let nameTransformed = '0';

    for (let x = 0; x < fullName.length; x++) {

      let letter = fullName.charAt(x);
      let flag = false;

      if (letter === ' ') {

        letter = 'espacio';
        flag = true;
      } else if (letter === '0') {

        letter = 'cero';
        flag = true;
      } else if (letter === '1') {

        letter = 'one';
        flag = true;
      } else if (letter === '2') {

        letter = 'two';
        flag = true;
      } else if (letter === '3') {

        letter = 'three';
        flag = true;
      } else if (letter === '4') {

        letter = 'four';
        flag = true;
      } else if (letter === '5') {

        letter = 'five';
        flag = true;
      } else if (letter === '6') {

        letter = 'six';
        flag = true;
      } else if (letter === '7') {

        letter = 'seven';
        flag = true;
      } else if (letter === '8') {

        letter = 'eight';
        flag = true;
      } else if (letter === '9') {

        letter = 'nine';
        flag = true;
      } else if (letter === '&') {

        letter = 'AMP';
        flag = true;
      }

      if (flag || /^[A-ZÑ]$/.test(letter)) {

        // console.log('anexx1.' + letter + ': ', anexx1[letter]);
        // nameTransformed = nameTransformed + (window as any).eval('anexx1.' + letter);
        nameTransformed = nameTransformed + anexx1[letter];
      }
    }

    for (let x = 0; x < nameTransformed.length - 1; x++) {

      const digit1 = nameTransformed.charAt(x);
      const digit2 = nameTransformed.charAt(x + 1);
      const mergeDigits = '' + digit1 + digit2;

      letterSum = letterSum + (Math.trunc(Number(mergeDigits)) * Math.trunc(Number(mergeDigits.charAt(mergeDigits.length - 1))));
    }

    const sumStr = letterSum.toString();
    letterSum = Math.trunc(Number(sumStr.substring(sumStr.length - 3)));
    const quotient = Math.trunc(Number(letterSum / 34));
    const residue = Number(letterSum % 34);

    const anexx2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P',
      'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    RFC = RFC + anexx2[quotient] + anexx2[residue];

    const anexx3 = {
      cero: '00',
      one: '01',
      two: '02',
      three: '03',
      four: '04',
      five: '05',
      six: '06',
      seven: '07',
      eight: '08',
      nine: '09',
      A: '10',
      B: '11',
      C: '12',
      D: '13',
      E: '14',
      F: '15',
      G: '16',
      H: '17',
      I: '18',
      J: '19',
      K: '20',
      L: '21',
      M: '22',
      N: '23',
      AMP: '24',
      O: '25',
      P: '26',
      Q: '27',
      R: '28',
      S: '29',
      T: '30',
      U: '31',
      V: '32',
      W: '33',
      X: '34',
      Y: '35',
      Z: '36',
      BLANCO: '37',
      Ñ: '38'
    };

    // Calculate verified digit

    let factor = 13;
    let result = 0;

    for (let x = 0; x < RFC.length; x++) {

      let letter = RFC.charAt(x);
      let value = '';

      if (letter === '0') {

        letter = 'cero';
      } else if (letter === '1') {

        letter = 'one';
      } else if (letter === '2') {

        letter = 'two';
      } else if (letter === '3') {

        letter = 'three';
      } else if (letter === '4') {

        letter = 'four';
      } else if (letter === '5') {

        letter = 'five';
      } else if (letter === '6') {

        letter = 'six';
      } else if (letter === '7') {

        letter = 'seven';
      } else if (letter === '8') {

        letter = 'eight';
      } else if (letter === '9') {

        letter = 'nine';
      } else if (letter === '&') {

        letter = 'AMP';
      } else if (letter === ' ') {

        letter = 'BLANCO';
      }

      // if (typeof ((window as any).eval('anexx3.' + letter)) === 'undefined') {
      if (typeof (anexx3[letter]) === 'undefined') {
        // if (anexx3[letter] === undefined) {

        value = '00';
      } else {

        // value = (window as any).eval('anexx3.' + letter);
        value = anexx3[letter];
      }

      if (typeof (value) !== 'undefined') {
        // if (value !== undefined) {

        // console.log('value: ', value);

        result = result + (Number(value) * factor);
        factor--;
      }
    }

    // var quotient2 = parseInt(result/11);
    // console.log('result: ', result);
    const residue2 = Number(result % 11);
    // console.log('residue2: ', residue2);

    if (residue2 === 0) {

      RFC = RFC + '0';
    } else if (residue2 > 0 && residue2 !== 10) {

      // factor 11
      RFC = RFC + (11 - residue2);
    } else if (residue2 === 10) {

      RFC = RFC + 'A';
    }

    return RFC;
  }

  return null;
}

