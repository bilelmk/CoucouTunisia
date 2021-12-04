import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbNotificationsClientsComponent } from './cb-notifications-clients.component';

describe('CbNotificationsClientsComponent', () => {
  let component: CbNotificationsClientsComponent;
  let fixture: ComponentFixture<CbNotificationsClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbNotificationsClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbNotificationsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
