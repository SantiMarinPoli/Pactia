import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatePeopleComponent } from './view/create-people/create-people.component';

const routes: Routes = [
  { path: 'personas', component: AppComponent },
  { path: 'crear-persona', component: CreatePeopleComponent },
  { path: '', redirectTo: '/personas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
