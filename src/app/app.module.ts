import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodTastesComponent } from './components/food-tastes/food-tastes.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodTastesComponent,
    PreferencesComponent,
    RecommendedComponent,
    SuggestionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
