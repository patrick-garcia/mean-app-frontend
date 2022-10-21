import { TestBed } from '@angular/core/testing';

import { FormatValueService } from './format-value.service';

describe('FormatValueService', () => {
  let service: FormatValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
