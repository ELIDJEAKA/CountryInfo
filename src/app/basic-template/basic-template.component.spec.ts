import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTemplateComponent } from './basic-template.component';

describe('BasicTemplateComponent', () => {
  let component: BasicTemplateComponent;
  let fixture: ComponentFixture<BasicTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
