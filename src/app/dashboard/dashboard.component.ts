import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { MapsService } from '../services/maps.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  personnal_data:any;
  country_calling_code:string;
  country: any;
  lat: number;
  lng: number;
  constructor(private mapService: MapsService, private countriesService: CountriesService, private router: Router) { }

  ngOnInit() {
    this.mapService.getLocation().subscribe((data)=>{
      
      this.personnal_data = data
      this.country_calling_code = this.personnal_data.country_calling_code.substr(1)
      this.countriesService.getCountryByCallingCode(this.country_calling_code).subscribe((response)=>{
          this.country = response[0]
          //console.log("longlat ", response)
          this.lat = this.country.latlng[0]
          this.lng = this.country.latlng[1]
      });
    });


  }

  onSelect(country) {
    console.log(country)
    this.router.navigate(['/country-details', country.name])
  }

}
