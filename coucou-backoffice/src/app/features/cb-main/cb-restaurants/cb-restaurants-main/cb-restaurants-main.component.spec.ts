import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsMainComponent } from './cb-restaurants-main.component';

describe('CbRestaurantsMainComponent', () => {
  let component: CbRestaurantsMainComponent;
  let fixture: ComponentFixture<CbRestaurantsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
