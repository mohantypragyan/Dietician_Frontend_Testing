import { TestBed } from '@angular/core/testing';

import { ViewtestreportsService } from './viewtestreports.service';

describe('ViewtestreportsService', () => {
  let service: ViewtestreportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewtestreportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
