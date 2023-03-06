import { TestBed } from '@angular/core/testing';

import { LegoService } from './lego.service';

describe('LegoService', () => {
  let service: LegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
