import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbMainNewReservationPage } from './cb-main-new-reservation.page';

describe('CbMainNewReservationPage', () => {
  let component: CbMainNewReservationPage;
  let fixture: ComponentFixture<CbMainNewReservationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbMainNewReservationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbMainNewReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
