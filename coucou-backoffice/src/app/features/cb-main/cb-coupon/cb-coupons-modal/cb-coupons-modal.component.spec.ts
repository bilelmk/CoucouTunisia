import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbCouponsModalComponent } from './cb-coupons-modal.component';

describe('CbCouponsModalComponent', () => {
  let component: CbCouponsModalComponent;
  let fixture: ComponentFixture<CbCouponsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbCouponsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbCouponsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
