import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbPermissionsComponent } from './cb-permissions.component';

describe('CbPermissionsComponent', () => {
  let component: CbPermissionsComponent;
  let fixture: ComponentFixture<CbPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbPermissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
