import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbCopyrightComponent } from './cb-copyright.component';

describe('CbCopyrightComponent', () => {
  let component: CbCopyrightComponent;
  let fixture: ComponentFixture<CbCopyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbCopyrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
