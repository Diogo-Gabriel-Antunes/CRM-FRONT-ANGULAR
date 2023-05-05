import { TestBed } from '@angular/core/testing';

import { CampanhaGeralService } from './campanha-geral.service';

describe('CampanhaGeralService', () => {
  let service: CampanhaGeralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampanhaGeralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
