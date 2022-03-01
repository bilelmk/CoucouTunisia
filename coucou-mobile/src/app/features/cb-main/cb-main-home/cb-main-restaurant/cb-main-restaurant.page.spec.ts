import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbMainRestaurantPage } from './cb-main-restaurant.page';

describe('CbMainRestaurantPage', () => {
  let component: CbMainRestaurantPage;
  let fixture: ComponentFixture<CbMainRestaurantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbMainRestaurantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbMainRestaurantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
