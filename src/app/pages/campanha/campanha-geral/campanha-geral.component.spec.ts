import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaGeralComponent } from './campanha-geral.component';

describe('CampanhaGeralComponent', () => {
  let component: CampanhaGeralComponent;
  let fixture: ComponentFixture<CampanhaGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampanhaGeralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampanhaGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
