import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from 'rxjs/observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {
  title;
  current;
  form: FormGroup;
  restaurants: FirebaseListObservable<any[]>;

  constructor(
    private fb: FormBuilder
    , private router: Router
    , private route: ActivatedRoute
    , private af: AngularFireDatabase) {

  }

  ngOnInit() {
    let id;
    this.route.params.subscribe(r => {
      console.log(r['id']);
      id = r['id'];
    });

    this.title = id ? 'Edit restaurant' : 'New restaurant';

    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required]
    });
    this.restaurants = this.af.list('/restaurants');

    if (id)
      this.Edit(id);
  }


  onSubmit() {

    if (this.form.value.id) {
      this.af
        .object('/restaurants/' + this.form.value.id)
        .update({ name: this.form.value.name });
    } else {
      this.restaurants
        .push({ name: this.form.value.name });
    }
    this.ResetForm();
  }

  Edit(id) {
    let restaurant;
    this.af
      .object('restaurants/' + id)
      .subscribe(s => {
        this.form.patchValue({
          id: s.$key,
          name: s.name
        });
        this.current = s.name;
      });
  }

  ResetForm() {
    this.form.reset();
    this.current = '';
    this.title = 'New restaurant';
  }

}
