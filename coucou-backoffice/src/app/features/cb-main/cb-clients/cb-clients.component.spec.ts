import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbClientsComponent } from './cb-clients.component';

describe('CbClientsComponent', () => {
  let component: CbClientsComponent;
  let fixture: ComponentFixture<CbClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
