import { TestBed } from '@angular/core/testing';

import { AdminAuthorsService } from './admin-authors.service';

describe('AdminAuthorsService', () => {
  let service: AdminAuthorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuthorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
