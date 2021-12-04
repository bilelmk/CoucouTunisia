import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbSecondSidebarComponent } from './cb-second-sidebar.component';

describe('CbSecondSidebarComponent', () => {
  let component: CbSecondSidebarComponent;
  let fixture: ComponentFixture<CbSecondSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbSecondSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbSecondSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
