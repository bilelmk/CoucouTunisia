import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbResetPassowrdPage } from './cb-reset-passowrd.page';

describe('CbResetPassowrdPage', () => {
  let component: CbResetPassowrdPage;
  let fixture: ComponentFixture<CbResetPassowrdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbResetPassowrdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbResetPassowrdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
