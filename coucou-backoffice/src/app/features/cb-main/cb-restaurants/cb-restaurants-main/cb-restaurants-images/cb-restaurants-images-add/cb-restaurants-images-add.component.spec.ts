import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsImagesAddComponent } from './cb-restaurants-images-add.component';

describe('CbRestaurantsImagesAddComponent', () => {
  let component: CbRestaurantsImagesAddComponent;
  let fixture: ComponentFixture<CbRestaurantsImagesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsImagesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsImagesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
