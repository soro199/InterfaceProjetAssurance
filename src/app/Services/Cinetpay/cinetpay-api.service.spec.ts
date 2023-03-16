import { TestBed } from '@angular/core/testing';

import { CinetpayApiService } from './cinetpay-api.service';

describe('CinetpayApiService', () => {
  let service: CinetpayApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinetpayApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
