import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunidadesFormModalComponent } from './oportunidades-form-modal.component';

describe('OportunidadesFormModalComponent', () => {
  let component: OportunidadesFormModalComponent;
  let fixture: ComponentFixture<OportunidadesFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OportunidadesFormModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OportunidadesFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
