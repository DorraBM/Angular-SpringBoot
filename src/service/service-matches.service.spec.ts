import { TestBed } from '@angular/core/testing';

import { ServiceMatchesService } from './service-matches.service';

describe('ServiceMatchesService', () => {
  let service: ServiceMatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
