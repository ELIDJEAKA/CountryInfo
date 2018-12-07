import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../services/countries.service';
@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {
  country_name:string
  country:any;
  lat: number;
  lng: number;
  constructor(private countriesService: CountriesService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.country_name = this.router.snapshot.paramMap.get('name')
    this.countriesService.getCountryByName(this.country_name).subscribe((data) => {
      console.log("country detail",data[0])
      this.country = data[0];
      this.lat = this.country.latlng[0]
      this.lng = this.country.latlng[1]
    });
  }

}
