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
    this.addNewMeal(this.newMeal);
    this.emitNewMealToView(this.newMeal);

    // reset form
    this.mealForm.reset();
  }

  private addNewMeal(newMeal: RestaurantItem): void {
    this.restaurantService.addRestaurantMeal(newMeal, this.restaurantId);
  }

  private emitNewMealToView(newMeal: RestaurantItem): void {
    this.newMealAdd.emit(newMeal);
  }

}
