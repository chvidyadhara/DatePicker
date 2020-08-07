import { TestBed } from '@angular/core/testing';

import { DateserService } from './dateser.service';

describe('DateserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateserService = TestBed.get(DateserService);
    expect(service).toBeTruthy();
  });
});
