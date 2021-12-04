import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsAddRoomComponent } from './cb-restaurants-add-room.component';

describe('CbRestaurantsAddRoomComponent', () => {
  let component: CbRestaurantsAddRoomComponent;
  let fixture: ComponentFixture<CbRestaurantsAddRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsAddRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsAddRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
