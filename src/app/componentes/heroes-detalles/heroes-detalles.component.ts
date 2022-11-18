import { Component, OnInit,Input } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroeServicioService } from 'src/app/Servicios/Heroe Servicio/heroe-servicio.service';
import {Location} from '@angular/common'
import {ActivatedRoute} from '@angular/router'
import { observable, Observable } from 'rxjs';
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

  Btn_Actualizar:string="Actualizar";
  Actualizar():void{
    if (this.Heroe){
      this.Servicio.Actualizar_heroe(this.Heroe).subscribe(()=> this.Atras());
    }
  }

  get_hero():void{
    const id = Number(this.route.snapshot.paramMap.get("id"));
    /*
    this.Servicio.getHeroes().subscribe(heroe => this.Heroe= heroe.find(Hero =>{
      return Hero.id==id;
    }))
    */
    this.Servicio.getHero(id).subscribe(heroe => this.Heroe= heroe)
    console.log(id)
  }
}
