import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbEmailsClientsComponent } from './cb-emails-clients.component';

describe('CbEmailsClientsComponent', () => {
  let component: CbEmailsClientsComponent;
  let fixture: ComponentFixture<CbEmailsClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbEmailsClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbEmailsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
