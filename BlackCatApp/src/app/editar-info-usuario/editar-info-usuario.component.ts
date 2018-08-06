import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-editar-info-usuario',
  templateUrl: './editar-info-usuario.component.html',
  styleUrls: ['./editar-info-usuario.component.css']
})
export class EditarInfoUsuarioComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

}
