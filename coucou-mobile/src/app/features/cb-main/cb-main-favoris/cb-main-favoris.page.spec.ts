import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbMainFavorisPage } from './cb-main-favoris.page';

describe('CbMainFavorisPage', () => {
  let component: CbMainFavorisPage;
  let fixture: ComponentFixture<CbMainFavorisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbMainFavorisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbMainFavorisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
