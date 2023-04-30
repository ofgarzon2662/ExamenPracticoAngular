/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantaService } from './planta.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';


describe('Service: Panta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [PlantaService]
    });
  });

  it('should ...', inject([PlantaService], (service: PlantaService) => {
    expect(service).toBeTruthy();
  }));
});
