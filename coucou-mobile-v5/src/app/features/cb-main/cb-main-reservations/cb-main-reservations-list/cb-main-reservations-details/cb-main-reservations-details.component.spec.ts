import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbMainReservationsDetailsComponent } from './cb-main-reservations-details.component';

describe('CbMainReservationsDetailsComponent', () => {
  let component: CbMainReservationsDetailsComponent;
  let fixture: ComponentFixture<CbMainReservationsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbMainReservationsDetailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbMainReservationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
