import { TestBed } from '@angular/core/testing';

import { OmapsService } from './omaps.service';

describe('OmapsService', () => {
  let service: OmapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
