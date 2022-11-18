import { Component, OnInit,Input } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroeServicioService } from 'src/app/Servicios/Heroe Servicio/heroe-servicio.service';
import {Location} from '@angular/common'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-heroes-detalles',
  templateUrl: './heroes-detalles.component.html',
  styleUrls: ['./heroes-detalles.component.css']
})
export class HeroesDetallesComponent implements OnInit {
  Heroe?:Hero;
  constructor(private Servicio:HeroeServicioService, private route:ActivatedRoute, private location:Location) { }
  ngOnInit(): void {
      this.get_hero();
  }
  Atras(){
    this.location.back();
  }
  get_hero():void{
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.Servicio.getHeroes().subscribe(heroe => this.Heroe= heroe.find(Hero =>{
      return Hero.id==id;
    }))
    console.log(id)
  }
}
