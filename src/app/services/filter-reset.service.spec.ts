import { TestBed } from '@angular/core/testing';

import { FilterResetService } from './filter-reset.service';

describe('FilterResetService', () => {
  let service: FilterResetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterResetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
