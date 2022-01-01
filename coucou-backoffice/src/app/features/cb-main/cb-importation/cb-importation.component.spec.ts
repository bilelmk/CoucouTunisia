import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbImportationComponent } from './cb-importation.component';

describe('CbImportationComponent', () => {
  let component: CbImportationComponent;
  let fixture: ComponentFixture<CbImportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbImportationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbImportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
