import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegadorSecundarioComponent } from './navegador-secundario.component';

describe('NavegadorSecundarioComponent', () => {
  let component: NavegadorSecundarioComponent;
  let fixture: ComponentFixture<NavegadorSecundarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegadorSecundarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegadorSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
