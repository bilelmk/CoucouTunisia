import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbMainRestaurantReservationComponent } from './cb-main-restaurant-reservation.component';

describe('CbMainRestaurantReservationComponent', () => {
  let component: CbMainRestaurantReservationComponent;
  let fixture: ComponentFixture<CbMainRestaurantReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbMainRestaurantReservationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbMainRestaurantReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
