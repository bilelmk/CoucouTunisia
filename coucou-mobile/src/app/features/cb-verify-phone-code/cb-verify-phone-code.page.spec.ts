import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbVerifyPhoneCodePage } from './cb-verify-phone-code.page';

describe('CbVerifyPhoneCodePage', () => {
  let component: CbVerifyPhoneCodePage;
  let fixture: ComponentFixture<CbVerifyPhoneCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbVerifyPhoneCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbVerifyPhoneCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
