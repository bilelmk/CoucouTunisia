import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbErrorsComponent } from './cb-errors.component';

describe('CbErrorsComponent', () => {
  let component: CbErrorsComponent;
  let fixture: ComponentFixture<CbErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbErrorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
