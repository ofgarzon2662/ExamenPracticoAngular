/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PantaService } from './planta.service';

describe('Service: Panta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PantaService]
    });
  });

  it('should ...', inject([PantaService], (service: PantaService) => {
    expect(service).toBeTruthy();
  }));
});
