import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatePeopleComponent } from './view/create-people/create-people.component';
import { ListPeopleComponent } from './view/list-people/list-people.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  { path: 'personas', component: ListPeopleComponent },
  { path: 'home', component: HomeComponent },
  { path: 'crear-persona', component: CreatePeopleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
