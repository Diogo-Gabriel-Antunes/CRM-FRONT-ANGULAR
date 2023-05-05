import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunidadeComponent } from './oportunidade.component';

describe('OportunidadeComponent', () => {
  let component: OportunidadeComponent;
  let fixture: ComponentFixture<OportunidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OportunidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OportunidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
