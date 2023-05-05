import { TestBed } from '@angular/core/testing';

import { TarefasGeralService } from './tarefas-geral.service';

describe('TarefasGeralService', () => {
  let service: TarefasGeralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefasGeralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
