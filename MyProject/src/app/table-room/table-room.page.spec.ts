import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRoomPage } from './table-room.page';

describe('TableRoomPage', () => {
  let component: TableRoomPage;
  let fixture: ComponentFixture<TableRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
