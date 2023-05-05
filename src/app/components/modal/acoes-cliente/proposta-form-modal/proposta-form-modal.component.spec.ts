import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaFormModalComponent } from './proposta-form-modal.component';

describe('PropostaFormModalComponent', () => {
  let component: PropostaFormModalComponent;
  let fixture: ComponentFixture<PropostaFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropostaFormModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropostaFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
