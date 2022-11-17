import { Component, OnInit,Input } from '@angular/core';
import { Hero } from 'src/app/hero';
@Component({
  selector: 'app-heroes-detalles',
  templateUrl: './heroes-detalles.component.html',
  styleUrls: ['./heroes-detalles.component.css']
})
export class HeroesDetallesComponent implements OnInit {
  @Input() Heroe?:Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
