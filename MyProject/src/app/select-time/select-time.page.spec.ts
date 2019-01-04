import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTimePage } from './select-time.page';

describe('SelectTimePage', () => {
  let component: SelectTimePage;
  let fixture: ComponentFixture<SelectTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
