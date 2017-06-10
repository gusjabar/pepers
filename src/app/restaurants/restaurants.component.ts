import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  cuisines;
  restaurants;


  constructor(private db: AngularFireDatabase) {

  }
  ngOnInit() {
    this.cuisines = this.db.list('/cuisines');
    this.restaurants = this.db.list('/restaurants');
    //this.restaurant = this.db.object('/restaurant');
    console.log(this.restaurants);
  }

}
