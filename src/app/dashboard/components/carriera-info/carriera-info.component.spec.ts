import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrieraInfoComponent } from './carriera-info.component';

describe('CarrieraInfoComponent', () => {
  let component: CarrieraInfoComponent;
  let fixture: ComponentFixture<CarrieraInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrieraInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrieraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
