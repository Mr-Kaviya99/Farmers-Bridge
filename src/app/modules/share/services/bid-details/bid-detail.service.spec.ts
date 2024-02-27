import { TestBed } from '@angular/core/testing';

import { BidDetailService } from './bid-detail.service';

describe('BidDetailService', () => {
  let service: BidDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
