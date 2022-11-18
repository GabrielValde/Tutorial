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
  
  onSelect(Seleccionado:Hero){
    this.Heroe_Seleccionado=Seleccionado;
    this.Mensajes.add("Componente de heroe: Heroe seleccionado id=" + this.Heroe_Seleccionado.id)
  }
  constructor(private Servicio:HeroeServicioService, private Mensajes:MensajesService) { 

  }

  ngOnInit(): void {
    this.get_heroes();
  }

}
