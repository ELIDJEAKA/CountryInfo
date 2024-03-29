import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountriesService],
      imports: [ 
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([CountriesService], (service: CountriesService) => {
    expect(service).toBeTruthy();
  }));
});
