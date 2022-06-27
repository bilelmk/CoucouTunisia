import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbReservationAddClientsComponent } from './cb-reservation-add-clients.component';

describe('CbReservationAddClientsComponent', () => {
  let component: CbReservationAddClientsComponent;
  let fixture: ComponentFixture<CbReservationAddClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbReservationAddClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbReservationAddClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
