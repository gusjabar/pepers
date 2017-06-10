import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from 'rxjs/observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {
  form: FormGroup;
  restaurants: FirebaseListObservable<any[]>;

  constructor(
    private fb: FormBuilder
    , private router: Router
    , private af: AngularFireDatabase) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required]
    });
    this.restaurants = this.af.list('/restaurants');
  }
  onSubmit() {
    console.log('submit restaurant', this.form.value.name);
    this.restaurants.push({
      name: this.form.value.name
    });
    this.form.reset();
  }
}
