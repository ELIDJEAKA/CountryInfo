import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { elementAttribute } from '@angular/core/src/render3/instructions';
import { element } from 'protractor';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor(private countriesService: CountriesService, private router: Router) { }

  public pieChartLabels: string[] = [];
  public pieChartData: number[] =[] ;
  public pieChartType: string = 'pie';

  public LChartLabels: string[] = [];
  public LChartData: number[] =[] ;
  public LChartType: string = 'line';

  public BChartLabels: string[] = [];
  public BChartData: number[] =[] ;
  public BChartType: string = 'bar';


  countries: any;
  region=[];
  lang=[];
  cur=[];
  findChartsRegion=false;
  findChartsLanguague=false;
  findChartsCurrencies=false;
  ngOnInit() {
    console.log(_.isEmpty({})); 
    this.CountriesByRegion();
    this.CountriesByLanguague();
    this.CountriesByCurrencies();
  }

  CountriesByRegion(){
    this.countriesService.getAllCountries('all').subscribe((data) => {
      this.countries = data;
      this.countries.forEach(element => {
        let foundRegion = this.region.findIndex(el =>{
              return el.name === element.region
          })
          if (foundRegion == -1){          
            this.region.push({
              'name':element.region,
              'nombre':1
            })
          }else{
            this.region[foundRegion].nombre +=1
          }
      });
      this.region.forEach(element=>{
        this.pieChartLabels.push(element.name)
        this.pieChartData.push(element.nombre)
      })
      this.findChartsRegion = true;
      return this.region
    });
  }

  CountriesByLanguague(){
    this.countriesService.getAllCountries('all').subscribe((data)=>{
      this.countries = data;
      this.countries.forEach(country=>{ 
          country.languages.forEach(language => {
            let foundLanguage = this.lang.findIndex(el=>{
                return el.name === language.name
              })
              if (foundLanguage == -1){
                this.lang.push({
                  'name':language.name,
                  'nombre':1
                })
              }else{
                this.lang[foundLanguage].nombre += 1
              }
          });
      })
      this.lang.forEach(element => {
        this.LChartLabels.push(element.name)
        this.LChartData.push(element.nombre)
      })
      this.findChartsLanguague = true;
      return this.lang
    })
  }

  CountriesByCurrencies(){
    this.countriesService.getAllCountries('all').subscribe((data)=>{
      this.countries = data;
      this.countries.forEach(country=>{ 
        country.currencies.forEach(currency => {
              let foundCurrency = this.cur.findIndex(el=>{
                return el.name === currency.name
              })
              if (foundCurrency == -1){
                this.cur.push({
                  'name': currency.name,
                  'nombre':1
                })
              }else{
                this.cur[foundCurrency].nombre += 1
              }
          });
      })
      this.lang.forEach(element => {
        this.BChartLabels.push(element.name)
        this.BChartData.push(element.nombre)
      })
      this.findChartsCurrencies = true;
      return this.cur
    })
  }

  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }


}
