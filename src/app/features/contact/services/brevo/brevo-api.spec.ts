import { TestBed } from '@angular/core/testing';

import { BrevoApi } from './brevo-api';

describe('BrevoApi', () => {
  let service: BrevoApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrevoApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
