import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsAddMenuComponent } from './cb-restaurants-add-menu.component';

describe('CbRestaurantsAddMenuComponent', () => {
  let component: CbRestaurantsAddMenuComponent;
  let fixture: ComponentFixture<CbRestaurantsAddMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsAddMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsAddMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
