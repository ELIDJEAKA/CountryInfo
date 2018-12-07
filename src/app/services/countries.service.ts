import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

    getAllCountries(url) {
        return this.http.get(`${API_URL}/${url}`);
    }
    
    getCountryByName(name) {
        return this.http.get(`${API_URL}/name/${name}?fullText=true`);
    }
    
    getCountryByCallingCode(code){
      return this.http.get(`${API_URL}/callingcode/${code}`);
    }
}
