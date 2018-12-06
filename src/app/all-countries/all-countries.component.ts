import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  countries: any;
  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getAllCountries('all').subscribe((data) => {
      console.log(data)
      this.countries = data;
    });
  }

}
