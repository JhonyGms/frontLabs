import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  BASE_URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getAllPreferences() {
    return this.http.get<any>(`${this.BASE_URL}preferences`);
  }
}
