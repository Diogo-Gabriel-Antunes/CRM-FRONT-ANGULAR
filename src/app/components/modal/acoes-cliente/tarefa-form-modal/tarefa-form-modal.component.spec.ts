import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaFormModalComponent } from './tarefa-form-modal.component';

describe('TarefaFormModalComponent', () => {
  let component: TarefaFormModalComponent;
  let fixture: ComponentFixture<TarefaFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefaFormModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefaFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
