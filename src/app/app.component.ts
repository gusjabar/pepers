import { Component, OnInit, OnDestroy } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription;
  title = 'Welcome to Peper\'s restourant!';
  cuisines = ['c1', 'c2', 'c3']


  constructor(private db: AngularFireDatabase) {

  }
  ngOnInit() {
    this.subscription = this.db.list('/cuisines').subscribe(x => {
      this.cuisines = x;
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
