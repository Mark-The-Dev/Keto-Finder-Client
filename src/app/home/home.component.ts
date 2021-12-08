import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../service/restaurant.service';
import {Observable} from 'rxjs';
import {RestaurantBundleDTO} from '../models/RestaurantBundleDTO';
import { Router} from '@angular/router';


@Component({
  selector: 'app-home', // component name in template.
  templateUrl: './home.component.html', // template file
  styleUrls: ['./home.component.scss'] // style sheet
})
export class HomeComponent implements OnInit{

  constructor(
    public restaurantService: RestaurantService, // Injected service.
    private router: Router // Injected Router
  ) {}

  // Observable with restaurant data.
  public restaurantResponse$: Observable<RestaurantBundleDTO[]>;

  // Lifecycle hook - OnInit will fire when the component is created
  ngOnInit(): void {
    // Request to grab all restaurant data.
    this.restaurantResponse$ = this.restaurantService.getAllMeals();
  }

  // Simple navigate method for the html template
  navigateTo(restaurantName: string, restaurantInfo: RestaurantBundleDTO): void{
    const urlSlug = restaurantName.split(' ').join('-');
    this.router.navigateByUrl(`/restaurants/${urlSlug}`, {state : {restaurant: restaurantInfo}});

  }
}
