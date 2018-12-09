import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleCountryComponent } from './single-country/single-country.component';
import { SearchOptionComponent } from './search-option/search-option.component';
import { ChartsComponent } from './charts/charts.component';

import { environment } from 'src/environments/environment';
// import { AuthGuard } from './auth.guard'
// import { NoauthGuard } from './noauth.guard'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BasicTemplateComponent } from './basic-template/basic-template.component';
import { UsersService } from 'src/app/services/users.service';
import { AuthguardGuard } from 'src/app/auth.guard';
import { NoAuthguardGuard } from 'src/app/noauth.guard';
const API_KEY = environment.apiKey

@NgModule({
  declarations: [
    AppComponent,
    AdminMenuComponent,
    DashboardComponent,
    AllCountriesComponent,
    SingleCountryComponent,
    SearchOptionComponent,
    ChartsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BasicTemplateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FormsModule,
    ChartsModule,
    Ng2SearchPipeModule,
    AgmCoreModule.forRoot({
      apiKey: API_KEY
    }),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/admin-dashboard',
        pathMatch: 'full'
      },
      {
        path: 'admin-dashboard',
        component: DashboardComponent,
        canActivate: [AuthguardGuard]
      },
      {
        path: 'admin-all-countries',
        component: AllCountriesComponent,
        canActivate: [AuthguardGuard]
      },
      {
        path: 'country-details/:name',
        component: SingleCountryComponent,
        canActivate: [AuthguardGuard]
      },
      {
        path: 'search-option',
        component: SearchOptionComponent,
        canActivate: [AuthguardGuard]
      },
      {
        path: 'charts-stat',
        component: ChartsComponent,
        canActivate: [AuthguardGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [NoAuthguardGuard]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NoAuthguardGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthguardGuard]
      }
    ])
  ],
  providers: [UsersService,AuthguardGuard,NoAuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
