import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbMainReservationsPage } from './cb-main-reservations.page';

describe('CbMainReservationsPage', () => {
  let component: CbMainReservationsPage;
  let fixture: ComponentFixture<CbMainReservationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbMainReservationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbMainReservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
