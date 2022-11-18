import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroeServicioService } from 'src/app/Servicios/Heroe Servicio/heroe-servicio.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Heroes:Hero[]=[];
  constructor(private Heroes_Servicio:HeroeServicioService) { }

  get_heroes():void{
    this.Heroes_Servicio.getHeroes().subscribe(heroes=> this.Heroes = heroes.slice(1,5));
  }
  ngOnInit(): void {
    this.get_heroes();
  }

}
