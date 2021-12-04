import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbEmailsComponent } from '../../../core/services/http/cb-emails.component';

describe('CbEmailsComponent', () => {
  let component: CbEmailsComponent;
  let fixture: ComponentFixture<CbEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbEmailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
