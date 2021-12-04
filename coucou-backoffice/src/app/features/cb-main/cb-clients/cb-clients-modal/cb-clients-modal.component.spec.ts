import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbClientsModalComponent } from './cb-clients-modal.component';

describe('CbClientsModalComponent', () => {
  let component: CbClientsModalComponent;
  let fixture: ComponentFixture<CbClientsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbClientsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbClientsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
