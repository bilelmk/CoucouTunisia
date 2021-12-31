import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsAddLocationComponent } from './cb-restaurants-add-location.component';

describe('CbRestaurantsAddLocationComponent', () => {
  let component: CbRestaurantsAddLocationComponent;
  let fixture: ComponentFixture<CbRestaurantsAddLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsAddLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsAddLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
