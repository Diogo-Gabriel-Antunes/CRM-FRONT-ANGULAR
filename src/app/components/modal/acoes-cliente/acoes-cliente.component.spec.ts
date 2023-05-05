import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesClienteComponent } from './acoes-cliente.component';

describe('AcoesClienteComponent', () => {
  let component: AcoesClienteComponent;
  let fixture: ComponentFixture<AcoesClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcoesClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcoesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
