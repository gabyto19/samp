import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartGameComponent } from './start-game/start-game.component';
const routes: Routes = [ 
  { path: '', component: HomeComponent }, // default route
  { path: 'home', component: HomeComponent },
  { path: 'start-game', component: StartGameComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
