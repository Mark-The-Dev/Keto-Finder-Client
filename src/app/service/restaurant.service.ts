import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {RestaurantBundleDTO, RestaurantItem} from '../models/RestaurantBundleDTO';
import {take} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class RestaurantService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, @Inject('env') private env) {}

  getAllMeals(): Observable<RestaurantBundleDTO[]> {
    return this.http.get<RestaurantBundleDTO[]>(`${this.env.apiUrl}/restaurants`, this.httpOptions);
  }

  getRestaurantById(restaurantId: string): Observable<RestaurantBundleDTO> {
    return this.http.get<RestaurantBundleDTO>(`${this.env.apiUrl}/restaurants/${restaurantId}`, this.httpOptions);
  }

  addRestaurant(restaurant: RestaurantBundleDTO): void {
    this.http.post<RestaurantBundleDTO>(`${this.env.apiUrl}/restaurants`, restaurant);
  }

  addRestaurantMeal(restaurantMeal: RestaurantItem, restaurantId: string): void {
    this.http.post<RestaurantItem>(`${this.env.apiUrl}/restaurants/addMeal/${restaurantId}`, restaurantMeal, this.httpOptions)
      .pipe(take(1)).subscribe();
  }


}
