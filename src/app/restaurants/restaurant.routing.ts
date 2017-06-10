import { Router, RouterModule } from '@angular/router';

import { RestaurantsComponent } from './restaurants.component';
import { RestaurantFormComponent } from './restaurant-form.component';

export const RestaurantRouting = RouterModule.forChild([
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'restaurants/new', component: RestaurantFormComponent },
    { path: 'restaurants/edit/:id', component: RestaurantFormComponent },

])