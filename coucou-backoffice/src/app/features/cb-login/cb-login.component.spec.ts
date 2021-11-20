import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbLoginComponent } from './cb-login.component';

describe('CbLoginComponent', () => {
  let component: CbLoginComponent;
  let fixture: ComponentFixture<CbLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
