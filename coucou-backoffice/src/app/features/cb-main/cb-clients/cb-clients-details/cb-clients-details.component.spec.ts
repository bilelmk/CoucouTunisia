import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbClientsDetailsComponent } from './cb-clients-details.component';

describe('CbClientsDetailsComponent', () => {
  let component: CbClientsDetailsComponent;
  let fixture: ComponentFixture<CbClientsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbClientsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbClientsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
