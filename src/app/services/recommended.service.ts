import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { recommended } from '../interface/recommended.interface';

@Injectable({
  providedIn: 'root',
})
export class RecommendedService {
  BASE_URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  sendRecommended(data: any) {
    return this.http.post<any>(`${this.BASE_URL}recommended/query`, data);
  }
}
