import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsReservationsComponent } from './cb-restaurants-reservations.component';

describe('CbRestaurantsReservationsComponent', () => {
  let component: CbRestaurantsReservationsComponent;
  let fixture: ComponentFixture<CbRestaurantsReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
