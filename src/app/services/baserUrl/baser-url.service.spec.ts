import { TestBed } from '@angular/core/testing';

import { BaserUrlService } from './baser-url.service';

describe('BaserUrlService', () => {
  let service: BaserUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaserUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
