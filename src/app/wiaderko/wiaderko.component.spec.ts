import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiaderkoComponent } from './wiaderko.component';

describe('WiaderkoComponent', () => {
  let component: WiaderkoComponent;
  let fixture: ComponentFixture<WiaderkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiaderkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiaderkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
