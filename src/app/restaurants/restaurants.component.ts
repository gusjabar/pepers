import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  //cuisines;
  restaurants: Observable<any>;


  constructor(private db: AngularFireDatabase
    , private router: Router) {

  }
  ngOnInit() {
    //this.cuisines = this.db.list('/cuisines');

    this.restaurants = this.db.list('/restaurants/'
    // , {
    //   query: {
    //     orderByChild: 'cusine',
    //     equalTo: 4
    //   }
    // }
    )
      .map(restaurants => {
        restaurants.map(restaurant => {
          restaurant.cusineType = this.db.object('cuisines/' + restaurant.cusine);
          return restaurant;
        });
        return restaurants;
      });
    //this.restaurant = this.db.object('/restaurant');

  }
  Edit(restaurant) {
    console.log('Edit')
    this.router.navigate(['restaurants/edit/' + restaurant.$key])
  }
  Remove(restaurant) {
    this.db.object('/restaurants/' + restaurant.$key)
      .remove()
      .then(x => console.log('Delete success: ', x))
      .catch(e => console.log(e));
  }

}
