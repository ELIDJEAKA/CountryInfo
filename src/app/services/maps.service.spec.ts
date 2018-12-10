import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { MapsService } from './maps.service';

describe('MapsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapsService],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([MapsService], (service: MapsService) => {
    expect(service).toBeTruthy();
  }));
});
