import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbMainPage } from './cb-main.page';

describe('CbMainPage', () => {
  let component: CbMainPage;
  let fixture: ComponentFixture<CbMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
