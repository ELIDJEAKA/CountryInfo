import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { environment } from 'src/environments/environment';
const API_KEY = environment.apiKey
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
