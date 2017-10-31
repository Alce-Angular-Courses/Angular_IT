import { TestBed, inject } from '@angular/core/testing';

import { GoogleService } from './google.service';

describe('GoogleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleService]
    });
  });

  it('should be created', inject([GoogleService], (service: GoogleService) => {
    expect(service).toBeTruthy();
  }));
});
