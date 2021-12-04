import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRolesComponent } from './cb-roles.component';

describe('CbRolesComponent', () => {
  let component: CbRolesComponent;
  let fixture: ComponentFixture<CbRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
