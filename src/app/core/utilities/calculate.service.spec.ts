import { TestBed } from '@angular/core/testing';

import { CalculateService } from './calculate.service';
import {ValidateService} from './validate.service';

describe('CalculateService', () => {

  let calculateService: CalculateService;
  let validateService: ValidateService;
  beforeEach(() => {
    validateService =  new ValidateService();
    calculateService = new CalculateService(validateService);
  });

  it('should return the age given the birth date', () => {
    const birthDate = '1993/01/06';

    expect(calculateService.calculateAge(birthDate)).toBe(26);
  });

  it('should return the RFC given the parameters', () => {
    const name = 'ODALYS';
    const lastFatherName = 'MARRON';
    const lastMotherName = 'SANCHEZ';
    const birthDate = '06/01/1993';
    const RFC = calculateService.calculateRFC(lastFatherName, lastMotherName, name, birthDate);

    expect(RFC).toBe('MASO930106PD7');
  });
});
