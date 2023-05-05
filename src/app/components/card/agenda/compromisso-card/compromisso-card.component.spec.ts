import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromissoCardComponent } from './compromisso-card.component';

describe('CompromissoCardComponent', () => {
  let component: CompromissoCardComponent;
  let fixture: ComponentFixture<CompromissoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompromissoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompromissoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
