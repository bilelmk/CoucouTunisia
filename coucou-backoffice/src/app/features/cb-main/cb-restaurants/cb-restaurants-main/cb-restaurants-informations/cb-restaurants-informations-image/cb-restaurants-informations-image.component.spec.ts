import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsInformationsImageComponent } from './cb-restaurants-informations-image.component';

describe('CbRestaurantsInformationsImageComponent', () => {
  let component: CbRestaurantsInformationsImageComponent;
  let fixture: ComponentFixture<CbRestaurantsInformationsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsInformationsImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsInformationsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
