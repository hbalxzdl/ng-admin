import { TestBed } from '@angular/core/testing';

import { CanDeactivatService } from './can-deactivat.service';

describe('CanDeactivatService', () => {
  let service: CanDeactivatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanDeactivatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
