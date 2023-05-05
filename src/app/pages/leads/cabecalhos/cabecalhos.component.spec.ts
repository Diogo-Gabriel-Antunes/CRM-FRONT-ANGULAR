import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhosComponent } from './cabecalhos.component';

describe('CabecalhosComponent', () => {
  let component: CabecalhosComponent;
  let fixture: ComponentFixture<CabecalhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecalhosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
