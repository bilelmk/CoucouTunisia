import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsAddComponent } from './cb-restaurants-add.component';

describe('CbRestaurantsAddComponent', () => {
  let component: CbRestaurantsAddComponent;
  let fixture: ComponentFixture<CbRestaurantsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
