import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../service/restaurant.service';
import {Observable} from 'rxjs';
import {RestaurantBundleDTO} from '../models/RestaurantBundleDTO';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(
    public restaurantService: RestaurantService
  ) {}

  public restaurantResponse$: Observable<RestaurantBundleDTO[]>;

  ngOnInit(): void {
    this.restaurantResponse$ = this.restaurantService.getAllMeals();
    console.log(this.restaurantResponse$);
  }
}
