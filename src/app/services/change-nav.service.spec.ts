import { TestBed } from '@angular/core/testing';

import { ChangeNavService } from './change-nav.service';

describe('ChangeNavService', () => {
  let service: ChangeNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
