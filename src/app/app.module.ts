import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroesDetallesComponent } from './componentes/heroes-detalles/heroes-detalles.component';
import { MensajeComponent } from './componentes/mensaje/mensaje.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesDetallesComponent,
    MensajeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
