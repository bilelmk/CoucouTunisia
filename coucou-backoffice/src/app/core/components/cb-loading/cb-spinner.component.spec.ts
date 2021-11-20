import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbSpinnerComponent } from './cb-spinner.component';

describe('CbLoadingComponent', () => {
  let component: CbSpinnerComponent;
  let fixture: ComponentFixture<CbSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
