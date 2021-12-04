import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsAddImageComponent } from './cb-restaurants-add-image.component';

describe('CbRestaurantsAddImageComponent', () => {
  let component: CbRestaurantsAddImageComponent;
  let fixture: ComponentFixture<CbRestaurantsAddImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsAddImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsAddImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
