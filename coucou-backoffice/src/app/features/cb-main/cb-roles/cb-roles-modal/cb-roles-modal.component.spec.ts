import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRolesModalComponent } from './cb-roles-modal.component';

describe('CbRolesModalComponent', () => {
  let component: CbRolesModalComponent;
  let fixture: ComponentFixture<CbRolesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbRolesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRolesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
