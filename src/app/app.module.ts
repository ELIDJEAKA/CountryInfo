import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { AppComponent } from './app.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleCountryComponent } from './single-country/single-country.component';
import { SearchOptionComponent } from './search-option/search-option.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminMenuComponent,
    DashboardComponent,
    AllCountriesComponent,
    SingleCountryComponent,
    SearchOptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
