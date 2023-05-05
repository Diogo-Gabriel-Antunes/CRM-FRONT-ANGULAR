import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGeraCompromissoComponent } from './modal-gera-compromisso.component';

describe('ModalGeraCompromissoComponent', () => {
  let component: ModalGeraCompromissoComponent;
  let fixture: ComponentFixture<ModalGeraCompromissoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGeraCompromissoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGeraCompromissoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
