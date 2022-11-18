import { Injectable } from '@angular/core';
import { Heroes } from 'src/app/mock-heroes';
import { Hero } from 'src/app/hero';
import {Observable,of,catchError,map,tap} from 'rxjs'
import { MensajesService } from '../Mensajes/mensajes.service';
import { HttpClient,HttpHandler, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroeServicioService {
  private url="api/heroes";

  httpOptions={ headers: new HttpHeaders({'Content-Type':'application/json'})};
  

  getHeroes(): Observable<Hero[]>{
    return this.https.get<Hero[]>(this.url).pipe(
      tap(_ => this.log('Heroes buscados')),
      catchError(this.handleError<Hero[]>('getHeroes',[]))
    );
  }

  Actualizar_heroe(Heroe:Hero):Observable<any>{
    return this.https.put(this.url,Heroe,this.httpOptions).pipe(
      tap(_ => this.log('Heroe actualizado: ID ' + Heroe.id)),
      catchError(this.handleError<any>('Actualizacion'))
    )
  }

  Borrar_heroe(ID:number):Observable<Hero>{
    const UrlFinal= `${this.url}/${ID}`;
    return this.https.delete<Hero>(UrlFinal,this.httpOptions).pipe(
      tap(_ => this.log(`Heroe borrado ID: ${ID}`)),
      catchError(this.handleError<Hero>("Borrar Heroe:"))
    )
  }
  Agregar_heroe(Heroe:Hero):Observable<Hero>{
    return this.https.post<Hero>(this.url,Heroe,this.httpOptions).pipe(
      tap((Nuevo_Heroe:Hero) => this.log("Heroe agregado w/ ID= " + Nuevo_Heroe.id),
      catchError(this.handleError<Hero>("Agregar Heroe"))
      )
    )

  }
  getHero(id:number):Observable<Hero>{
    const urlfinal= this.url + "/" + id;
    return this.https.get<Hero>(urlfinal).pipe(
      tap(_ => this.log("Hero buscado por ID" + id)),
      catchError(this.handleError<Hero>("Obtener heroe ID: " +id))
    ) 
  }
  
  constructor(private Mensajes:MensajesService, private https:HttpClient) { }
  
  private log(mensaje:string){
    this.Mensajes.add( "HeroService: " + mensaje )
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */

  private handleError<T>(operation='operation',result?:T){
    return (error:any):Observable<T> =>{
        console.error(error);

        this.log(operation+' fallido: ' + error.message);

        return of(result as T);
    }
    
  }
}
