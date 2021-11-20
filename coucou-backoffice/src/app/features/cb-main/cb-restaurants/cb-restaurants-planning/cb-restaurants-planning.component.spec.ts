import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsPlanningComponent } from './cb-restaurants-planning.component';

describe('CbRestaurantsPlanningComponent', () => {
  let component: CbRestaurantsPlanningComponent;
  let fixture: ComponentFixture<CbRestaurantsPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
