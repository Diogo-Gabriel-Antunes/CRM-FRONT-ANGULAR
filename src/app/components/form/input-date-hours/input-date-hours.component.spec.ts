import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDateHoursComponent } from './input-date-hours.component';

describe('InputDateHoursComponent', () => {
  let component: InputDateHoursComponent;
  let fixture: ComponentFixture<InputDateHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDateHoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDateHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
