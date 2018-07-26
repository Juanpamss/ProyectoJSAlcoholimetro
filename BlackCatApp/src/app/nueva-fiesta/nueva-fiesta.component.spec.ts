import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaFiestaComponent } from './nueva-fiesta.component';

describe('NuevaFiestaComponent', () => {
  let component: NuevaFiestaComponent;
  let fixture: ComponentFixture<NuevaFiestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaFiestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaFiestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
