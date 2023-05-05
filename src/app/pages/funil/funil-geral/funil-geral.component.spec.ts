import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunilGeralComponent } from './funil-geral.component';

describe('FunilGeralComponent', () => {
  let component: FunilGeralComponent;
  let fixture: ComponentFixture<FunilGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunilGeralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunilGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
