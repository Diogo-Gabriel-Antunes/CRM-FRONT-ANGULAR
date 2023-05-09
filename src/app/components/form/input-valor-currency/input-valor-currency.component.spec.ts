import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValorCurrencyComponent } from './input-valor-currency.component';

describe('InputValorCurrencyComponent', () => {
  let component: InputValorCurrencyComponent;
  let fixture: ComponentFixture<InputValorCurrencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputValorCurrencyComponent]
    });
    fixture = TestBed.createComponent(InputValorCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
