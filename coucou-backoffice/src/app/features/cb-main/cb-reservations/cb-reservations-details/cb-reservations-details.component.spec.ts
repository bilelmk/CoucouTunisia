import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbReservationsDetailsComponent } from './cb-reservations-details.component';

describe('CbReservationsDetailsComponent', () => {
  let component: CbReservationsDetailsComponent;
  let fixture: ComponentFixture<CbReservationsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbReservationsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbReservationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
