import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLeadComponent } from './dialog-lead.component';

describe('DialogLeadComponent', () => {
  let component: DialogLeadComponent;
  let fixture: ComponentFixture<DialogLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogLeadComponent]
    });
    fixture = TestBed.createComponent(DialogLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
