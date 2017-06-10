
import { Routes, RouterModule } from '@angular/router';


import { NotFoundComponent } from './notfound.component';
import { HomeComponent } from './home.component';


export const Routing = RouterModule.forRoot([
    { path: '', redirectTo: 'home', pathMatch: 'full' },   
    { path: 'home', component: HomeComponent },
    { path: '**', component: NotFoundComponent }
])