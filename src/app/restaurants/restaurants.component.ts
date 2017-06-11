import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from "@angular/router";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  cuisines;
  restaurants;


  constructor(private db: AngularFireDatabase
    , private router: Router) {

  }
  ngOnInit() {
    this.cuisines = this.db.list('/cuisines');
    this.restaurants = this.db.list('/restaurants');
    //this.restaurant = this.db.object('/restaurant');
    console.log(this.restaurants);
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
