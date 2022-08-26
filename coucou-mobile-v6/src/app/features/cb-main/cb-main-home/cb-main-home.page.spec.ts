import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbMainHomePage } from './cb-main-home.page';

describe('CbMainHomePage', () => {
  let component: CbMainHomePage;
  let fixture: ComponentFixture<CbMainHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbMainHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbMainHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
