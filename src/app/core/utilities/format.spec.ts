import {addSlashesToDate, correctFieldValue, removeAccents, removeFirstBlankSpace, removeWhiteSpaces} from './format';

describe('FormatFuntions', () => {

  beforeEach(() => {
  });

  it('should return the same string with no withe spaces', () => {
    const stringWithSpaces = 'STRING WITH SPACES';
    const result = removeWhiteSpaces(stringWithSpaces);
    expect(result).toBe('STRINGWITHSPACES');
  });

  it('should return the same string with no white spaces at the first of the string', () => {
    const stringSpaceAtTheBeginning = 'string ';
    const result = removeFirstBlankSpace(stringSpaceAtTheBeginning);
    expect(result).toBe('string ');
  });

  it('should return the date with the slashes on it in the format YYYY/MM/DD', () => {
    const year = '1993';
    const yearWithMonth = '1993/01';
    const completeDate = '1993/01/06';

    const resultYear = addSlashesToDate(year);
    const resultYearWithMonth = addSlashesToDate(yearWithMonth);
    const resultCompleteDate = addSlashesToDate(completeDate);

    expect(resultYear).toBe('1993/');
    expect(resultYearWithMonth).toBe('1993/01/');
    expect(resultCompleteDate).toBe('1993/01/06');
  });

  it('should remove the accesnt from the given string', () => {
    const stringWithAccents = 'SÁNCHEZ';
    const result =  removeAccents(stringWithAccents);

    expect(result).toBe('SANCHEZ');
  });

  it('should return the same string with the correct format in upper case, trimmed and with only 1 space between words', () => {
    const field = 'Odalys  marrón SÁNCHEZ ';
    const result = correctFieldValue(field);
    expect(result).toBe('ODALYS MARRON SANCHEZ');
  });
});
