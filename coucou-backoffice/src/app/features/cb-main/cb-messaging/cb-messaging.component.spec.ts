import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbMessagingComponent } from './cb-messaging.component';

describe('CbMessagingComponent', () => {
  let component: CbMessagingComponent;
  let fixture: ComponentFixture<CbMessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbMessagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
