import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbUsersSelectComponent } from './cb-users-select.component';

describe('CbUsersSelectComponent', () => {
  let component: CbUsersSelectComponent;
  let fixture: ComponentFixture<CbUsersSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbUsersSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbUsersSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
