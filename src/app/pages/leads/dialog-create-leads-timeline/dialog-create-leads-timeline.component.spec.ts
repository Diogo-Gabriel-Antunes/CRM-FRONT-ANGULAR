import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateLeadsTimelineComponent } from './dialog-create-leads-timeline.component';

describe('DialogCreateLeadsTimelineComponent', () => {
  let component: DialogCreateLeadsTimelineComponent;
  let fixture: ComponentFixture<DialogCreateLeadsTimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCreateLeadsTimelineComponent]
    });
    fixture = TestBed.createComponent(DialogCreateLeadsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
