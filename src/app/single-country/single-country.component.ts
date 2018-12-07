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
  country:any
  constructor(private countriesService: CountriesService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.country_name = this.router.snapshot.paramMap.get('name')
    console.log(this.country_name)
    this.countriesService.getCountryByName(this.country_name).subscribe((data) => {
      console.log("country kdetail",data[0])
      this.country = data[0];

    });
  }

}
