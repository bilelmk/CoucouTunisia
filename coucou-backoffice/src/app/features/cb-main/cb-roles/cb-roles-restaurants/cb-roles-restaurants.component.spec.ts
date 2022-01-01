import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRolesRestaurantsComponent } from './cb-roles-restaurants.component';

describe('CbRolesRestaurantsComponent', () => {
  let component: CbRolesRestaurantsComponent;
  let fixture: ComponentFixture<CbRolesRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRolesRestaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRolesRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
