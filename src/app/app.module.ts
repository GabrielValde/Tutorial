import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroesDetallesComponent } from './componentes/heroes-detalles/heroes-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesDetallesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
