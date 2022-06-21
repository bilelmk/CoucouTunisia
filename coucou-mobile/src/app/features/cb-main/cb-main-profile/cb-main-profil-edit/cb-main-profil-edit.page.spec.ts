import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbMainProfilEditPage } from './cb-main-profil-edit.page';

describe('CbMainProfilEditPage', () => {
  let component: CbMainProfilEditPage;
  let fixture: ComponentFixture<CbMainProfilEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbMainProfilEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbMainProfilEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
