import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbMainHomeRestaurantDetailsPage } from './cb-main-home-restaurant-details.page';

describe('CbMainHomeRestaurantDetailsPage', () => {
  let component: CbMainHomeRestaurantDetailsPage;
  let fixture: ComponentFixture<CbMainHomeRestaurantDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbMainHomeRestaurantDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbMainHomeRestaurantDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
