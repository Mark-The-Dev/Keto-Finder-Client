import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RestaurantBundleDTO} from '../models/RestaurantBundleDTO';

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.css']
})
export class RestaurantViewComponent implements OnInit {

  restaurantInfo: RestaurantBundleDTO;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.restaurantInfo = history.state.restaurant;
    console.log(this.restaurantInfo);
  }

}
