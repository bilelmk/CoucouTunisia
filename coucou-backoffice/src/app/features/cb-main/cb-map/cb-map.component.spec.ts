import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbMapComponent } from './cb-map.component';

describe('CbMapComponent', () => {
  let component: CbMapComponent;
  let fixture: ComponentFixture<CbMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
