import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbAdminsUpdateComponent } from './cb-admins-update.component';

describe('CbAdminsUpdateComponent', () => {
  let component: CbAdminsUpdateComponent;
  let fixture: ComponentFixture<CbAdminsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbAdminsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbAdminsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
