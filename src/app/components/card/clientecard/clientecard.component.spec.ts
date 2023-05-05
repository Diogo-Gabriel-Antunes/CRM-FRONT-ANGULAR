import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientecardComponent } from './clientecard.component';

describe('ClientecardComponent', () => {
  let component: ClientecardComponent;
  let fixture: ComponentFixture<ClientecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
