import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsClientsComponent } from './cb-restaurants-clients.component';

describe('CbRestaurantsClientsComponent', () => {
  let component: CbRestaurantsClientsComponent;
  let fixture: ComponentFixture<CbRestaurantsClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
