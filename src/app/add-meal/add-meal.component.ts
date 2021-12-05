import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RestaurantItem} from '../models/RestaurantBundleDTO';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {

  mealForm: FormGroup;
  newMeal: RestaurantItem;

  @Input() restaurantId: string;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.mealForm = this.formBuilder.group({
      mealName: ['', Validators.required],
      mealDescription: ['', Validators.required],
      calories: ['', Validators.required],
      proteinValue: ['', Validators.required],
      fatValue: ['', Validators.required],
      carbValue: ['', Validators.required],
      netCarbValue: ['', Validators.required],
    });
  }

  public mealSubmit(): void {
    this.newMeal = this.mealForm.value;
    console.log(this.newMeal);

    // TODO: add post here

    // reset form
    this.mealForm.reset();
  }

}
