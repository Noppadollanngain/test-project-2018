import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRoomPage } from './book-room.page';

describe('BookRoomPage', () => {
  let component: BookRoomPage;
  let fixture: ComponentFixture<BookRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
