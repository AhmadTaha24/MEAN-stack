import { TestBed } from '@angular/core/testing';

import { CaregoriesService } from './caregories.service';

describe('CaregoriesService', () => {
  let service: CaregoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaregoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
