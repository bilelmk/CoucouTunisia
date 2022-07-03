import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbMainReservationsRdvComponent } from './cb-main-reservations-rdv.component';

describe('CbMainReservationsRdvComponent', () => {
  let component: CbMainReservationsRdvComponent;
  let fixture: ComponentFixture<CbMainReservationsRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbMainReservationsRdvComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbMainReservationsRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
