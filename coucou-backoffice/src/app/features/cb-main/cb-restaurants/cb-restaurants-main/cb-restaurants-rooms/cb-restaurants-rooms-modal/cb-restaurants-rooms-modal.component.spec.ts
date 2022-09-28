import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsRoomsModalComponent } from './cb-restaurants-rooms-modal.component';

describe('CbRestaurantsRoomsModalComponent', () => {
  let component: CbRestaurantsRoomsModalComponent;
  let fixture: ComponentFixture<CbRestaurantsRoomsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsRoomsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsRoomsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
