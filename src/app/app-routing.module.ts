import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HeroesComponent } from './componentes/heroes/heroes.component';

const routes:Routes=[
  {path:"Heroes", component:HeroesComponent}

]

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
