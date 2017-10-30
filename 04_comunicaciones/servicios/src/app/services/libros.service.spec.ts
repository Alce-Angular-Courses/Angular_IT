import { TestBed, inject } from '@angular/core/testing';

import { LibrosService } from './libros.service';

describe('LibrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibrosService]
    });
  });

  it('should be created', inject([LibrosService], (service: LibrosService) => {
    expect(service).toBeTruthy();
  }));
});
