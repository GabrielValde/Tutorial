import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeroesDetallesComponent } from './componentes/heroes-detalles/heroes-detalles.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';

const routes:Routes=[
  {path:"Heroes", component:HeroesComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"", redirectTo:'/dashboard',pathMatch:'full'},
  {path:"Detalles/:id",component:HeroesDetallesComponent}
]

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
