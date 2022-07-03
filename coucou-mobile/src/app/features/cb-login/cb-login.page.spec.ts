import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbLoginPage } from './cb-login.page';

describe('CbLoginPage', () => {
  let component: CbLoginPage;
  let fixture: ComponentFixture<CbLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
