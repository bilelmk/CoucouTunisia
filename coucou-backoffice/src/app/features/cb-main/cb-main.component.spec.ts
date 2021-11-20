import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbMainComponent } from './cb-main.component';

describe('CbMainComponent', () => {
  let component: CbMainComponent;
  let fixture: ComponentFixture<CbMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
