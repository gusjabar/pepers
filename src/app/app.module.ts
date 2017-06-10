import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RestaurantModule } from './restaurants/restaurant.module'

import { AppComponent } from './app.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2'
import { environment } from '../environments/environment';

import { NavbarComponent } from './navbar.component';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';

import { Routing } from './app.routing';
import { RestaurantRouting } from './restaurants/restaurant.routing';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    RestaurantModule,
    RestaurantRouting,//<--Always should be berfore Routing.
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
