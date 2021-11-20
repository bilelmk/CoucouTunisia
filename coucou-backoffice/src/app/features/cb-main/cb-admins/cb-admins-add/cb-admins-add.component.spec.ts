import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbAdminsAddComponent } from './cb-admins-add.component';

describe('CbAdminsAddComponent', () => {
  let component: CbAdminsAddComponent;
  let fixture: ComponentFixture<CbAdminsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbAdminsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbAdminsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
