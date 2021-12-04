import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRolesPermissionsComponent } from './cb-roles-permissions.component';

describe('CbRolesPermissionsComponent', () => {
  let component: CbRolesPermissionsComponent;
  let fixture: ComponentFixture<CbRolesPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRolesPermissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRolesPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
