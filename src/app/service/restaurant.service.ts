import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RestaurantBundleDTO} from '../models/RestaurantBundleDTO';

@Injectable({providedIn: 'root'})
export class RestaurantService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, @Inject('env') private env) {}

  getAllMeals(): Observable<RestaurantBundleDTO[]> {
    return this.http.get<RestaurantBundleDTO[]>(`${this.env.apiUrl}/restaurants`);
  }
}
