import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsInformationsComponent } from './cb-restaurants-informations.component';

describe('CbRestaurantsInformationsComponent', () => {
  let component: CbRestaurantsInformationsComponent;
  let fixture: ComponentFixture<CbRestaurantsInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
