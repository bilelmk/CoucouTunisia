import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbParkingComponent } from './cb-parking.component';

describe('CbParkingComponent', () => {
  let component: CbParkingComponent;
  let fixture: ComponentFixture<CbParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbParkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
