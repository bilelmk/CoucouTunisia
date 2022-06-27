import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsMenusAddComponent } from './cb-restaurants-menus-add.component';

describe('CbRestaurantsMenusAddComponent', () => {
  let component: CbRestaurantsMenusAddComponent;
  let fixture: ComponentFixture<CbRestaurantsMenusAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsMenusAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsMenusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
