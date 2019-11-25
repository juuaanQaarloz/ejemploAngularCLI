import {calculateAge, calculateRFC} from './calculate';

describe('CalculateService', () => {

  beforeEach(() => {
  });

  it('should return the age given the birth date', () => {
    const birthDate = '1993/01/06';

    expect(calculateAge(birthDate)).toBe(26);
  });

  it('should return the RFC given the parameters', () => {
    const name = 'ODALYS';
    const lastFatherName = 'MARRON';
    const lastMotherName = 'SANCHEZ';
    const birthDate = '06/01/1993';
    const RFC = calculateRFC(lastFatherName, lastMotherName, name, birthDate);
    // // console.log('RFC: ', RFC);
    expect(RFC).toBe('MASO930106PD7');
    // expect(RFC).toBe('PEVS940713V11');
    // expect(RFC).toBe('MASJ671008PV4');
    // expect(RFC).toBe('MASM950101UAA');
  });
});
