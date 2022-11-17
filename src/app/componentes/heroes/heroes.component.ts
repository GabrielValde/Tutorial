import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { Heroes } from 'src/app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  Heroes= Heroes
  Heroe_Seleccionado?:Hero
  onSelect(Seleccionado:Hero){
    this.Heroe_Seleccionado=Seleccionado
  }
  constructor() { }

  ngOnInit(): void {
  }

}
