import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestaurantBundleDTO, RestaurantItem} from '../models/RestaurantBundleDTO';
import {RestaurantService} from '../service/restaurant.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.css']
})
export class RestaurantViewComponent implements OnInit {

  restaurantInfo: RestaurantBundleDTO;
  restaurantId: string;

  constructor(
    public restaurantService: RestaurantService,
  ) {
  }

  ngOnInit(): void {
    if (history.state.restaurant) {
      this.restaurantInfo = history.state.restaurant;
      localStorage.setItem('restaurantId', history.state.restaurant.restaurantId);

    } else {
      this.renderMeals();
    }
  }

  public renderMeals(): void {
    this.restaurantId = localStorage.getItem('restaurantId') || '1';
    this.restaurantService.getRestaurantById(this.restaurantId).pipe(take(1))
      .subscribe(result => this.restaurantInfo = result);
  }

  public addNewMealToList(addedMeal: RestaurantItem): void {
    this.restaurantInfo.restaurantItems.push(addedMeal);
  }
}
