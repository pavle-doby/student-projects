import { TestBed, inject } from '@angular/core/testing';

import { GeneratorFolderaService } from './generator-foldera.service';

describe('GeneratorFolderaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneratorFolderaService]
    });
  });

  it('should be created', inject([GeneratorFolderaService], (service: GeneratorFolderaService) => {
    expect(service).toBeTruthy();
  }));
});
