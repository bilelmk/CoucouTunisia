import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbVerifyPasswordCodePage } from './cb-verify-password-code.page';

describe('CbVerifyPasswordCodePage', () => {
  let component: CbVerifyPasswordCodePage;
  let fixture: ComponentFixture<CbVerifyPasswordCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbVerifyPasswordCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbVerifyPasswordCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
