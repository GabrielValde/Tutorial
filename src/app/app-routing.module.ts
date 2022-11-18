import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';

const routes:Routes=[
  {path:"Heroes", component:HeroesComponent},
  {path:"",component:DashboardComponent}

]

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
