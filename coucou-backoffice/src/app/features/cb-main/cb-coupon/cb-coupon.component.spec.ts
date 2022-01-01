import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbCouponComponent } from './cb-coupon.component';

describe('CbCouponComponent', () => {
  let component: CbCouponComponent;
  let fixture: ComponentFixture<CbCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
