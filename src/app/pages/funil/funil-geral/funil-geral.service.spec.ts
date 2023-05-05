import { TestBed } from '@angular/core/testing';

import { FunilGeralService } from './funil-geral.service';

describe('FunilGeralService', () => {
  let service: FunilGeralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunilGeralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
