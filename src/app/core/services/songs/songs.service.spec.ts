import { TestBed } from '@angular/core/testing';

import { WheatherService } from './songs.service';

describe('WheatherService', () => {
  let service: WheatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
