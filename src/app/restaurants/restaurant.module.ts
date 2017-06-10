import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule }                  from '@angular/forms'

import { RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants.component';
import { RestaurantFormComponent } from './restaurant-form.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule],
    exports: [
        RestaurantsComponent,
        RestaurantFormComponent
    ],
    declarations: [
        RestaurantsComponent,
        RestaurantFormComponent
    ],
    providers: [],
})
export class RestaurantModule { }
