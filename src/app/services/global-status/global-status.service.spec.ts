import { TestBed, inject } from '@angular/core/testing';

import { GlobalStatusService } from './global-status.service';

describe('GlobalStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalStatusService]
    });
  });

  it('should be created', inject([GlobalStatusService], (service: GlobalStatusService) => {
    expect(service).toBeTruthy();
  }));
});
