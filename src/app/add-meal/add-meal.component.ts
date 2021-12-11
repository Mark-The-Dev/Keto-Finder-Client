import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RestaurantItem} from '../models/RestaurantBundleDTO';
import {RestaurantService} from '../service/restaurant.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {

  mealForm: FormGroup;
  newMeal: RestaurantItem;

  @Input() restaurantId: string;
  @Output() newMealAdd = new EventEmitter<RestaurantItem>();

  constructor(
    private formBuilder: FormBuilder,
    private restaurantService: RestaurantService
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  // Simple form set up with required fields
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
    this.newMeal = this.mealForm.value; // Set Request Object based on form data
    this.addNewMeal(this.newMeal); // POST request
    this.emitNewMealToView(this.newMeal); // output event to parent view
    this.mealForm.reset(); // reset form
  }

  private addNewMeal(newMeal: RestaurantItem): void {
    this.restaurantService.addRestaurantMeal(newMeal, this.restaurantId);
  }

  private emitNewMealToView(newMeal: RestaurantItem): void {
    this.newMealAdd.emit(newMeal);
  }

}
