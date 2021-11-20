import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbNotificationsComponent } from './cb-notifications.component';

describe('CbNotificationsComponent', () => {
  let component: CbNotificationsComponent;
  let fixture: ComponentFixture<CbNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
