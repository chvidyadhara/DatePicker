import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepComponent } from './datep.component';

describe('DatepComponent', () => {
  let component: DatepComponent;
  let fixture: ComponentFixture<DatepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
