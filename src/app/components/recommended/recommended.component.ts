import { Component, OnInit } from '@angular/core';
import { RecommendedService } from 'src/app/services/recommended.service';
import { FoodTastesService } from 'src/app/services/food-tastes.service';
import { PreferencesService } from 'src/app/services/preferences.service';
import { recommended } from 'src/app/interface/recommended.interface';
import { recommendedTypeResponse } from 'src/app/enum/TypeResponse.enum';
@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss'],
})
export class RecommendedComponent implements OnInit {
  responseOk: boolean = true;

  dataSend: recommended = {
    name: '',
    description: '',
    foodTastes: 0,
    preferences: 0,
    typeResponse: 2,
  };

  rest: any = {};
  role = recommendedTypeResponse;

  foodTastes: any = [];
  preferences: any = [];
  constructor(
    private RecommendedService: RecommendedService,
    private foodTastesService: FoodTastesService,
    private preferencesService: PreferencesService
  ) {}

  async ngOnInit(): Promise<any> {
    this.foodTastesService
      .getAllFoodTastes()
      .subscribe((res) => (this.foodTastes = res.data));
    this.preferencesService
      .getAllPreferences()
      .subscribe((res) => (this.preferences = res.data));
  }

  send() {
    this.dataSend.foodTastes = Number(this.dataSend.foodTastes);
    this.dataSend.preferences = Number(this.dataSend.preferences);
    if (this.dataSend.name !== '')
      this.RecommendedService.sendRecommended(this.dataSend).subscribe(
        (res) => {
          this.responseOk = true;
          this.rest = res.data;
        }
      );
  }

  keys(): Array<string> {
    var keys = Object.keys(this.role);
    return keys.slice(keys.length / 2);
  }

  clearData() {
    this.dataSend = {
      name: '',
      description: '',
      foodTastes: 0,
      preferences: 0,
      typeResponse: 2,
    };
    this.rest = {};
  }
}
