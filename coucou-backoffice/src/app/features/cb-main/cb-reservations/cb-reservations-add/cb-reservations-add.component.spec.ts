import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbReservationsAddComponent } from './cb-reservations-add.component';

describe('CbReservationsAddComponent', () => {
  let component: CbReservationsAddComponent;
  let fixture: ComponentFixture<CbReservationsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbReservationsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbReservationsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
