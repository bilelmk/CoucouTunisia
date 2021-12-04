import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbAdminsModalComponent } from './cb-admins-modal.component';

describe('CbAdminsModalComponent', () => {
  let component: CbAdminsModalComponent;
  let fixture: ComponentFixture<CbAdminsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbAdminsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbAdminsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
