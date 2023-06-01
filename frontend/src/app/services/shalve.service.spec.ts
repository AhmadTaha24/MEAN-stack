import { TestBed } from '@angular/core/testing';

import { ShalveService } from './shalve.service';

describe('ShalveService', () => {
  let service: ShalveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShalveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
