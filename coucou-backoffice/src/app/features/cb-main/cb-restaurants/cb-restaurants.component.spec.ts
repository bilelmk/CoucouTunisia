import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsComponent } from './cb-restaurants.component';

describe('CbRestaurantsComponent', () => {
  let component: CbRestaurantsComponent;
  let fixture: ComponentFixture<CbRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
