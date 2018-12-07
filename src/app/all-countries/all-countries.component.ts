import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from '../services/countries.service';
@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  countries: any;
  constructor(private countriesService: CountriesService,private router:Router) { }

  ngOnInit() {
    this.countriesService.getAllCountries('all').subscribe((data) => {
      console.log(data)
      this.countries = data;
    });
  }

  onSelect(country){
    console.log(country)
    this.router.navigate(['/country-details',country.name])
  }

}
