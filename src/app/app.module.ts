import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {PeopleService} from '../services/people.service';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CreatePeopleComponent } from './view/create-people/create-people.component';
import { AuthService } from 'src/services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { ListPeopleComponent } from './view/list-people/list-people.component';
import { NavBarComponent } from './view/nav-bar/nav-bar.component';
import { HomeComponent } from './view/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatePeopleComponent,
    ListPeopleComponent,
    NavBarComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [RouterModule],
  providers: [PeopleService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
