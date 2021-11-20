import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbStatistiquesComponent } from './cb-statistiques.component';

describe('CbStatistiquesComponent', () => {
  let component: CbStatistiquesComponent;
  let fixture: ComponentFixture<CbStatistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbStatistiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbStatistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
