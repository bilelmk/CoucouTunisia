import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbNavbarComponent } from './cb-navbar.component';

describe('CbNavbarComponent', () => {
  let component: CbNavbarComponent;
  let fixture: ComponentFixture<CbNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
