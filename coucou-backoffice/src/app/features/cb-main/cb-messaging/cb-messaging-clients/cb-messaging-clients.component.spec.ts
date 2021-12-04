import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbMessagingClientsComponent } from './cb-messaging-clients.component';

describe('CbMessagingClientsComponent', () => {
  let component: CbMessagingClientsComponent;
  let fixture: ComponentFixture<CbMessagingClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbMessagingClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbMessagingClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
