import { TestBed } from '@angular/core/testing';

import { AuthourService } from './authour.service';

describe('AuthourService', () => {
  let service: AuthourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
