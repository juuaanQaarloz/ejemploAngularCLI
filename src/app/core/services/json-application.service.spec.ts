import { TestBed } from '@angular/core/testing';

import { JsonApplicationService } from './json-application.service';

describe('JsonApplicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonApplicationService = TestBed.get(JsonApplicationService);
    expect(service).toBeTruthy();
  });
});
