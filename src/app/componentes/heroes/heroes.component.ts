import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroeServicioService } from 'src/app/Servicios/Heroe Servicio/heroe-servicio.service';
import { MensajesService } from 'src/app/Servicios/Mensajes/mensajes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  Heroes:Hero[]= [];
  Heroe_Seleccionado?:Hero
  get_heroes():void{
    this.Servicio.getHeroes().subscribe(heroes => this.Heroes = heroes);
  }
  
  constructor(private Servicio:HeroeServicioService, private Mensajes:MensajesService) { 

  }
  Agregar_Heroe(Nombre:string):void{
    Nombre= Nombre.trim();
    if (!Nombre){return;}
    this.Servicio.Agregar_heroe({ name:Nombre } as Hero  ).subscribe(HeroeAgregado =>{
      this.Heroes.push(HeroeAgregado);
    })

  }

  Borrar_heroe(heroe:Hero){
      this.Heroes= this.Heroes.filter(h => h!== heroe);
      this.Servicio.Borrar_heroe(Number(heroe.id)).subscribe();
  }
  ngOnInit(): void {
    this.get_heroes();
  }

}
