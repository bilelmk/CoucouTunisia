import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsUpdateComponent } from './cb-restaurants-update.component';

describe('CbRestaurantsUpdateComponent', () => {
  let component: CbRestaurantsUpdateComponent;
  let fixture: ComponentFixture<CbRestaurantsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
