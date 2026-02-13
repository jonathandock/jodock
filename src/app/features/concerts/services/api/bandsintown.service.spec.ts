import { TestBed } from '@angular/core/testing';

import { BandsInTownService } from './bandsintown.service';

describe('Bandsintown', () => {
  let service: BandsInTownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandsInTownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
