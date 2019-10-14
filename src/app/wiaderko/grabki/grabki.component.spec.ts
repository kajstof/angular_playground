import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabkiComponent } from './grabki.component';

describe('GrabkiComponent', () => {
  let component: GrabkiComponent;
  let fixture: ComponentFixture<GrabkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrabkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
