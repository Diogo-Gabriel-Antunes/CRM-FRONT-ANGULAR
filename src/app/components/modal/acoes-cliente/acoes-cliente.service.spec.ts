import { TestBed } from '@angular/core/testing';

import { AcoesClienteService } from './acoes-cliente.service';

describe('AcoesClienteService', () => {
  let service: AcoesClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcoesClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
