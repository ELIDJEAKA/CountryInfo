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


@NgModule({
  declarations: [
    AppComponent,
    AdminMenuComponent,
    DashboardComponent,
    AllCountriesComponent
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
