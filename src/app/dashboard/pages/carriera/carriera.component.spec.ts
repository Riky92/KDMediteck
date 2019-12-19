import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrieraComponent } from './carriera.component';

describe('CarrieraComponent', () => {
  let component: CarrieraComponent;
  let fixture: ComponentFixture<CarrieraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrieraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
