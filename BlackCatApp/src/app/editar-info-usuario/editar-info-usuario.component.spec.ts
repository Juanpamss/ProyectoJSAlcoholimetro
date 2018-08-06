import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInfoUsuarioComponent } from './editar-info-usuario.component';

describe('EditarInfoUsuarioComponent', () => {
  let component: EditarInfoUsuarioComponent;
  let fixture: ComponentFixture<EditarInfoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarInfoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInfoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
