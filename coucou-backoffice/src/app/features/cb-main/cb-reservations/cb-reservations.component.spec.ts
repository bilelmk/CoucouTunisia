import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbReservationsComponent } from './cb-reservations.component';

describe('CbReservationsComponent', () => {
  let component: CbReservationsComponent;
  let fixture: ComponentFixture<CbReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
