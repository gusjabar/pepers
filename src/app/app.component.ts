import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Welcome to Peper\'s restaurant!';
  cuisines;
  restaurant;


  constructor(private db: AngularFireDatabase) {

  }
  ngOnInit() {
    this.cuisines = this.db.list('/cuisines');
    this.restaurant = this.db.object('/restaurant');
  }

}
