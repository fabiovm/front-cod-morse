import { TestBed } from '@angular/core/testing';

import { MorseService } from './morse.service';

describe('MorseService', () => {
  let service: MorseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MorseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
