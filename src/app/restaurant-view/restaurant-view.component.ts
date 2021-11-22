import { Component, OnInit } from '@angular/core';
import {RestaurantBundleDTO} from '../models/RestaurantBundleDTO';
import {RestaurantService} from '../service/restaurant.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.css']
})
export class RestaurantViewComponent implements OnInit {

  restaurantInfo: RestaurantBundleDTO;

  constructor(
    public restaurantService: RestaurantService,
  ) { }

  ngOnInit(): void {
    if ( history.state.restaurant ) {
      this.restaurantInfo = history.state.restaurant;
      localStorage.setItem('restaurantId', history.state.restaurant.restaurantId);

    } else {
      const restaurantId: string = localStorage.getItem('restaurantId') || '1';
      this.restaurantService.getRestaurantById(restaurantId).pipe(take(1))
        .subscribe( result => this.restaurantInfo = result);
    }
  }
}
