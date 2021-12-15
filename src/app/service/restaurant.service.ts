import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RestaurantBundleDTO, RestaurantItem} from '../models/RestaurantBundleDTO';
import {take} from 'rxjs/operators';

@Injectable({providedIn: 'root'}) // Allows this to be Injected into the root module.
export class RestaurantService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }; // HTTP Header fields.

  constructor(
    private http: HttpClient, // HTTP service class.
    @Inject('env') private env) /*Inject environment for requests */{}

  // Simple get request to fetch all restaurants and meals.
  getAllRestaurantData(): Observable<RestaurantBundleDTO[]> {
    return this.http.get<RestaurantBundleDTO[]>(`${this.env.apiUrl}/restaurants`, this.httpOptions);
  }

  // Get request for restaurant and meals by id.
  getRestaurantById(restaurantId: string): Observable<RestaurantBundleDTO> {
    return this.http.get<RestaurantBundleDTO>(`${this.env.apiUrl}/restaurants/${restaurantId}`, this.httpOptions);
  }

  addRestaurant(restaurant: RestaurantBundleDTO): void {
    this.http.post<RestaurantBundleDTO>(`${this.env.apiUrl}/restaurants`, restaurant);
  }

  // Simple Post Request for adding a meal to a restaurant
  addRestaurantMeal(restaurantMeal: RestaurantItem, restaurantId: string): void {
    this.http.post<RestaurantItem>(`${this.env.apiUrl}/restaurants/addMeal/${restaurantId}`, restaurantMeal, this.httpOptions)
      .pipe(take(1)).subscribe();
  }
}
