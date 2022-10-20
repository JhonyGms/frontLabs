import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FoodTastesService {
  BASE_URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getAllFoodTastes() {
    return this.http.get<any>(`${this.BASE_URL}food-tastes`);
  }
}
