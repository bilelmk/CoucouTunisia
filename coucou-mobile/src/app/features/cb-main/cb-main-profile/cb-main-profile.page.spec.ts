import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbMainProfilePage } from './cb-main-profile.page';

describe('CbMainProfilePage', () => {
  let component: CbMainProfilePage;
  let fixture: ComponentFixture<CbMainProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbMainProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbMainProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
