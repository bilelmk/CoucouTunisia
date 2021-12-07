import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsMenuComponent } from './cb-restaurants-menu.component';

describe('CbRestaurantsMenuComponent', () => {
  let component: CbRestaurantsMenuComponent;
  let fixture: ComponentFixture<CbRestaurantsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
