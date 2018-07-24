import { TestBed, inject } from '@angular/core/testing';

import { ServicioAlcoholimetroService } from './servicio-alcoholimetro.service';

describe('ServicioAlcoholimetroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioAlcoholimetroService]
    });
  });

  it('should be created', inject([ServicioAlcoholimetroService], (service: ServicioAlcoholimetroService) => {
    expect(service).toBeTruthy();
  }));
});
