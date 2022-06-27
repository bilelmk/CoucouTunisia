import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsRoomsAddComponent } from './cb-restaurants-rooms-add.component';

describe('CbRestaurantsRoomsAddComponent', () => {
  let component: CbRestaurantsRoomsAddComponent;
  let fixture: ComponentFixture<CbRestaurantsRoomsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsRoomsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsRoomsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
