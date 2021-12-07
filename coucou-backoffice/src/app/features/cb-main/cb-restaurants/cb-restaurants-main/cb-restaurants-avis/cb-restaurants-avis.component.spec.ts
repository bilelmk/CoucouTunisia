import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRestaurantsAvisComponent } from './cb-restaurants-avis.component';

describe('CbRestaurantsAvisComponent', () => {
  let component: CbRestaurantsAvisComponent;
  let fixture: ComponentFixture<CbRestaurantsAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRestaurantsAvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRestaurantsAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
