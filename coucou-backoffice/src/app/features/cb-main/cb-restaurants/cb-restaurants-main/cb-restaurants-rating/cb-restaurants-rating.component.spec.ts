import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsRatingComponent } from './cb-restaurants-rating.component';

describe('CbRestaurantsRatingComponent', () => {
  let component: CbRestaurantsRatingComponent;
  let fixture: ComponentFixture<CbRestaurantsRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
