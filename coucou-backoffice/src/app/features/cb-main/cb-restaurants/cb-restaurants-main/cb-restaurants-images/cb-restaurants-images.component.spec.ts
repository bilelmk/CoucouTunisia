import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsImagesComponent } from './cb-restaurants-images.component';

describe('CbRestaurantsImagesComponent', () => {
  let component: CbRestaurantsImagesComponent;
  let fixture: ComponentFixture<CbRestaurantsImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
