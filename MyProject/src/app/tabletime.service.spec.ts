import { TestBed } from '@angular/core/testing';

import { TabletimeService } from './tabletime.service';

describe('TabletimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabletimeService = TestBed.get(TabletimeService);
    expect(service).toBeTruthy();
  });
});
