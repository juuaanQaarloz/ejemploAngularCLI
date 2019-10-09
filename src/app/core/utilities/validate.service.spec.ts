import { TestBed } from '@angular/core/testing';

import { ValidateService } from './validate.service';

describe('UtilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidateService = TestBed.get(ValidateService);
    expect(service).toBeTruthy();
  });
});
