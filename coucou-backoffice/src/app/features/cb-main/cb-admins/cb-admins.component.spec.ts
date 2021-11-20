import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbAdminsComponent } from './cb-admins.component';

describe('CbAdminsComponent', () => {
  let component: CbAdminsComponent;
  let fixture: ComponentFixture<CbAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
