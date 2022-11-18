import { TestBed } from '@angular/core/testing';

import { HeroeServicioService } from './heroe-servicio.service';

describe('HeroeServicioService', () => {
  let service: HeroeServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroeServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
