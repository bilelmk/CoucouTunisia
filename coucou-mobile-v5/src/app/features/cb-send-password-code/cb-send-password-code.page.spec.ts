import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbSendPasswordCodePage } from './cb-send-password-code.page';

describe('CbSendPasswordCodePage', () => {
  let component: CbSendPasswordCodePage;
  let fixture: ComponentFixture<CbSendPasswordCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbSendPasswordCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbSendPasswordCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
