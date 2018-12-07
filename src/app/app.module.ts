import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleCountryComponent } from './single-country/single-country.component';
import { SearchOptionComponent } from './search-option/search-option.component';
import { ChartsComponent } from './charts/charts.component';

import { environment } from 'src/environments/environment';
const API_KEY = environment.apiKey

@NgModule({
  declarations: [
    AppComponent,
    AdminMenuComponent,
    DashboardComponent,
    AllCountriesComponent,
    SingleCountryComponent,
    SearchOptionComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqHR9KE3zTg621_Ee0DHfRzov18cVIFfc'
    }),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/admin-dashboard',
        pathMatch: 'full'
      },
      {
        path: 'admin-dashboard',
        component: DashboardComponent
      },
      {
        path: 'admin-all-countries',
        component: AllCountriesComponent
      },
      {
        path: 'country-details/:name',
        component: SingleCountryComponent
      },
      {
        path: 'search-option',
        component: SearchOptionComponent
      },
      {
        path: 'charts-stat',
        component: ChartsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
