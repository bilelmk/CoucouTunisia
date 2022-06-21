import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbMainProfilAssistancePage } from './cb-main-profil-assistance.page';

describe('CbMainProfilAssistancePage', () => {
  let component: CbMainProfilAssistancePage;
  let fixture: ComponentFixture<CbMainProfilAssistancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbMainProfilAssistancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbMainProfilAssistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
