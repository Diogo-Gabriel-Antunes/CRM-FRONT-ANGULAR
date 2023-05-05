import { TestBed } from '@angular/core/testing';

import { GeralServiceService } from './geral-service.service';

describe('GeralServiceService', () => {
  let service: GeralServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeralServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
