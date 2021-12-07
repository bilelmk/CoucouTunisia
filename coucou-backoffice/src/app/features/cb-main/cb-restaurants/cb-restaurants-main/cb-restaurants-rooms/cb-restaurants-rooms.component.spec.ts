import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsRoomsComponent } from './cb-restaurants-rooms.component';

describe('CbRestaurantsRoomsComponent', () => {
  let component: CbRestaurantsRoomsComponent;
  let fixture: ComponentFixture<CbRestaurantsRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
