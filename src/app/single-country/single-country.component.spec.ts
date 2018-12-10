import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { SingleCountryComponent } from './single-country.component';
import { environment } from 'src/environments/environment';
const API_KEY = environment.apiKey
describe('SingleCountryComponent', () => {
  let component: SingleCountryComponent;
  let fixture: ComponentFixture<SingleCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCountryComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
          apiKey: API_KEY
        })
      ],
      providers: [
        {
          provide: MapsAPILoader,
          // useValue: {
          //   load: jest.fn().mockReturnValue(new Promise(resolve => resolve(true)))
          // }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
