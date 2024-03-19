import { TestBed } from '@angular/core/testing';

import { ReadpatientsService } from './readpatients.service';

describe('ReadpatientsService', () => {
  let service: ReadpatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadpatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
