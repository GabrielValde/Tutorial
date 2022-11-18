import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Hero } from './hero';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes=[
      {id:11, name:"Batman"},
    {id:12, name:"Iron Man"},
    {id:13, name:"Capitan America"},
    {id:14, name:"Wolwerine"},
    {id:15, name:"Hombre Hormiga"},
    {id:16, name:"Spider Man"},
    {id:17, name:"Wanda"},
    {id:18, name:"Dr Strange"},
    {id:19, name:"Thor"},
    {id:20, name:"Linterna Verde"},
    ]
    return {heroes}
  }
    
  constructor() { }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => Number(hero.id))) + 1 : 11;
  }
}
