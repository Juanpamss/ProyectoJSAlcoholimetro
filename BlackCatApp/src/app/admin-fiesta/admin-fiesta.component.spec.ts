import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFiestaComponent } from './admin-fiesta.component';

describe('AdminFiestaComponent', () => {
  let component: AdminFiestaComponent;
  let fixture: ComponentFixture<AdminFiestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFiestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFiestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
