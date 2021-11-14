import {Component, Input, OnInit} from '@angular/core';
import {RestaurantItem} from '../models/RestaurantBundleDTO';

@Component({
  selector: 'app-meal-card-list',
  templateUrl: './meal-card-list.component.html',
  styleUrls: ['./meal-card-list.component.css']
})
export class MealCardListComponent implements OnInit {
  @Input() restaurantMeals: RestaurantItem[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.restaurantMeals);
  }

}
