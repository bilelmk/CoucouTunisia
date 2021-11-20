import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbSidebarComponent } from './cb-sidebar.component';

describe('CbSidebarComponent', () => {
  let component: CbSidebarComponent;
  let fixture: ComponentFixture<CbSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
