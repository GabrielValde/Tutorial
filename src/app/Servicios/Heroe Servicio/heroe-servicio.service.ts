import { Injectable } from '@angular/core';
import { Heroes } from 'src/app/mock-heroes';
import { Hero } from 'src/app/hero';
import {Observable,of,catchError,map,tap} from 'rxjs'
import { MensajesService } from '../Mensajes/mensajes.service';
import { HttpClient,HttpHandler } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroeServicioService {
  private url="api/heroes";
  getHeroes(): Observable<Hero[]>{
    return this.https.get<Hero[]>(this.url).pipe(
      //catchError(this.handleError<Hero[]>('getHeroes',[]))
    );
  }
  constructor(private Mensajes:MensajesService, private https:HttpClient) { }
  private log(mensaje:string){
    this.Mensajes.add("HeroService: " + mensaje )
  }
  private handleError<T>(operation='operation',result?:T){
    
  }
}
