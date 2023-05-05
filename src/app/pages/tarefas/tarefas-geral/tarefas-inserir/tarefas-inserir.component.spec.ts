import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasInserirComponent } from './tarefas-inserir.component';

describe('TarefasInserirComponent', () => {
  let component: TarefasInserirComponent;
  let fixture: ComponentFixture<TarefasInserirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefasInserirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefasInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
