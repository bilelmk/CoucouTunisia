import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbPermissionsModalComponent } from './cb-permissions-modal.component';

describe('CbPermissionsModalComponent', () => {
  let component: CbPermissionsModalComponent;
  let fixture: ComponentFixture<CbPermissionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbPermissionsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbPermissionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
