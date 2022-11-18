import { Injectable } from '@angular/core';
import { Heroes } from 'src/app/mock-heroes';
import { Hero } from 'src/app/hero';
import {Observable,of} from 'rxjs'
import { MensajesService } from '../Mensajes/mensajes.service';
@Injectable({
  providedIn: 'root'
})
export class HeroeServicioService {
  getHeroes(): Observable<Hero[]>{
    const heroes = of(Heroes);
    this.Mensajes.add("Heroes Servicios: Heroes buscados");
    return heroes;
  }
  constructor(private Mensajes:MensajesService) { }
}
